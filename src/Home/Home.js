import './Home.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Grid} from "@material-ui/core"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';
import car from "../../src/Images/car.png";
import user from "../../src/Images/cliente.png";
import doc from "../../src/Images/documento.png";
import revi from "../../src/Images/revisar.png";

function Home(){
  const[dropdown,setDropdown]=useState(false);
  const[dropdown1,setDropdown1]=useState(false);
  const[dropdown2,setDropdown2]=useState(false);
  const[dropdown3,setDropdown3]=useState(false); 
  const[dropdown4,setDropdown4]=useState(false);  
  const abrirCerrarDropdown=()=>{setDropdown(!dropdown);}
  const abrirCerrarDropdown1=()=>{setDropdown1(!dropdown1);}
  const abrirCerrarDropdown2=()=>{ setDropdown2(!dropdown2);}
  const abrirCerrarDropdown3=()=>{ setDropdown3(!dropdown3);}
  const abrirCerrarDropdown4=()=>{ setDropdown4(!dropdown4);}
  return(
       
                <div>
                       
                          	
                <div className='main-container'>
                
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} >
                <div className="top">
                    <p className="titulo">Bienvenido, ¿Que deseas hacer?</p>
                    </div>
                    </Grid>
                    
                    
                    <Grid item xs={12} sm={6}>
                         <div className="Button-home">
                         <img src={user} className="img" alt="user"></img>
                                <Dropdown isOpen={dropdown1} toggle={abrirCerrarDropdown1} >
                                        <DropdownToggle caret className="Botoncae" >
                                        Cliente
                                        </DropdownToggle>
                                 <DropdownMenu>
                                        <DropdownItem tag={Link} to="/ClienteRegistrado" >Cliente registrado</DropdownItem>
                                        <DropdownItem tag={Link} to="/Registerclie">Cliente nuevo</DropdownItem>
                                  </DropdownMenu>
                                 </Dropdown>
                                </div>
                        </Grid>
                   
                        <Grid item xs={12} sm={6}>
                         <div className="Button-home">
                                <img src={car} className="imgc" alt="vehiculo"></img>
                        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                                        <DropdownToggle caret className="Botoncae">
                                        Vehículo
                                        </DropdownToggle>
                                <DropdownMenu>
                                        <DropdownItem tag={Link} to="/ConsultaVehiculo">Vehículo registrado</DropdownItem>
                                        <DropdownItem tag={Link} to="/Form"> Vehículo nuevo</DropdownItem>
                                </DropdownMenu>
                        </Dropdown>
                                </div>
                        </Grid>
                               
                        
                   
                   
                          <Grid item xs={12} sm={6}>
                         <div className="Button-home">
                         <img src={revi} className="img" alt="peritaje"></img>
                        <Dropdown isOpen={dropdown2} toggle={abrirCerrarDropdown2}>
                                <DropdownToggle caret className="Botoncae">
                                Revisiones
                                </DropdownToggle>
                                <DropdownMenu>
                                        <DropdownItem tag={Link} to="/Reporte">Técnica</DropdownItem>
                                        <DropdownItem tag={Link} to="/RevisionMotor">Motor</DropdownItem>
                                </DropdownMenu>
                        </Dropdown>
                                </div>  
                        </Grid>  
                    
                         <Grid item xs={12} sm={6}>
                         <div className="Button-home">
                         <img src={doc} className="img" alt="Reporte"></img>
                        <Dropdown isOpen={dropdown3} toggle={abrirCerrarDropdown3}>
                                <DropdownToggle caret className="Botoncae">
                                Reporte
                                </DropdownToggle>
                                <DropdownMenu>
                                        
                                        <DropdownItem tag={Link} to="/Revisiontec">Tecnico mecánica</DropdownItem>
                                        <DropdownItem tag={Link} to="/Reportemotor">Revisión motor</DropdownItem>
                                       
                                </DropdownMenu>
                        </Dropdown>
                                </div>
                                </Grid>
                                
                        
                    
                  
                    </Grid>
                </div>
                </div>
        );
    

}

export default Home;
