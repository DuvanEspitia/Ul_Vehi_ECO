import React, {Component}from 'react';
import './register.css';
import { useForm } from "react-hook-form";
import {Grid} from "@material-ui/core"
import axios from 'axios';
import Global from '../Back-edn/Global';
function ClienteRegistrado () {

              
               

                const  state = {
                        ClienteRegistrado:[],status:false
                }
                   const consultarCliente=()=>{
                        alert("Identificación no registrada");
                                var url = Global.url;
                                var requst = "/api/cliente/findAll";
                                axios.get(url+requst).then(res =>{
                                        this.state({
                                                ClienteRegistrado:res.data
                                                , status:true
                                        })
                                })
                        }
                       

         const {register,formState:{errors},handleSubmit}= useForm();

         const onSubmit = (data) =>{
                console.log(data);
                
        }
        
        return (
        
       
        
        <div>
                 <h2>Consultar Cliente</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction="row"  alignItems="center">
                <Grid item xs={12} sm={12}>
                <label className='Consulta' >Identificación a cosultar</label>
                 <input className='Consulta' type="text" />
                 <button className='b_consultar' onClick={consultarCliente} >Consultar</button>

                </Grid>
                         <Grid item xs={6} sm={6}>
                <div className="spacing">
                 <label >Tipo de indentificación</label>
                 <select {...register("TipoIdentificacion")} disabled>
                 <option value="TJ">Tarjeta de identidad</option>
                 <option value="CC">Cedula de ciudadanía</option>
                 <option value="TJX">Tarjeta de extranjeria</option>
                 <option value="CCE">Cedula de extranjeria</option>
                 <option value="NIT">NIT</option>
                 <option value="PASP">Pasaporte</option>
                 </select>

                
                 <label >Lugar de expedición </label>
                 <input type="text"{...register("Lugarexpedición")} disabled/> 
                 
              
                 <label >Nombre completo</label>
                 <input type="text" {...register("nombre",{required:true,maxLength:25})}disabled/>
              
                
                 <label >Correo</label>
                 <input type="text"{...register("Correo")}disabled/>
 
                </div>
               
                 </Grid>
                 <Grid item xs={6} sm={6}>
               

              

                <div className="spacing">
                <label>Numero de identificación</label>
                <input type="text" {...register("NroID",{required:true,maxLength:25})}disabled/>

                  
                      
                        <label >Dirección</label>
                        <input type="text" {...register("direccion",{required:true})}disabled/>
                  
                       
                        <label >Telefono</label>
                        <input type="text" {...register("telefono",{required:true})}disabled/>
          
                      
                        <label >Celular</label>
                        <input type="text" {...register("Celular",{required:true})}disabled/>
                    
                       
                        </div>
                          
                        </Grid>                                 
                                
                        
                       
                        </Grid> 
                        </form>
        </div>
                /* <Grid item xs={12} sm={12}>
                <div className="button-container">
                <input type="submit" id="regis-cli" value="Guardar"/>
                </div>
                </Grid>*/
        );
                 
   
}

export default ClienteRegistrado;