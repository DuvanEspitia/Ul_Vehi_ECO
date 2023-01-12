import React from "react";
import img from "../../src/Images/RUNT.jpg";

import './RevisionTecnica.css';

function myFunction() {
    window.open("https://www.runt.com.co/consultaCiudadana/#/consultaVehiculo");
  }
function Runt() {
    return (
      <div>
        <div className="centrar"><img src={img} className="imageru" alt="user"></img></div>
        <div className="centrar"><button className="button" onClick={myFunction}>Consulta RUNT</button></div>
      
      </div>
    )
  }
  export default Runt;