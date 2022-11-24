import { useForm } from "react-hook-form";
import React from 'react';
import {Grid} from "@material-ui/core"
import './FormPagesVeh.css';
function Fugas({formData,setFormData}){

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
                        <input type="text"value={formData.Enfreno} onChange={(event)=> setFormData({...formData, Enfreno:event.target.value})}/>
                        {errors.DireccionalDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>En caja
                        </label>
                        <input type="text" value={formData.Encaja} onChange={(event)=> setFormData({...formData, Encaja:event.target.value})}/>
                         {errors.EnCaja?.type=== "required"&&<p>* Obligatorio</p>}
                         </div>
                </Grid>
                
             
                <Grid item xs={6} sm={4}>
                   

                        <div>
                        <label >Sistema de dirección</label>
                        <input type="text" value={formData.Sistemadedirección} onChange={(event)=> setFormData({...formData, Sistemadedirección:event.target.value})}/>
                        {errors.SistemaDeDireccion?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >En motor</label>
                        <input type="text" value={formData.Enmotor} onChange={(event)=> setFormData({...formData, Enmotor:event.target.value})}/>
                 {errors.EnMotor?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>

                        
                </Grid>
                <Grid item xs={6} sm={4}>
                        

                        <div>
                        <label >En transmisión</label>
                        <input type="text" value={formData.Entransmisión} onChange={(event)=> setFormData({...formData, Entransmisión:event.target.value})}/>
                        {errors.StopIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>En combustible</label>
                        <input type="text" value={formData.Encombustible} onChange={(event)=> setFormData({...formData, Encombustible:event.target.value})}/>
                        {errors.direccionDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        <br  /> <br  /><br  />  <br  /><br  />  <br  /><br  />  <br  />
                        </div>
                       
                </Grid>
            
                
                
                </Grid>
              
                </div>
        );
                 
                 
                
}

export default Fugas;