import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Global from "../Back-edn/Global";
import axios from "axios";
import { Box, Grid } from "@material-ui/core"
import Swal from 'sweetalert2';

import './RevisionTecnica.css';

function Vehiculoregistrado() {
        const DataBase =[{

                Placa: "xjs071",
                  Fecha: "2022-07-12",
                  Hora:"9:43:01",
                  Marca: "Audi",
                  Motor: "1200",
                 Serie : "12",
                  Chasis: "hgj2311",
                  Color: "negro",
                  Clase: "s",
                  Modelo: "2020",
                  nombreP: "Amparo",
                  ApellidoP: "Muñoz",
                  CelularP: "3152501032",
                  direccionP : "calle 34-23 ",
                  NroIDP: "29532929",
                  nombreC: "Camilo",
                  NroIDC: "1006330992",
                  CelularC: "3152501032",
                },
                {  
                Placa: "jkb02b",
                Fecha: "2022-12-01",
                Hora:"2:22:01",
                Marca: "Suzuki",
                Motor: "125",
               Serie : "1",
                Chasis: "gks2ffd",
                Color: "blanco",
                Clase: "Motorizada",
                Modelo: "2022",
                nombreP: "Duvan",
                ApellidoP: "Espitia",
                CelularP: "321324355",
                direccionP : "cra 1pra 34-23 ",
                NroIDP: "100332455",
                nombreC: "Sofia",
                NroIDC: "2945423",
                CelularC: "3152501032",
                        
                      
                  
                  }];
                  const [dropdown4, setDropdown4] = useState(false);
                  const abrirCerrarDropdown4 = () => { setDropdown4(!dropdown4); }

        const handleSubmit =async(e)=>{
                
                e.preventDefault();
               
                        var url = Global.url;
                let inputValue = document.getElementById("id").value;
                
                var requst = "/api/vehiculo/placa/"+inputValue;
                       axios.get(url + requst).then((res )=> {

                        if(!res.data[0]){
                                Swal.fire({
                                        title: 'UPSSS',
                                        text: 'No se logro encontrar la placa: '+inputValue,
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                      })

                                console.log("no")
                        }
                        let array = res.data;
                        let ultimo = array.pop();
                        document.getElementById("fecha").innerHTML=  (ultimo.createdDate).slice(0,10);
                        document.getElementById("Marca").innerHTML= ultimo.marca;
                        document.getElementById("Serie").innerHTML= ultimo.nroserial;
                        document.getElementById("Color").innerHTML= ultimo.color;
                        document.getElementById("Motor").innerHTML= ultimo.nromotor;
                        document.getElementById("Chasis").innerHTML= ultimo.nrochasis;
                        document.getElementById("Clase").innerHTML= ultimo.clase;
                        document.getElementById("Modelo").innerHTML= ultimo.modelo;
                        document.getElementById("NombreP").innerHTML= ultimo.id_cliente.nombrePropietario;
                        document.getElementById("CelularP").innerHTML= ultimo.id_cliente.celularPropietario;
                        document.getElementById("IdP").innerHTML= ultimo.id_cliente.identificacionPropietario;
                       
                        document.getElementById("DireccionP").innerHTML= ultimo.id_cliente.direccionP;
                        document.getElementById("nombreC").innerHTML= ultimo.id_cliente.nombreC;
                        document.getElementById("CelularC").innerHTML= ultimo.id_cliente.celularC;
                        document.getElementById("IdC").innerHTML= ultimo.id_cliente.direccionC;

                                        console.log(ultimo)
             
                                
                                console.log(res.data)
                                console.log(ultimo)
                                
                })
        
        }
        const onSubmit = (data) => {
                console.log(data);
        }
        return (
        <div>
               
        
        <div className="BodyRevisionTec">

                <h2>Vehículo registrado</h2>
                <form onSubmit={handleSubmit}>
                        <Grid container  direction="row" >


                                <Grid item xs={12} sm={4}>




                                        <div>

                                                <label>Placa</label>
                                                
                                                <div className="ko">
                                                <input type="text" id="id"  />
                                                
                                                
                                         <button type="submit" className="button" onClick={handleSubmit} >Buscar</button>
                                        </div>
                                        </div>



                                </Grid>
                                <Grid item xs={9} sm={8}>


                                        <div>

                                                <label>Fecha:</label>
                                                <h6 id='fecha'></h6>
                                        </div>




                                </Grid>
                             
                                <Grid item xs={6} sm={6}>
                                        <h4>Datos Vehiculo:</h4>

                                        <div>

                                                <label>Marca:</label>
                                                <h6 id='Marca'></h6>
                                        </div>

                                        <div>

                                                <label>Serial:</label>
                                                <h6 id='Serie'></h6>
                                        </div>
                                        <div>

                                                <label>Color:</label>
                                                <h6 id='Color'></h6>
                                        </div>




                                </Grid>
                                <Grid item xs={6} sm={6}>

                                        <div>
                                                <br/>
                                                <label>Motor:</label>
                                                <h6 id='Motor'></h6>
                                        </div>
                                        <div>

                                                <label>Chasis:</label>
                                               <h6 id='Chasis'></h6>
                                        </div>

                                        <div>

                                                <label>Clase:</label>
                                                <h6 id='Clase'></h6>
                                        </div>

                                        <div>

                                                <label>Modelo:</label>
                                                <h6 id='Modelo'></h6>
                                        </div>
                                </Grid>





                                <Grid item xs={6} sm={6}>
                                        <h4>Datos propietario</h4>

                                        <div>

                                                <label>Nombre:</label>
                                                <h6 id='NombreP'></h6>
                                        </div>

                                        <div>

                                                <label>Celular:</label>
                                                <h6 id='CelularP'></h6>
                                        </div>

                                       



                                </Grid>



                                <Grid item xs={6} sm={6}>


                                
                                                <br />
                                         
                                        <div>

                                                <label>Dirección:</label>
                                                <h6 id='DireccionP'></h6>
                                        </div>
                                        <div>
                                                
                                                <label>Identificación:</label>
                                                <h6 id='IdP'></h6>
                                        </div>
                                </Grid>
                               
                                <Grid item xs={6} sm={6}>
                                        <h4>Datos cliente</h4>

                                        <div>

                                                <label>Nombre:</label>
                                                <h6 id='nombreC'></h6>
                                        </div>




                                </Grid>



                                <Grid item xs={6} sm={6}>


                                        <div>
                                                <br />
                                                <label>Identificación:</label>
                                                <h6 id='IdC'></h6>
                                        </div>





                                </Grid>
                                <Grid item xs={6} sm={3}>


                                        <div>
                                            
                                                <label>Celular:</label>
                                                <h6 id='CelularC'></h6>
                                        </div>


                                </Grid>
                                <Grid item xs={6} sm={3}>


                                </Grid>

                        </Grid>
                     
                       
                    

                </form>

        </div>
        </div>
        );



}

export default Vehiculoregistrado;