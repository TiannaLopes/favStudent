import React, { Fragment, useEffect, useState } from 'react';
import Scores  from './Components' ;
import CreateNewForm  from './Components/CreateNewForm/CreateNewForm' ;
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AdminIcon from '@material-ui/icons/AccountBalance';
import HomeIcon from '@material-ui/icons/Home';

import {
    Switch,
    Route,
    Redirect,
    useHistory
  } from "react-router-dom";


  const defaultMenu = [
    {label:'Home',url:'/', icon: <HomeIcon/>, isExternal:false},
    {label:'Create New  Form',url:'/createnewform', icon: <AdminIcon/>, isExternal:false},
  ]


function Routing() {
    const history= useHistory()


  function handleClick(item) {
    if(item.isExternal) {
      window.location.href=item.url
      return 
    }
    return history.push(item.url)
    
      }
    return (
        <div>
            <Switch>
            <Route path="/createnewform" component={CreateNewForm} />                   
            <Route path="/" component={Scores} />  

  
           </Switch>
        </div>
    )
 

}

export default Routing
