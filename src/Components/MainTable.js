import React,  { useState, Fragment } from 'react' ;
import ReactDOM from 'react-dom';
import './MainTable.css';
import '../App.css'
// import styled from 'styled-components'
import { useTable } from 'react-table'
import EditForm from './EditForm';

const MainTable =({data,setData,handleEdit}) => {

    function deleteData(name){
        //e.preventDefault
        let newData = [...data]
        let filterData= newData.filter(i=>i.Name !== name)
        setData(filterData);

    }

function EditedData(name){
    let newdata = [...data]
    let filterData = newdata.filter(i=>i.Name ===name)
    setData(filterData)
    }

const progressTable = data.map(i=>{
       const  {Name, 
        "Email Address": Email,
        "Phone Number": Phone,
        "Netlify Project Link":Link, 
        ...rest
    } = i
console.log(rest, 'rest');

    const  {
     "Homework1 ( 2 ) Git Practice": Homework1,
     "Homework2( 2 ) Javascript" :Homework2,
     "Homework 2.2 ( 4 points) class project":Homework3,
     "Homework 2.1 ( Local storage) 2 points":Homework4,
     "Homework 3.1 ( CSS Selectors Exercise ) 4 points":Homework5
 } =rest

    console.log(rest, 'rest 22222')
  
   
   


function getTotal(){
   return Object.values(rest).reduce((accu, next)=>Number(accu)+ Number(next));
    }
       // console.log(getTotal());
      
    return (
        <div>
            {/* Main table  */}
       <table>
            <tr>
            <td>{i.Name}</td>
            <td>{Email}</td>
            <td>{Phone}</td>
             <td><a href={Link}>   Link   </a></td>
             <td>{Homework1}</td>
             <td>{Homework2}</td>
             <td>{Homework3}</td>
             <td>{Homework4}</td>
             <td>{Homework5}</td>
             <td>{getTotal()}</td>
              <td> <button onClick={()=>deleteData(Name)}>Delete Submittion</button> </td>
              <td> <button onClick={()=>handleEdit(Name)}> Edit Submittion</button> </td>
        </tr>
        </table>
        </div>
        )
}) 
 return (
     <div>
          <table>
         <tr>
             <th>Name</th> 
             <th>Email</th> 
             <th>Phone Number</th> 
             <th>Link</th>
             <th>Homework 1</th>
             <th>Homework 2</th>
             <th>Homework 3</th>
             <th>Homework 4</th>
             <th>Homework 5</th>
             <th>Total</th>
             <th>Delete</th>
             <th>Edit</th>
         </tr>
         </table>
{progressTable}
     </div>
 )}

export default MainTable;
