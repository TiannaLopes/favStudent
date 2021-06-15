import React from 'react';
import {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';

const EditForm = ({editData, setEditData, setData, data})=>{
    let history = useHistory();
    let editName = editData[0];
    let editEmail = editData[1];
    let editPhone = editData[2];
    let editLink = editData[3];
    let editHW1 = editData[4];
    let editHW2 = editData[5];


const [name, setName]= useState(editName)
const [email, setEmail]=useState(editEmail)
const [phone, setPhone]=useState(editPhone)
const [link, setLink]=useState(editLink)
const [HW1, setHW1]=useState(editHW1)
const [HW2, setHW2]=useState(editHW2)

const handleSubmit = (e)=>{
    e.preventDefault()
    let copy = [...data];
    let newStudent = {"Name":name, "Email Address": email, "Phone Number": phone, "Netlify Project Link":link,"Homework1 ( 2 ) Git Practice":HW1, "Homework2( 2 ) Javascript":HW2}
    let newCopy = copy.filter(item => item["Name"]!==editName)
    newCopy.push(newStudent)
    setData(newCopy)
    setData(copy)
    setName("")
    setEmail("")
    setPhone("")
    setLink("")
    setHW1("")
    setHW2("")
  // history.push("/")
}
return(
    <form id="editForm">
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}name="name" placeholder="Name"/>
        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}name="email" placeholder="Email"/>
        <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)}name="phone" placeholder="Phone"/>
        <input type="text" value={link} onChange={(e)=> setLink(e.target.value)}name="link" placeholder="Link"/>
        <input type="text" value={HW1} onChange={(e)=> setHW1(e.target.value)}name="hw1" placeholder="HW1"/>
        <input type="text" value={HW2} onChange={(e)=> setHW2(e.target.value)}name="hw2" placeholder="HW2"/>
    </form>
)

}