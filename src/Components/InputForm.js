import React, {useState} from 'react';
import MainTable from './MainTable';


const CreateNewForm = ({data, setData}) => {


        const [name, setName]= useState("")
        const [email, setEmail]= useState("")
        const [phone, setPhone]= useState("")
        const [link, setLink]= useState("")
        const [HW1, setHW1]= useState("")
        const [HW2, setHW2]= useState("")
       
        
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
            setLink(e.target.value)
        }

        function handleHW1Input(e){
            setHW1(e.target.value)
        }

        function handleHW2Input(e){
            setHW2(e.target.value)
        }

        function submitNewData(e){
          //  e.preventDefault
            const newData= [...data]
            let item = {
                Name :name,
                "Email Address": email,
                "Phone Number": phone,
                "Netlify Project Link": link, 
                "Homework1 ( 2 ) Git Practice": HW1,
                 "Homework2( 2 ) Javascript" :HW2,
            }
            newData.push(item);
            setData(newData);
        }
        function deleteData(name){
            //e.preventDefault
            let newData = [...data];
            let filterData= newData.filter(i=>i.Name !== name)
            setData(filterData);
    
        }
       

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
            <input type='number' value={HW1} onChange={(e)=>handleHW1Input(e)}/>
            {link}
            <br/>
            <label>Homework 2</label>&nbsp;
            <input type='number' value={HW2} onChange={(e)=>handleHW2Input(e)}/>
            {link}
            <br/>
            <button onClick={(e)=>submitNewData(e)}>Submit</button>
            <br/>


        </div>
    );
}

export default CreateNewForm;