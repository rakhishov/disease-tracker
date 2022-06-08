import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Users } from './pages/users';
import { Diseases } from './pages/diseases';
import {Homepage} from './pages/homepage';
import { Records } from './pages/records';
import {Doctors} from './pages/doctors'

function App() {
  return(
  <>
  <Router>
    <Routes>
      <Route path ="/" element = { <Homepage />} />
      <Route path ="/users" element={<Users />} />
      <Route path ="/diseases" element ={<Diseases />} /> 
      <Route path = "/records" element ={<Records />} />
      <Route path = "/doctors" element ={<Doctors />} />
    </Routes>
  </Router>
  </>
  );
}



export default App;

