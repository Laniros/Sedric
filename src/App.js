import { Container } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import callDetailsPage from './calls/callsDetailsPage';
import Dashboard from './dashboard/dashboard';
import PrimarySearchAppBar from './menus/navbar'
import Sandbox from './sandbox/Sandbox';
import getOneCall from "./calls/getOneCall";
import {auth} from "./config/firebase";
import Login from "./auth/Login";
import RegisterForm from "./auth/RegisterPage";
import Homepage from "./Home/HomePage";

function App() {

  const [currentUser,setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged( userAuth => {
      setCurrentUser(userAuth);
    })
  },[]);

  return (
<>
<PrimarySearchAppBar/>
<Container className="main">
<Route path="/" component={Homepage}/>
<Route path="/dashboard" component={Dashboard}/>
<Route path="/calls/:id" component={getOneCall}/>
<Route path="/calls" component={callDetailsPage}/>
<Route path="/sandbox" component={Sandbox}/>
<Route path='/login' component={Login}/>
<Route path='/register' component={RegisterForm}/>

</Container>

</>
  );
}

export default App;
