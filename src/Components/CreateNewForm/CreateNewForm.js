
import React ,{useState} from 'react';
import Navbar from '../NavBar/NavBar';

const CreateNewForm = ({data,setData}) => {

  const [name,setName] =useState("")
  const [projectLink,setProjectLink] =useState("")
  const [hw1,setHW1] =useState(0)
  const [hw2,setHW2] =useState(0)
  console.log(name,'NAME');
  console.log(projectLink,'projectLink');
  console.log(hw1,'hw1');
  console.log(hw2,'hw2');

function handleNameInput (e) {
  setName(e.target.value) 
}
function handleProjectLink (e) {
  setProjectLink(e.target.value)
}
function handleHW1 (e) {
  setHW1(e.target.value)
}
function handleHW2 (e) {
  setHW2(e.target.value)
}
function handleSubmit (e) {
const cData = [...data]
let newEntry ={
  Name: name,
  "Netlify Project Link": projectLink,
  "Homework1 ( 2 ) Git Practice": hw1,
  "Homework2( 2 ) Javascript": hw2,
}
cData.push(newEntry)
console.log(cData,'cData');
setData(cData)

}

return (
  <div >
    <Navbar>
<label>Whats the name</label> {" "}
<input type='text' value={name} placeholder="Enter your name here" onChange={(e)=>handleNameInput(e)}/>
<br/>
<label>Project Link</label> {" "}
<input type='text' value={projectLink} placeholder="Project Link" onChange={(e)=>handleProjectLink(e)}/>
<br/>
<label>HW1 </label> {" "}
<input type='number' value={hw1} placeholder="Project Link" onChange={(e)=>handleHW1(e)}/>
<br/>
<label>HW2 </label> {" "}
<input type='number' value={hw2} placeholder="Project Link" onChange={(e)=>handleHW2(e)}/>

<button onClick={()=>handleSubmit()}>SUBMIT </button>
</Navbar>
</div>

)


};  

export default CreateNewForm;

