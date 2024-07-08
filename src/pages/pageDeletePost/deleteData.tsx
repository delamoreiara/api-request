import axios from "axios"
import { useState, ChangeEvent } from "react"
import { Input } from '@interco/inter-ui/components/Input';
import { Button } from '@interco/inter-ui/components/Button';
import { useNavigate } from "react-router-dom";
import RouteName from "../../Route/routeName";

function DeleteData(){
  const url = "https://jsonplaceholder.typicode.com/todos"
  let navigate= useNavigate();
  const [deletedId, setDeletedId] = useState<string| undefined>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeletedId(event.target.value);
  };

  const deletePost = async()=>{
    try{
      axios.delete(`${url}/${deletedId}`);
      alert("ID deleted successfully");
    }catch(error){console.error(error)}
  }
  const nextPage = () =>{
    navigate(RouteName.ROOT)
  }

  return(
    <div>
        <label htmlFor='deletData'>
            <Input
              type='text'  name='deletedId'
              id='deletedId' placeholder='Delete ID:'
              value={deletedId} onChange={handleChange}>
           </Input>
           <br></br>
              <Button variant='secondary' size="default" fixedWidth type='submit' onClick={() => deletePost()}>Delete</Button>
        </label>
        <br></br>
        <Button variant='primary' size="default" fixedWidth type='submit' onClick={() => nextPage()}>Return Home</Button>
        <br></br>
    </div>
  )
}
export default DeleteData