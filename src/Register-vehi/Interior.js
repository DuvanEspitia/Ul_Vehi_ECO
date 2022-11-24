import { useForm } from "react-hook-form";
import React from 'react';
import {Grid} from "@material-ui/core"
import './FormPagesVeh.css';
function Interior({formData,setFormData}){

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
                        
                         <label>Cartera puerta delantera izq.</label>
                        <input type="text" value={formData.Carterapuertadelanteraizq} onChange={(event)=> setFormData({...formData, Carterapuertadelanteraizq:event.target.value})}/>
                        {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label className="hola">cartera puerta trasera der.
                        </label>
                        <input type="text" value={formData.Carterapuertatraserader} onChange={(event)=> setFormData({...formData, Carterapuertatraserader:event.target.value})}/>
                         {errors.carteraPuertaTraseraDerecha?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >Cojineria delantera izq.</label>
                        <input type="text" value={formData.Cojineriadelanteraizq} onChange={(event)=> setFormData({...formData, Cojineriadelanteraizq:event.target.value})}/>
                        {errors.CojineriaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Cojineria trasera</label>
                        <input type="text"value={formData.Cojineriatrasera} onChange={(event)=> setFormData({...formData, Cojineriatrasera:event.target.value})}/>
                        {errors.CojineriaTrasera?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Consola central</label>
                        <input type="text" value={formData.Consolacentral} onChange={(event)=> setFormData({...formData, Consolacentral:event.target.value})}/>
                        {errors.Blindaje?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
              
              
                        
                    
          
                </Grid>
                
             
                <Grid item xs={6} sm={4}>
                   

                        <div>
                 
                        <label className="hola">Cartera puerta trasera izq.</label>
                        <input type="text" value={formData.Carterapuertatraseraizq} onChange={(event)=> setFormData({...formData, Carterapuertatraseraizq:event.target.value})}/>
                        {errors.CarteraPuertaTraseraIzq?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >cartera puerta delantera der.</label>
                        <input type="text" value={formData.carterapuertadelanterader} onChange={(event)=> setFormData({...formData, carterapuertadelanterader:event.target.value})}/>
                 {errors.carteraPuertaDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label className="hola">tapicería piso</label>
                        <input type="text" value={formData.Tapiceríapiso} onChange={(event)=> setFormData({...formData, Tapiceríapiso:event.target.value})}/>
                 {errors.tapiceriaPiso?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label className="hola">Tapetes y/o alfombras</label>
                        <input type="text" value={formData.Tapetesalfombras} onChange={(event)=> setFormData({...formData, Tapetesalfombras:event.target.value})}/>
                 {errors.TestigosEncendidos?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>

                        
                </Grid>
                <Grid item xs={6} sm={4}>
                        

                        <div>
                
                        <label >Tablero</label>
                        <input type="text" value={formData.Tablero} onChange={(event)=> setFormData({...formData, Tablero:event.target.value})}/>
                        {errors.tablero?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Tapicería techo</label>
                        <input type="text" value={formData.Tapiceríatecho} onChange={(event)=> setFormData({...formData, Tapiceríatecho:event.target.value})}/>
                        {errors.tapiceriaTecho?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >tablero instrumentos</label>
                        <input type="text" value={formData.TableroInstrumentos} onChange={(event)=> setFormData({...formData, TableroInstrumentos:event.target.value})}/>
                          {errors.lunetaCostadoDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >cojineria delantera derecha</label>
                        <input type="text" value={formData.CojineriaDelanteraDerecha} onChange={(event)=> setFormData({...formData, CojineriaDelanteraDerecha:event.target.value})}/>
                          {errors.cojineriaDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        
                       
                </Grid>
          
                
                
                </Grid>
                </form>
                </div>
        );
                 
                 
                
}

export default Interior;