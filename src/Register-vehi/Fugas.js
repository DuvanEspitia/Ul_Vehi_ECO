import { useForm } from "react-hook-form";
import React from 'react';
import {Grid} from "@material-ui/core"
import './FormPagesVeh.css';
function Fugas(){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Fugas</h2>
        
         <Grid container direction="row" alignItems="flex-start" justifyContent="center" >
         

               
                <Grid item xs={6} sm={4}>
                 
              
                 <div>
                         <label>En freno</label>
                        <input type="text" {...register("EnFreno",{required:true,maxLength:25})}/>
                        {errors.DireccionalDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>En caja
                        </label>
                        <input type="text" {...register("EnCaja ",{required:true,maxLength:25})}/>
                         {errors.EnCaja?.type=== "required"&&<p>* Obligatorio</p>}
                         </div>
                </Grid>
                
             
                <Grid item xs={6} sm={4}>
                   

                        <div>
                        <label >Sistema de dirección</label>
                        <input type="text" {...register("SistemaDeDireccion",{required:true,maxLength:6})}/>
                        {errors.SistemaDeDireccion?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >En motor</label>
                        <input type="text" {...register("EnMotor",{required:true,maxLength:18})}/>
                 {errors.EnMotor?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>

                        
                </Grid>
                <Grid item xs={6} sm={4}>
                        

                        <div>
                        <label >En transmisión</label>
                        <input type="text" {...register("EnTransmision",{required:true,maxLength:6})}/>
                        {errors.StopIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>En combustible</label>
                        <input type="text" {...register("EnCombustible",{required:true,maxLength:18})}/>
                        {errors.direccionDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        <br  /> <br  /><br  />  <br  /><br  />  <br  /><br  />  <br  />
                        </div>
                       
                </Grid>
            
                
                
                </Grid>
              
                </div>
        );
                 
                 
                
}

export default Fugas;