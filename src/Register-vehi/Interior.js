import { useForm } from "react-hook-form";
import React from 'react';
import {Grid} from "@material-ui/core"
import './FormPagesVeh.css';
function Interior(){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Interior</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container  spacing={10}  direction="row" alignItems="flex-start" >
         

               
                <Grid item xs={6} sm={4}>
                 
              
                 <div> 
                        
                         <label>Cartera puerta delantera izqui.</label>
                        <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                        {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label className="hola">cartera puerta trasera der.
                        </label>
                        <input type="text" {...register("carteraPuertaTraseraDerecha ",{required:true,maxLength:25})}/>
                         {errors.carteraPuertaTraseraDerecha?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >Cojineria delantera izq.</label>
                        <input type="text" {...register("CojineriaDelanteraIzquierda",{required:true,maxLength:25})}/>
                        {errors.CojineriaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Cojineria trasera</label>
                        <input type="text" {...register("CojineriaTrasera",{required:true,maxLength:25})}/>
                        {errors.CojineriaTrasera?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Blindaje</label>
                        <input type="text" {...register("Blindaje",{required:true,maxLength:25})}/>
                        {errors.Blindaje?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
              
              
                        
                    
          
                </Grid>
                
             
                <Grid item xs={6} sm={4}>
                   

                        <div>
                 
                        <label className="hola">Cartera puerta trasera izqui.</label>
                        <input type="text" {...register("CarteraPuertaTraseraIzq",{required:true,maxLength:6})}/>
                        {errors.CarteraPuertaTraseraIzq?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >cartera puerta delantera der.</label>
                        <input type="text" {...register("carteraPuertaDelanteraDerecha",{required:true,maxLength:18})}/>
                 {errors.carteraPuertaDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label className="hola">tapicería piso</label>
                        <input type="text" {...register("tapiceriaPiso",{required:true,maxLength:6})}/>
                 {errors.tapiceriaPiso?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label className="hola">Testigos encendidos</label>
                        <input type="text" {...register("TestigosEncendidos ",{required:true,maxLength:6})}/>
                 {errors.TestigosEncendidos?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>

                        
                </Grid>
                <Grid item xs={6} sm={4}>
                        

                        <div>
                
                        <label >Tablero</label>
                        <input type="text" {...register("tablero",{required:true,maxLength:6})}/>
                        {errors.tablero?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Tapicería techo</label>
                        <input type="text" {...register("tapiceriaTecho",{required:true,maxLength:18})}/>
                        {errors.tapiceriaTecho?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >tablero instrumentos</label>
                        <input type="text" {...register("tableroInstrumentos",{required:true,maxLength:6})}/>
                          {errors.lunetaCostadoDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >cojineria delantera derecha</label>
                        <input type="text" {...register("cojineriaDelanteraDerecha",{required:true,maxLength:6})}/>
                          {errors.cojineriaDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        
                       
                </Grid>
          
                
                
                </Grid>
                </form>
                </div>
        );
                 
                 
                
}

export default Interior;