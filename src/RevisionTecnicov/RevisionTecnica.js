import { useForm } from "react-hook-form";
import React,{ useState } from 'react';
import { Box, Checkbox, Grid } from "@material-ui/core"
import Global from "../Back-edn/Global";
import axios from "axios";
import Swal from "sweetalert2";
import './RevisionTecnica.css';

function RevisionTecnica() {
        let idRevision;

        const [Fotoconsola,setFotoconsola]=useState('')
        const [Fotofrente,setFotofrente]=useState('')
        const [Fototrasera,setFototrasera]=useState('')
        const [Fotolateralizq,setFotolateralizq]=useState('')
        const [Fotolateralder,setFotolateralderecha]=useState('')
        const[dictamen,setDictamen]=useState('');
        const[observaciones,setObservaciones]=useState('');
        const[idconsultada,setIdconsultada]=useState('');

        const { register, formState: { errors }, handleSubmit } = useForm();


     
                
       
        var estado =false;
        const Buscar =async(e)=>{
                
                e.preventDefault();
               
                        var url = Global.url;
                let inputValue = document.getElementById("id").value;
                
                var requst = "/api/vehiculo/placa/"+inputValue;
                       axios.get(url + requst).then((res )=> {

                        if(!res.data[0]){
                                Swal.fire({
                                        title: 'UPSSS',
                                        text: 'No se logro econtrar la placa: '+inputValue,
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                      })

                                console.log("no")
                        }
                        let array = res.data;
                        let ultimo = array.pop();
                        let id_placa = ultimo.id;
                        setIdconsultada(id_placa)


                        let fc = ultimo.fotoconsola;
                        setFotoconsola(fc);
                        let ff = ultimo.fotofrente;
                        setFotofrente(ff);
                        let ft = ultimo.fototrasera;
                        setFototrasera(ft);
                        let fld = ultimo.fotolateralder;
                        setFotolateralderecha(fld);
                        let fli = ultimo.fotolateralizq;
                        setFotolateralizq(fli);






                        document.getElementById("fecha").innerHTML= (ultimo.createdDate).slice(0,10);
                        document.getElementById("Marca").innerHTML= ultimo.marca;
                        document.getElementById("Serie").innerHTML= ultimo.kilometraje;
                        document.getElementById("Color").innerHTML= ultimo.color;
                        document.getElementById("Motor").innerHTML= ultimo.nromotor;
                        document.getElementById("Chasis").innerHTML= ultimo.nrochasis;
                        document.getElementById("Clase").innerHTML= ultimo.clase;
                        document.getElementById("Modelo").innerHTML= ultimo.modelo;
                        document.getElementById("NombreP").innerHTML= ultimo.id_cliente.nombrePropietario;
                        document.getElementById("CelularP").innerHTML= ultimo.id_cliente.celularPropietario;
                        document.getElementById("IdP").innerHTML= ultimo.id_cliente.identificacionPropietario;
                        document.getElementById("ApellidoP").innerHTML= ultimo.id_cliente.apellidoP;
                       
                        document.getElementById("DireccionP").innerHTML= ultimo.id_cliente.direccionP;
                        document.getElementById("Le").innerHTML= ultimo.id_cliente.lugarexpedicion;
                        document.getElementById("Correo").innerHTML= ultimo.id_cliente.correoC;
                                        console.log(ultimo)
             
                                
                                console.log(res.data)
                                console.log(ultimo)
                                
                })
        
        }

        const AddRevision=async()=>{

                var url = Global.url;
                var request = "/api/revision/add"
                try{
                        const resp = await axios.post(url + request,{
                                
                                "id_vehiculo":{
                                        id:idconsultada,
                                },
                                
                                dictamen:dictamen,   
                                observaciones:observaciones
                        
                        });
                        idRevision= resp.id ;
                       
                              
                        estado =true;
                        
                        if(resp.data[0]){
                                Swal.fire({
                                        title: 'Registro no exitoso',
                                        text: 'no se logro generar el reporte',
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                      })
                                        

                        }
                        if(estado){
                                GenerarReporte();  
                        }
                     
                          
                }
                catch(error){
                      

                }

        }








        const GenerarReporte=async()=>{
                        console.log(idconsultada);
                        console.log(estado)

                        if(estado){

                                Swal.fire({
                                        title: '¡Genial!',
                                        text: 'Registro generado ',
                                        icon: 'success',
                                        confirmButtonText: 'OK'
                                      })
                                
                               setTimeout(window.open(Global.url+"/api/revision/export/"+idconsultada),2000)
                        }if(idconsultada=0){
                                Swal.fire({
                                        title: 'Registro no exitoso',
                                        text: '¡¡Consulta una placa primero!!',
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                      })
                        }

               
        

                

        }



        const onSubmit = (data) => {
                console.log(data);
        }
        return (<div className="BodyRevisionTec">

                <h2>Reporte Tecnico</h2>
               
                        <Grid container  >


                                <Grid item xs={9} sm={6}>




                                       

                                                <label>Placa</label> 
                                                <div className="ko">
                                                <input type="text" id="id" {...register("CarteraPuertaDelanteraIzquierda", { required: true, maxLength: 25 })} />
                                         <button type="submit" className="button" onClick={Buscar} >Buscar</button>
                                        </div>



                                </Grid>
                                <Grid item xs={3} sm={4}>


                                        <div>

                                                <label>Fecha:</label>
                                                <h6 id='fecha'></h6>
                                        </div>




                                </Grid>
                          
                                <Grid item xs={6} sm={6}>
                                        <h4>Datos Vehiculo</h4>

                                        <div>

                                                <label>Marca:</label>
                                                <h6 id='Marca'></h6>
                                        </div>

                                        <div>

                                                <label>kilometraje:</label>
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
                                        <h4>Datos cliente</h4>

                                        <div>

                                                <label>Nombre:</label>
                                                <h6 id='NombreP'></h6>
                                        </div>

                                        <div>

                                                <label>Celular:</label>
                                                <h6 id='CelularP'></h6>
                                        </div>

                                        <div>
                                                
                                                <label>Identificación:</label>
                                                <h6 id='IdP'></h6>
                                        </div>
                                        <div>
                                                
                                                <label>Lugar expedición:</label>
                                                <h6 id='Le'></h6>
                                        </div>



                                </Grid>



                                <Grid item xs={6} sm={6}>


                                        <div>
                                                <br />
                                                <label>Apellido:</label>
                                                <h6 id='ApellidoP'></h6>
                                        </div>
                                        <div>

                                                <label>Dirección:</label>
                                                <h6 id='DireccionP'></h6>
                                        </div>
                                        <div>

                                                <label>Correo:</label>
                                                <h6 id='Correo'></h6>
                                        </div>
                                        
                                </Grid>
                               
                              



                               

                        <Grid item xs={12}>
                                <div >
                                        
                                        <label>DICTAMEN: revisados los sistemas de identificación que posee el vehiculó actualmente se determinan</label>
                                        <textarea className="Observaciones" value={dictamen} onChange={(e)=>setDictamen(e.target.value) }></textarea>

                                </div>
                                <div >
                                        
                                        <label>OBSERVACIONES</label>
                                        <textarea className="Observaciones" value={observaciones} onChange={(e)=>setObservaciones(e.target.value) }></textarea>

                                </div>
                       



                        </Grid>
                        <Grid item xs={12}>
                        <h4     >Fotos del      vehiculo</h4>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                      
                                        
                                        
                                        <div className="pro">
                                        <label>Foto consola</label>  
                                        <div className="consola"> <img className="blob-to-image" src={"data:image/png;base64," + Fotoconsola}></img></div>
                                        <label> Foto frente </label> 
                                        <div className="cubo"><img className="blob-to-image" src={"data:image/png;base64," + Fotofrente}></img></div>
                                        
                                        </div>
  
                                
  
                                  

                        </Grid>
                        <Grid item xs={6} sm={6}>
                       
                                        
                                        
                                        <div className="pro">
                                        <label> Foto trasera</label>  
                                        <div className="cubo"><img className="blob-to-image" src={"data:image/png;base64," + Fototrasera}></img></div>
                                        <label> Foto delantera derecha</label> 
                                         <div className="cubo"><img className="blob-to-image" src={"data:image/png;base64," + Fotolateralder}></img></div>
                            
                                        </div>
  
                                
  

                        </Grid>
                                
                        <Grid item xs={12} sm={12}>
                        <div className="pro">
                                        <label> Foto lateral izquierda</label>  
                                        <div className="cubo"><img className="blob-to-image" src={"data:image/png;base64," + Fotolateralizq}></img></div>
  
                                        </div>
                        </Grid>


                        
                         
                    
                        <Grid item xs={12}>
                        <br/>
                        <div className="pro"><br></br>
              
                    <button 
                    className="button"
                    onClick={AddRevision}
                    >Generar reporte
                    </button>
                    
                    <br></br>
                    </div>
                    </Grid>

                    </Grid>
<br></br>
        </div>
        );



}

export default RevisionTecnica;    