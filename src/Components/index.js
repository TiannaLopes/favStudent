
import studentData from '../student_records.json'
import MainTable from './MainTable'
import React, { useEffect, useState } from "react";
import InputForm from './InputForm'
import EditForm from './EditForm'
import { createPortal } from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AppBar from './AppBar'
import Drawer from './Drawer'
import axios from 'axios'


const Scores = () => {

    //const [data, setData]= useState(studentData)
    const [data, setData]= useState([])
    const [selectedRow, setSelectedRow] = useState({}) 
    
    useEffect(()=> {
        axios.get('http://localhost:4000/')
        .then((d)=> setData(d.data))
        .catch(e=>console.log(e))
    },[])

    function handleEdit (name) {
        let cData = [...data]
        let filterData = cData.find(i=>i.Name === name)
        console.log(filterData,'filterData');
        setSelectedRow(filterData)
         }


    return (
        <Router>
        <div className="container">

        <Route path='/' />
        <Drawer>
        
        
        <MainTable 
        data={data} 
        setData={setData}
         handleEdit={handleEdit}/>  
    </Drawer>
    
       <InputForm
        setData={setData}
         data ={data}/>

        <EditForm 
         data ={data} 
         setData={setData} 
         selectedRow={selectedRow} 
         setSelectedRow={setSelectedRow}/>


    </div>

    </Router>
    )
};

export default Scores