import React, {useState, useEffect} from 'react';
import MainTable from './MainTable';


const EditForm = ({data,setData,selectedRow,setSelectedRow}) => {
    console.log(selectedRow,'selectedRowXXX')
  

const [name,setName] =useState("")
const [email,setEmail] =useState("")
const [phone,setPhone] =useState("")
const [link,setProjectLink] =useState("")
const [hw1,setHW1] =useState(0)
const [hw2,setHW2] =useState(0)

useEffect(()=> {

    const {Name:currentName,email:currentEmail, phone:currentPhone,"Netlify Project Link":currentProjectLink,"Homework1 ( 2 ) Git Practice":currentHW1,"Homework2( 2 ) Javascript":currentHW2} = selectedRow;
    setName(currentName)
    setProjectLink(currentProjectLink)
    setEmail(currentEmail)
    setPhone(currentPhone)
    setHW1(currentHW1)
    setHW2(currentHW2)
  },[])
        
        function handleNameInput(e){
            setName(e.target.value)
        }
        function handleEmailInput(e){
            setEmail(e.target.value)
        }
        function handlePhoneInput(e){
            setPhone(e.target.value)
        }
        function handleLinkInput(e){
            setProjectLink(e.target.value)
        }
        function handleHW1Input(e){
            setHW1(e.target.value)
        }
        function handleHW2Input(e){
            setHW2(e.target.value)
        }  
        function handleSubmit (e) {
            // const cData = [...data]
            
            let editedEntry ={
              Name: name,
              Email:email,
              Phone:phone,
              "Netlify Project Link": link,
              "Homework1 ( 2 ) Git Practice": hw1,
              "Homework2( 2 ) Javascript": hw2,
            }
            let cData = [...data]
            let filtereddata = cData.filter(i=>i.Name !== selectedRow.Name )
            filtereddata.push(editedEntry)
            
            setData(filtereddata)
            
            }
        
          

        // useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/posts/1')
        // .then((response) => response.json(), 'response,XXX')
        // .then((json) => console.log('component did mount and get daata'));
        // })
    
    return (
        <div>
     <br/>
             <label>Name?</label>&nbsp;
             <input type='text' value={name} onChange={(e)=>handleNameInput(e)}/>
             {name}
             <br/>
             <label>Email?</label>&nbsp;
             <input type='text' value={email} onChange={(e)=>handleEmailInput(e)}/>
             {email}
             <br/>
             <label>Phone?</label>&nbsp;
             <input type='text' value={phone} onChange={(e)=>handlePhoneInput(e)}/>
             {phone}
             <br/>
             <label>Link?</label>&nbsp;
             <input type='text' value={link} onChange={(e)=>handleLinkInput(e)}/>
             {link}
             <br/>
             <label>Homework 1</label>&nbsp;
             <input type='number' value={hw1} onChange={(e)=>handleHW1Input(e)}/>
             {hw1}
             <br/>
             <label>Homework 2</label>&nbsp;
             <input type='number' value={hw2} onChange={(e)=>handleHW2Input(e)}/>
             {hw2}
           <br/>
             <button onClick={(e)=>handleSubmit()}>Submit Edit</button>
            <br/> 
        </div>
    )}

export default EditForm;