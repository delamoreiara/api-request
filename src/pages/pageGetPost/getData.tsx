import { Post } from "../../Utils/App"
import axios from "axios";
import { useState} from "react";
import { Text } from '@interco/inter-ui/components/Text'
import { Button } from "@interco/inter-ui/components/Button";
import { useNavigate } from "react-router-dom";
import RouteName from "../../Route/routeName";

function GetDataList(){
    const url = "https://jsonplaceholder.typicode.com/todos"
    const [dataPost, setDataPost] = useState<Post[]>([]);
    let navigate = useNavigate();
    const getDados = async ()=>{

        try {
          const response = await axios.get<Post[]>(url);
          const dataPost = response.data;
          setDataPost(dataPost);
        } catch(error){console.error(error)}
      }
      const nextPage = () =>{
        navigate(RouteName.GETID)
      }
return(
  <div>
  <Button variant='secondary' size="default" fixedWidth type='submit' onClick={() => getDados()}>Get List</Button>
  <br></br>
  {dataPost.length > 0 && (
    <>
      <br></br>
        <h2><Text variant='headline-big'>Listagem completa das postagens</Text></h2>
      <br/>
        <ul>
          {dataPost.map((item) => (
            <li key={item.id}><Text variant='headline-h3'>{item.title}</Text></li>
          ))}
        </ul>
    </>
  )}
  <p><Button variant='primary' size="default" fixedWidth type='submit' onClick={() => nextPage()}>Next Page</Button></p>
  </div>     
)
}
export default GetDataList