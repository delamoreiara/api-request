import axios from "axios"
import { useState, ChangeEvent } from "react"
import { Input } from '@interco/inter-ui/components/Input';
import { Button } from '@interco/inter-ui/components/Button'
import { Text } from '@interco/inter-ui/components/Text'
import { useNavigate } from "react-router-dom";
import RouteName from "../../Route/routeName";

interface PostData {
  nameId: string;
  content: string;
}

function PostNewData(){
  const [nameId, setNameId] = useState('');
  const [content, setContent] = useState('');
  let navigate = useNavigate();
  const [postData, setPostData] = useState<PostData[]>([]);
    const url = "https://jsonplaceholder.typicode.com/todos"

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setContent(event.target.value);
    };
    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
      setNameId(event.target.value);
    };
  
    const postDataItem = async ()=>{
        const data: PostData = {
          nameId : nameId,
          content : content,
        }
        axios.post(url, data)
        .then(response => {
          console.log(response);
          setPostData(prevData => [...prevData, data]); 
        })
          .catch(error=>console.error(error))
      }
      const nextPage = () =>{
        navigate(RouteName.DELETE)
      }

    return(
    <div>
      <label htmlFor='nameId'>
          <Input
            type='text'  name='nameId'
            id='nameId'placeholder='Post name'
            value={nameId} onChange={handleChangeName}
          />
        </label>
        <br></br>
        <label htmlFor='content'>
          <Input
            type='text'  name='content'
            id='content' placeholder='Content'
            value={content} onChange={handleChange}
          />
        </label>
        <br/>
        <Button variant='secondary' size="default" fixedWidth onClick={postDataItem}>Post Data</Button>
        <br></br>
        {postData.map((item, index) => (
          <div key={index}>
            <br></br>
            <Text variant='headline-h3'>Title: {item.nameId}</Text>
            <br></br>
            <Text variant='headline-h3'>Content: {item.content}</Text>
            <br></br>
            <br></br>
          </div>
        ))}
         <p><Button variant='primary' size="default" fixedWidth type='submit' onClick={() => nextPage()}>Next Page</Button></p>
    </div>
    )
}
export default PostNewData