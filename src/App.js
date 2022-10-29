import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import './App.css';
import Login from './Login/login'

function App() {
  return (  
    <div>
      <Router>
      

     
      <Routes>
      <Route  path="/" element={<Login/>}/>
  
      </Routes>
      </Router>
      </div>
  );
}


export default App;
