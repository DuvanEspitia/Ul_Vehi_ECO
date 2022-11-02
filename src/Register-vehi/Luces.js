import { useForm } from "react-hook-form";
import React from 'react';
import {Grid} from "@material-ui/core"
import './FormPagesVeh.css';
function Luces(){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Luces (no se revisa su funcionamiento)</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container  spacing={10}  direction="row" alignItems="flex-start" >
         

               
                <Grid item xs={6} sm={3}>
                 
              
                 <div>
                         <label>Direccional delantera izq.</label>
                        <input type="text" {...register("DireccionalDelanteraIzquierda",{required:true,maxLength:25})}/>
                        {errors.DireccionalDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Stop derecho
                        </label>
                        <input type="text" {...register("StopDerecho ",{required:true,maxLength:25})}/>
                         {errors.StopDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                         </div>
                </Grid>
                
             
                <Grid item xs={6} sm={3}>
                   

                        <div>
                        <label >Farola izquierda</label>
                        <input type="text" {...register("farolaIzquierda",{required:true,maxLength:6})}/>
                        {errors.farolaIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Farola derecha</label>
                        <input type="text" {...register("FarolaDerecha",{required:true,maxLength:18})}/>
                 {errors.lunetaCostadoIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>

                        
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                        <div>
                        <label >Stop izquierdo</label>
                        <input type="text" {...register("StopIzquierdo",{required:true,maxLength:6})}/>
                        {errors.StopIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>dirección delantera der.</label>
                        <input type="text" {...register("direccionDelanteraDerecha",{required:true,maxLength:18})}/>
                        {errors.direccionDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                       
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                        <div>
                        <label >Panorámico delantero</label>
                        <input type="text" {...register("PanoramicoDelantero",{required:true,maxLength:6})}/>
                        {errors.PanoramicoDelantero?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>vidrio puerta trasera izq.</label>
                        <input type="text" {...register("vidrioPuertaTraseraIzq.",{required:true,maxLength:18})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        <br  /> <br  /><br  />  <br  /><br  />  <br  /><br  />  <br  /><br  /> 
                        </div>
                        
                </Grid>
                
                
                </Grid>
                </form>
                </div>
        );
                 
                 
                
}

export default Luces;