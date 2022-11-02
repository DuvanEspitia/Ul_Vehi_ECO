import { useForm } from "react-hook-form";
import React from 'react';
import {Grid} from "@material-ui/core"
import './FormPagesVeh.css';
function Vidrio(){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Vidrios</h2>
            
         <Grid container  spacing={10}  direction="row" alignItems="flex-start" justifyContent="center">
         

               
                <Grid item xs={6} sm={3}>
                 
              
                 <div>
                         <label>Luneta retrovisor izquierdo</label>
                        <input type="text" {...register("LunetaRetrovisorIzquierdo",{required:true,maxLength:25})}/>
                        {errors.LunetaRetrovisorIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label className="hola">Vidrio puerta delantera izq.
                        </label>
                        <input type="text" {...register("VidrioPuertaDelanteraIzquierda ",{required:true,maxLength:25})}/>
                         {errors.VidrioPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >Panorámico trasero</label>
                        <input type="text" {...register("PanoramicoTrasero",{required:true,maxLength:25})}/>
                        {errors.PanoramicoTrasero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                
              
                        
                    
          
                </Grid>
                
             
                <Grid item xs={6} sm={3}>
                   

                        <div>
                        <label className="hola">Vidrio puerta delantera der.</label>
                        <input type="text" {...register("VidrioPuertaDelanteraDerecha",{required:true,maxLength:6})}/>
                        {errors.VidrioPuertaDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >luneta costado izquierdo</label>
                        <input type="text" {...register("lunetaCostadoIzquierdo",{required:true,maxLength:18})}/>
                 {errors.lunetaCostadoIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label className="hola">vidrio puerta trasera der.</label>
                        <input type="text" {...register("vidrioPuertaTraseraDerecha",{required:true,maxLength:6})}/>
                 {errors.vidrioPuertaTraseraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>

                        
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                        <div>
                        <label >luneta retrovisor derecho</label>
                        <input type="text" {...register("lunetaRetrovisorDerecho",{required:true,maxLength:6})}/>
                        {errors.lunetaRetrovisorDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Retrovisor interior</label>
                        <input type="text" {...register("retrovisorInterior",{required:true,maxLength:18})}/>
                        {errors.retrovisorInterior?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >luneta costado derecho</label>
                        <input type="text" {...register("lunetaCostadoDerecho",{required:true,maxLength:6})}/>
                          {errors.lunetaCostadoDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
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
                        <br  /><br  />  <br  /><br  />  <br  /><br  />  <br  /><br  />  <br  /><br  /> 
                        </div>
                        
                </Grid>
                
                
                </Grid>
            
                </div>
        );
                 
                 
                
}

export default Vidrio;