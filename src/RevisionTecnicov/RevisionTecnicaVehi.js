import { useForm } from "react-hook-form";
import React from 'react';
import { Box, Grid } from "@material-ui/core"

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
        
        const { register, formState: { errors }, handleSubmit } = useForm();
        const bcliente=()=>{
                let inputValue = document.getElementById("id").value;
                let carro = DataBase.find(elemeto => elemeto.Placa == inputValue);
                document.getElementById("fecha").innerHTML= carro.Fecha;
                document.getElementById("Hora").innerHTML= carro.Hora;
                document.getElementById("Marca").innerHTML= carro.Marca;
                document.getElementById("Serie").innerHTML= carro.Serie;
                document.getElementById("Color").innerHTML= carro.Color;
                document.getElementById("Motor").innerHTML= carro.Motor;
                document.getElementById("Chasis").innerHTML= carro.Chasis;
                document.getElementById("Clase").innerHTML= carro.Clase;
                document.getElementById("Modelo").innerHTML= carro.Modelo;
                document.getElementById("NombreP").innerHTML= carro.nombreP;
                document.getElementById("CelularP").innerHTML= carro.CelularP;
                document.getElementById("IdP").innerHTML= carro.NroIDP;
                document.getElementById("ApellidoP").innerHTML= carro.ApellidoP;
                document.getElementById("DireccionP").innerHTML= carro.direccionP;
                document.getElementById("nombreC").innerHTML= carro.nombreC;
                document.getElementById("CelularC").innerHTML= carro.CelularC;
                document.getElementById("IdC").innerHTML= carro.NroIDC;




                
               
               

        }
        const onSubmit = (data) => {
                console.log(data);
        }
        return (<div className="BodyRevisionTec">

                <h2>Técnico mecánica</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={4} direction="row" >


                                <Grid item xs={12} sm={4}>




                                        <div>

                                                <label>Placa</label>
                                                <input type="text" id="id" {...register("CarteraPuertaDelanteraIzquierda", { required: true, maxLength: 25 })} />
                                                {errors.CarteraPuertaDelanteraIzquierda?.type === "required" && <p>* Obligatorio</p>}
                                        </div>



                                </Grid>
                                <Grid item xs={6} sm={4}>


                                        <div>

                                                <label>Fecha</label>
                                                <h5 id='fecha'></h5>
                                        </div>




                                </Grid>
                                <Grid item xs={6} sm={4}>



                                        <div>

                                                <label>Hora</label>
                                                <h5 id='Hora'></h5>
                                        </div>



                                </Grid>
                                <Grid item xs={6} sm={6}>
                                        <h4>Datos Vehiculo</h4>

                                        <div>

                                                <label>Marca</label>
                                                <h5 id='Marca'></h5>
                                        </div>

                                        <div>

                                                <label>Serie</label>
                                                <h5 id='Serie'></h5>
                                        </div>
                                        <div>

                                                <label>Color</label>
                                                <h5 id='Color'></h5>
                                        </div>




                                </Grid>
                                <Grid item xs={6} sm={6}>

                                        <div>
                                                <br/>
                                                <label>Motor</label>
                                                <h5 id='Motor'></h5>
                                        </div>
                                        <div>

                                                <label>Chasis</label>
                                               <h5 id='Chasis'></h5>
                                        </div>

                                        <div>

                                                <label>Clase</label>
                                                <h5 id='Clase'></h5>
                                        </div>

                                        <div>

                                                <label>Modelo</label>
                                                <h5 id='Modelo'></h5>
                                        </div>
                                </Grid>





                                <Grid item xs={6} sm={6}>
                                        <h4>Datos propietario</h4>

                                        <div>

                                                <label>Nombre</label>
                                                <h5 id='NombreP'></h5>
                                        </div>

                                        <div>

                                                <label>Celular</label>
                                                <h5 id='CelularP'></h5>
                                        </div>

                                        <div>
                                                
                                                <label>Identificación</label>
                                                <h5 id='IdP'></h5>
                                        </div>



                                </Grid>



                                <Grid item xs={6} sm={6}>


                                        <div>
                                                <br />
                                                <label>Apellido</label>
                                                <h5 id='ApellidoP'></h5>
                                        </div>
                                        <div>

                                                <label>Dirección</label>
                                                <h5 id='DireccionP'></h5>
                                        </div>
                                        
                                </Grid>
                               
                                <Grid item xs={6} sm={6}>
                                        <h4>Datos cliente</h4>

                                        <div>

                                                <label>Nombre</label>
                                                <h5 id='nombreC'></h5>
                                        </div>




                                </Grid>



                                <Grid item xs={6} sm={6}>


                                        <div>
                                                <br />
                                                <label>Identificación</label>
                                                <h5 id='IdC'></h5>
                                        </div>





                                </Grid>
                                <Grid item xs={6} sm={3}>


                                        <div>
                                            
                                                <label>Celular</label>
                                                <h5 id='CelularC'></h5>
                                        </div>


                                </Grid>
                                <Grid item xs={6} sm={3}>


                                </Grid>

                        </Grid>
                        <Grid item xs={4}>




                        </Grid>
                       
                        <Grid item xs={12}>
               
               <button 
                    className="buttonl"
                    onClick={bcliente}
                    >Generar reporte
                    </button>
                   
                   
                    </Grid>

                </form>

        </div>
        );



}

export default Vehiculoregistrado;     