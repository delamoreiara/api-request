import { Post } from "../../Utils/App"
import axios from "axios";
import { useState, ChangeEvent} from "react";
import { Text } from '@interco/inter-ui/components/Text'
import { Button } from '@interco/inter-ui/components/Button'
import { useNavigate } from "react-router-dom";
import RouteName from "../../Route/routeName";
import { Input } from "@interco/inter-ui/components/Input";

function GetIdPost(){
const [idPost, setIdPost] = useState<string|undefined>()
const [idDataPost, setIdDataPost] = useState<Post | null>(null);
const url = "https://jsonplaceholder.typicode.com/todos"
let navigate= useNavigate();

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  setIdPost (event.target.value);
 };

const getPost = async ()=>{   
  try{
    const response = await axios.get<Post>(`${url}/${idPost}`);
    const idDataPost = response.data;
    setIdDataPost(idDataPost);
  }
    catch(error){console.error(error)}
  }

  const nextPage = () =>{
    navigate(RouteName.UPDATE)
  }

  return(
    <div>
      <label htmlFor='idPost'>
      <Input type='text'  name='idPost'
      id='idPost' placeholder='Selected ID:'
      value={idPost} onChange={handleChange}>
      </Input>
      </label>
      <div>
      {idDataPost && (
        <>
        <br></br>
        <h2><Text variant='headline-big'>Selected Id: </Text></h2>
        <br/>
          <ul>
            <li><Text variant='headline-h3'>{idPost+ "-  "}{idDataPost.title}</Text></li>
          </ul>   
        </>
        )}
    <Button variant='secondary' size="default" fixedWidth type='submit' onClick={() => getPost()}>Search ID</Button>
    </div>
    <Button variant='primary' size="default" fixedWidth type='submit' onClick={() => nextPage()}>Next Page</Button>
    </div>
  )
}
export default GetIdPost