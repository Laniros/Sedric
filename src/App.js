import { Container } from '@material-ui/core';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import callDetailsPage from './calls/callsDetailsPage';
import Dashboard from './dashboard/dashboard';
import specCall from './calls/specCall';
import PrimarySearchAppBar from './menus/navbar'
import Sandbox from './sandbox/Sandbox';
import CallsList from './calls/callsList';


function App() {
  return (
<>
<PrimarySearchAppBar/>
<Container className="main">
<Route path="/"/>
<Route path="/dashboard" component={Dashboard}/>
<Route path="/calls" component={callDetailsPage}/>
<Route path="/sandbox" component={Sandbox}/>
<Route path="/call/:id" component={callDetailsPage}/>
</Container>

</>
  );
}

export default App;
