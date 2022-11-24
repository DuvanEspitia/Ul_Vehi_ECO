import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import './App.css';

import Home from './Home/Home.js'
import Login from './Login/login'
import Registerclie from './Register-clie/Registerclie';
import Form from './Register-vehi/Form';
import FormularioCarro from './Register-vehi/FormularioCarro';
import LatoneriaVeh from './Register-vehi/LatoneriaVeh';
import Pintura from './Register-vehi/Pintura';
import Inferior from './Register-vehi/inferior';
import RevisionMotor from './RevisionMotor/RevisionMotor';
import RevisionTecnicaVehi from './RevisionTecnicov/RevisionTecnicaVehi';
import ClienteRegistrado from './Register-clie/ClienteRegistrado';
function App() {
  return (  
    <div>
      <Router>
      

     
      <Routes>
      <Route  path="/" element={<Login/>}/>
      <Route  path='/Home' element= {<Home/>}/>
      <Route  path='/Registro-cliente' element= {<Registerclie/>}/>
      <Route  path='/Form' element= {<Form/>}/>
      <Route  path='/FormularioCarro' element= {<FormularioCarro/>}/>
      <Route  path='/LatoneriaVeh' element= {<LatoneriaVeh/>}/>
      <Route  path='/Pintura' element= {<Pintura/>}/>
      <Route  path='/Inferior' element= {<Inferior/>}/>
      <Route  path='/Registerclie' element= {<Registerclie/>}/>
      <Route  path='/RevisionMotor' element= {<RevisionMotor/>}/>
      <Route  path='/RevisionTec' element= {<RevisionTecnicaVehi/>}/>
      <Route  path='/ClienteRegistrado' element= {<ClienteRegistrado/>}/>
      </Routes>
      </Router>
      </div>
  );
}


export default App;
