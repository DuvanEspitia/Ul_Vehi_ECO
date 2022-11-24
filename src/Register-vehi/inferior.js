import { useForm } from "react-hook-form";
import React from 'react';
import {Grid} from "@material-ui/core"
import  "./FormPagesVeh.css";
function Inferior ({formData,setFormData}){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Inferior</h2>
        
         <Grid container direction="row" rows={10} alignItems="flex-start" justifyContent="space-between">
         

               
                <Grid item xs={6} sm={2}>
                 
              
                 <div>
                         <label>Alma bomper trasero</label>
                        <input type="text" className="Box-size" value={formData.Almabompertrasero} onChange={(event)=> setFormData({...formData, Almabompertrasero:event.target.value})}/>
                        {errors.almaParagolpesTrasero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Base tijera izquierda</label>
                        <input type="text" className="Box-size" value={formData.Basetijeraizquierda} onChange={(event)=> setFormData({...formData, Basetijeraizquierda:event.target.value})}/>
                         {errors.Modelo?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >Extensión puntas</label>
                        <input type="text" className="Box-size" value={formData.Extensiónpuntas} onChange={(event)=> setFormData({...formData, Extensiónpuntas:event.target.value})}/>
                        {errors.extensiónPuntaIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Barra estabilizadora</label>
                        <input type="text" className="Box-size" value={formData.Barraestabilizadora} onChange={(event)=> setFormData({...formData, Barraestabilizadora:event.target.value})}/>
                        {errors.barraEstabilizadora?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                      
                        
                        <div>
                        <label >Punta delantera izq.</label>
                        <input type="text" className="Box-size" value={formData.Puntadelanteraizq} onChange={(event)=> setFormData({...formData, Puntadelanteraizq:event.target.value})}/>
                        {errors.puntaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>

                </Grid>
                
             
                <Grid item xs={6} sm={2}>
                   

                        <div>
                        <label >Alma bomper delantero</label>
                        <input type="text" className="Box-size" value={formData.Almabomperdelantero} onChange={(event)=> setFormData({...formData, Almabomperdelantero:event.target.value})}/>
                        {errors.almaParagolpesDelantero?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Base tijeras</label>
                        <input type="text" className="Box-size" value={formData.Basetijeras} onChange={(event)=> setFormData({...formData, Basetijeras:event.target.value})}/>
                 {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Carter caja</label>
                        <input type="text" className="Box-size" value={formData.Cartercaja} onChange={(event)=> setFormData({...formData, Cartercaja:event.target.value})}/>
                 {errors.carter?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Carter motor</label>
                        <input type="text" className="Box-size" value={formData.Cartermotor} onChange={(event)=> setFormData({...formData, Cartermotor:event.target.value})}/>
                 {errors.exosto?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Exosto</label>
                        <input type="text" className="Box-size" value={formData.Exosto} onChange={(event)=> setFormData({...formData, Exosto:event.target.value})}/>
                 {errors.exosto?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                    

                        
                </Grid>
                <Grid item xs={6} sm={2}>
    
                       <div>
                        <label >Punta delantera derecha</label>
                        <input type="text" className="Box-size" value={formData.Puntadelanteraderecha} onChange={(event)=> setFormData({...formData, Puntadelanteraderecha:event.target.value})}/>
                          {errors.PuntoDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Punta trasera izq.</label>
                        <input type="text" className="Box-size" value={formData.Puntatraseraizq} onChange={(event)=> setFormData({...formData, Puntatraseraizq:event.target.value})}/>
                        {errors.puntaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        
                        <div>
                        <label >Punta trasera derecha</label>
                        <input type="text" className="Box-size" value={formData.Puntatraseraderecha} onChange={(event)=> setFormData({...formData, Puntatraseraderecha:event.target.value})}/>
                        {errors.puntaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Piso baul</label>
                        <input type="text" className="Box-size" value={formData.Pisobaul} onChange={(event)=> setFormData({...formData, Pisobaul:event.target.value})}/>
                        {errors.TanqueDeGasolina?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>                      <div>
                        <label>Tanque de combustible</label>
                        <input type="text" className="Box-size" value={formData.Tanquedecombustible} onChange={(event)=> setFormData({...formData, Tanquedecombustible:event.target.value})}/>
                        {errors.PestañaPuntaTrasdelDerec?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                </Grid>
                <Grid item xs={6} sm={2}>
                        

                        <div>
                        <label>Traviesa delantera</label>
                        <input type="text" className="Box-size" value={formData.Traviesadelantera} onChange={(event)=> setFormData({...formData, Traviesadelantera:event.target.value})}/>
                        {errors.TraviesaInferior?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Traviesa media</label>
                        <input type="text" className="Box-size" value={formData.Traviesamedia} onChange={(event)=> setFormData({...formData, Traviesamedia:event.target.value})}/>
                          {errors.PestañaPuntaTrasIzq?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Traviesa trasera</label>
                        <input type="text" className="Box-size" value={formData.Traviesatrasera} onChange={(event)=> setFormData({...formData, Traviesatrasera:event.target.value})}/>
                        {errors.Frontal?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Frontal superior</label>
                        <input type="text" className="Box-size" value={formData.Frontalsuperior} onChange={(event)=> setFormData({...formData, Frontalsuperior:event.target.value})}/>
                        {errors.PisoBaulInferior?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                   
                       
                </Grid>
                <Grid item xs={6} sm={2}>
                     

                        <div>
                        <label >Viga derecha</label>
                        <input type="text" className="Box-size" value={formData.Vigaderecha} onChange={(event)=> setFormData({...formData, Vigaderecha:event.target.value})}/>
                        {errors.TraviesaSuperior?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Viga izq.</label>
                        <input type="text" className="Box-size" value={formData.Vigaizq} onChange={(event)=> setFormData({...formData, Vigaizq:event.target.value})}/>
                        {errors.GpolvoEjeIzq?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Frontal inferior</label>
                        <input type="text" className="Box-size" value={formData.Frontalinferior} onChange={(event)=> setFormData({...formData, Frontalinferior:event.target.value})}/>
                          {errors.PisoCarroceria?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>

                
                        <div>
                        <label >Panel</label>
                        <input type="text" className="Box-size" value={formData.Panel} onChange={(event)=> setFormData({...formData, Panel:event.target.value})}/>
                          {errors.TroqueTrasero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                   
                </Grid>
              </Grid>
               
                </div>
        );
                 
                 
                
}

export default Inferior;