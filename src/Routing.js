import React, {Fragment, useEffect, useState} from 'react';
import App from './App';
import Scores from './Components'
import CreateNewForm from './Components/CreateNewForm/CreateNewForm'
//import InputForm from './Components/InputForm'
import {
    Switch,
    Route,
    Redirect,
    useHistory
} from "react-router-dom";

function Routing(){


    return (
    <Switch>
    <Route path="/form" component={CreateNewForm} />
    <Route path="/" component={Scores} />
    </Switch>
)
    }

export default Routing