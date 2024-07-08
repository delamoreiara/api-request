import axios from "axios"
import { useState, ChangeEvent } from "react";
import { Input } from "@interco/inter-ui/components/Input";
import { useNavigate } from "react-router-dom";
import RouteName from "../../Route/routeName";
import { Button } from '@interco/inter-ui/components/Button';

function UpdateDataPage(){

const url = "https://jsonplaceholder.typicode.com/todos"
const [idUpdate, setIdUpdate] = useState<string|undefined>('')
const [nameId, setNameId] = useState<string | undefined>('')
const [content, setContent] = useState<string | undefined>('')
let navigate= useNavigate()

const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setNameId(event.target.value);
};
const handleChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
};
const handleChangeUpdate = (event: ChangeEvent<HTMLInputElement>) => {
setIdUpdate (event.target.value);
};

const putData = async ()=>{
const updateData ={
    nameId : nameId,
    content : content,
}
try{
    axios.put(`${url}/${idUpdate}`,updateData)
    alert("ID updated successfully");
}catch(error) {console.error(error)}
    }
    const nextPage = () =>{
    navigate(RouteName.POST)
    }
return(
    <div>
    <label htmlFor='idUpdate'>
        <Input
        mask=''
        type='text'  name='idUpdate'
        id='idUpdate' placeholder='Change ID:'
        value={idUpdate} onChange={handleChangeUpdate}>
        </Input>
        <br></br>
    </label>
    <label htmlFor='nameId'>
          <Input
            type='text'  name='nameId'
            id='nameId'placeholder='New post name'
            value={nameId} onChange={handleChangeName}
          />
    </label>
        <br></br>
    <label htmlFor='content'>
          <Input
            type='text'  name='content'
            id='content' placeholder='Nem content'
            value={content} onChange={handleChangeContent}
          />
    </label>
        <br/>
    <Button variant='secondary' size="default" fixedWidth type='submit' onClick={() => putData()}>Update</Button>
    <br></br>
    <Button variant='primary' size="default" fixedWidth type='submit' onClick={() => nextPage()}>Next Page</Button>
    </div>
)
}
export default UpdateDataPage