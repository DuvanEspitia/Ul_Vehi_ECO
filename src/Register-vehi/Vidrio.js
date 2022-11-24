import { useForm } from "react-hook-form";
import React from 'react';
import {Grid} from "@material-ui/core"
import './FormPagesVeh.css';
function Vidrio({formData,setFormData}){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Vidrios</h2>
            
         <Grid container  spacing={10}  direction="row" alignItems="flex-start">
         

               
                <Grid item xs={6} sm={3}>
                 
              
                 <div>
                         <label>Luneta retrovisor izquierdo</label>
                        <input type="text"value={formData.Lunetaretrovisorizquierdo} onChange={(event)=> setFormData({...formData, Lunetaretrovisorizquierdo:event.target.value})}/>
                        {errors.LunetaRetrovisorIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label className="hola">Vidrio puerta delantera izq.
                        </label>
                        <input type="text" value={formData.Vidriopuertadelanteraizq} onChange={(event)=> setFormData({...formData, Vidriopuertadelanteraizq:event.target.value})}/>
                         {errors.VidrioPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >Panorámico trasero</label>
                        <input type="text" value={formData.Panoramicotrasero} onChange={(event)=> setFormData({...formData, Panoramicotrasero:event.target.value})}/>
                        {errors.PanoramicoTrasero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                
              
                        
                    
          
                </Grid>
                
             
                <Grid item xs={6} sm={3}>
                   

                        <div>
                        <label className="hola">Vidrio puerta delantera der.</label>
                        <input type="text" value={formData.Vidriopuertadelanterader} onChange={(event)=> setFormData({...formData, Vidriopuertadelanterader:event.target.value})}/>
                        {errors.VidrioPuertaDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >luneta costado izquierdo</label>
                        <input type="text" value={formData.Lunetacostadoizquierdo} onChange={(event)=> setFormData({...formData, Lunetacostadoizquierdo:event.target.value})}/>
                 {errors.lunetaCostadoIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label className="hola">vidrio puerta trasera der.</label>
                        <input type="text" value={formData.Vidriopuertatraserader} onChange={(event)=> setFormData({...formData, Vidriopuertatraserader:event.target.value})}/>
                 {errors.vidrioPuertaTraseraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>

                        
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                        <div>
                        <label >luneta retrovisor derecho</label>
                        <input type="text" value={formData.Lunetaretrovisorderecho} onChange={(event)=> setFormData({...formData, Lunetaretrovisorderecho:event.target.value})}/>
                        {errors.lunetaRetrovisorDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Retrovisor interior</label>
                        <input type="text" value={formData.Retrovisorinterior} onChange={(event)=> setFormData({...formData, Retrovisorinterior:event.target.value})}/>
                        {errors.retrovisorInterior?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >luneta costado derecho</label>
                        <input type="text" value={formData.Lunetacostadoderecho} onChange={(event)=> setFormData({...formData, Lunetacostadoderecho:event.target.value})}/>
                          {errors.lunetaCostadoDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                       
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                        <div>
                        <label >Panorámico delantero</label>
                        <input type="text" value={formData.Panorámicodelantero} onChange={(event)=> setFormData({...formData, Panorámicodelantero:event.target.value})}/>
                        {errors.PanoramicoDelantero?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>vidrio puerta trasera izq.</label>
                        <input type="text" value={formData.Vidriopuertatraseraizq} onChange={(event)=> setFormData({...formData, Vidriopuertatraseraizq:event.target.value})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        <br  /><br  />  <br  /><br  />  <br  /><br  />  <br  /><br  />  <br  /><br  /> 
                        </div>
                        
                </Grid>
                
                
                </Grid>
            
                </div>
        );
                 
                 
                
}

export default Vidrio;