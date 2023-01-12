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
                
                 <h2>Registro vehículo</h2>
        
         <Grid container   direction="row" >
         
         <Grid item xs={12} sm={12}>
                        <h5>Interior</h5>
                        </Grid>
               
                <Grid item xs={12} sm={4}>
                 
              
               
                        <div>
                        <label >Cojineria delantera izq.</label>
                        <input type="text" value={formData.cojineriadelanteraizq} onChange={(event)=> setFormData({...formData, cojineriadelanteraizq:event.target.value})}/>
                        
                        </div>
                        <div>
                        <label >Cojineria trasera</label>
                        <input type="text"value={formData.cojineriatrasera} onChange={(event)=> setFormData({...formData, cojineriatrasera:event.target.value})}/>
                        
                        </div>
                       
                        <div>
                        <label >Parasol izq.</label>
                        <input type="text" value={formData.parasolizquierdo} onChange={(event)=> setFormData({...formData, parasolizquierdo:event.target.value})}/>
                       
                        </div>
                        <div>
                        <label >Parasol der.</label>
                        <input type="text" value={formData.parasolderecho} onChange={(event)=> setFormData({...formData, parasolderecho:event.target.value})}/>
                       
                        </div>
              
                        <div>
                        <label >Mando puerta delantera der.</label>
                        <input type="text" value={formData.mandopuertadelanteradere} onChange={(event)=> setFormData({...formData, mandopuertadelanteradere:event.target.value})}/>
                          
                        </div>
                        <div>
                        <label >Mando puerta delantera izq.</label>
                        <input type="text" value={formData.mandopuertadelanteraizqui} onChange={(event)=> setFormData({...formData, mandopuertadelanteraizqui:event.target.value})}/>
                          
                        </div>
                        <div>
                        <label >Mando puerta trasera der.</label>
                        <input type="text" value={formData.mandopuertatraseradere} onChange={(event)=> setFormData({...formData, mandopuertatraseradere:event.target.value})}/>
                          
                        </div>
                        <div>
                        <label >Mando puerta trasera izq.</label>
                        <input type="text" value={formData.mandopuertatraseraizqui} onChange={(event)=> setFormData({...formData, mandopuertatraseraizqui:event.target.value})}/>
                          
                        </div>
                        
                    
          
                </Grid>
                
             
                <Grid item xs={12} sm={4}>
                <div>
                        <label >Consola central</label>
                        <input type="text" value={formData.consolacentral} onChange={(event)=> setFormData({...formData, consolacentral:event.target.value})}/>
                       
                        </div>
                <div> 
                        
                        <label>Cartera puerta delantera izq.</label>
                       <input type="text" value={formData.carterapuertadelanteraizq} onChange={(event)=> setFormData({...formData, carterapuertadelanteraizq:event.target.value})}/>
                       
                       </div>
                       <div>
                       <label >Cartera puerta trasera der.
                       </label>
                       <input type="text" value={formData.carterapuertatraserader} onChange={(event)=> setFormData({...formData, carterapuertatraserader:event.target.value})}/>
                        

                       </div>

                        <div>
                 
                        <label >Cartera puerta trasera izq.</label>
                        <input type="text" value={formData.carterapuertatraseraizq} onChange={(event)=> setFormData({...formData, carterapuertatraseraizq:event.target.value})}/>
                       
                        
                        </div>
                        <div>
                        <label >Cartera puerta delantera der.</label>
                        <input type="text" value={formData.carterapuertadelanterader} onChange={(event)=> setFormData({...formData, carterapuertadelanterader:event.target.value})}/>
               
                        
                        </div>
                        <div>
                        <label >Tapicería piso</label>
                        <input type="text" value={formData.tapiceriapiso} onChange={(event)=> setFormData({...formData, tapiceriapiso:event.target.value})}/>
         
                        </div>
                        <div>
                        <label >Tapetes y/o alfombras</label>
                        <input type="text" value={formData.tapetesalfombras} onChange={(event)=> setFormData({...formData, tapetesalfombras:event.target.value})}/>
                 
                        </div>
                        <div>
                        <label >Barra de cambios</label>
                        <input type="text" value={formData.barradecambios} onChange={(event)=> setFormData({...formData, barradecambios:event.target.value})}/>
                 
                        </div>
                       
                   
                        
                </Grid>
                <Grid item xs={12} sm={4}>
                        

                        <div>
                
                        <label >Tablero</label>
                        <input type="text" value={formData.tablero} onChange={(event)=> setFormData({...formData, tablero:event.target.value})}/>
                      
                        
                        </div>
                        <div>
                        <label>Tapicería techo</label>
                        <input type="text" value={formData.tapiceriatecho} onChange={(event)=> setFormData({...formData, tapiceriatecho:event.target.value})}/>
                        
                        
                        </div>
                        <div>
                        <label >Tablero instrumentos</label>
                        <input type="text" value={formData.tableroInstrumentos} onChange={(event)=> setFormData({...formData, tableroInstrumentos:event.target.value})}/>
                         
                        </div>
                        <div>
                        <label >Cojineria delantera derecha</label>
                        <input type="text" value={formData.cojineriaDelanteraDerecha} onChange={(event)=> setFormData({...formData, cojineriaDelanteraDerecha:event.target.value})}/>
                          
                        </div>
                        <div>
                        <label >Timón</label>
                        <input type="text" value={formData.timon} onChange={(event)=> setFormData({...formData, timon:event.target.value})}/>
                          
                        </div>
                        <div>
                        <label >Freno de mano</label>
                        <input type="text" value={formData.frenodemano} onChange={(event)=> setFormData({...formData, frenodemano:event.target.value})}/>
                 
                        </div>
                        <div>
                        <label >Guantera</label>
                        <input type="text" value={formData.guantera} onChange={(event)=> setFormData({...formData, guantera:event.target.value})}/>
                 
                        </div>
                        <div>
                        <label >ESTADO de interior en %</label>
                        <input type="number"  min="0" max="100" value={formData.porcentajeestadointerior} onChange={(event)=> setFormData({...formData, porcentajeestadointerior:event.target.value})}/>
                 
                        </div>

                       
                </Grid>
          
                
                
                </Grid>
           
                </div>
        );
                 
                 
                
}

export default Interior;