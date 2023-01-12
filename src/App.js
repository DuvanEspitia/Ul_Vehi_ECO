import React from 'react';
import {BrowserRouter as Router,Routes, Route,Outlet} from 'react-router-dom';

import './App.css';
import Sidebar from './Home/Sidebar';
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
import Vehiculoregistrado from './Register-vehi/Vehiculoregistrado';
import Reportemotor from './Reportemotor/Reportemotor';
import Registropersonas from './Register-vehi/Registropersonas';
import RevisionTecnica from './RevisionTecnicov/RevisionTecnica';
import Runt from './Register-vehi/Runt';
function App() {
   
  const SidebarLayout = () => (
    <>
      <Sidebar />
      <Outlet />
    </>
  );


  return (  
    <div>
      <Router>
      

      <Routes>
      <Route  path="/App" exact element={<Login/>}/>
      <Route element={<SidebarLayout/>}>
      <Route  path='/Home' element= {<Home/>}/>
      
      <Route  path='/Registro-cliente' element= {<Registerclie/>}/>
      <Route  path='/Form' element= {<Form/>}/>
      <Route  path='/FormularioCarro' element= {<FormularioCarro/>}/>
      <Route  path='/LatoneriaVeh' element= {<LatoneriaVeh/>}/>
      <Route  path='/Pintura' element= {<Pintura/>}/>
      <Route  path='/Inferior' element= {<Inferior/>}/>
      <Route  path='/Registerclie' element= {<Registerclie/>}/>
      <Route  path='/RevisionMotor' element= {<RevisionMotor/>}/>
      <Route  path='/Reportetec' element= {<RevisionTecnicaVehi/>}/>
      <Route  path='/ClienteRegistrado' element= {<ClienteRegistrado/>}/>
      <Route  path='/ConsultaVehiculo' element= {<Vehiculoregistrado/>}/>
      <Route  path='/Reportemotor' element= {<Reportemotor/>}/>
      <Route  path='/Registropersonas' element= {<Registropersonas/>}/>
      <Route  path='/Revisiontec' element= {<RevisionTecnica/>}/>
      <Route  path='/Reporte' element= {<Runt/>} />
      </Route>
      </Routes>
      </Router>
      </div>
  );
}


export default App;
