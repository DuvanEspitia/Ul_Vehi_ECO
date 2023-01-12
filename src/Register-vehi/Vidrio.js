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
                
                 <h2>Registro vehículo</h2>
            
         <Grid container   direction="row" alignItems="flex-start">
         
                         <Grid item xs={12} sm={12}>
                        <h5>Vidrio</h5>
                        </Grid>
               
                <Grid item xs={12} sm={4}>
                 
              
                
                       
                        <div>
                        <label >Vidrio delantero derecho</label>
                        <input type="text" value={formData.vidriodelanteroderecho} onChange={(event)=> setFormData({...formData, vidriodelanteroderecho:event.target.value})}/>
                        {errors.PanoramicoTrasero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                
              
                        <div>
                        <label >Vidrio delantero izq.</label>
                        <input type="text" value={formData.vidriodelanteroizquierdo} onChange={(event)=> setFormData({...formData, vidriodelanteroizquierdo:event.target.value})}/>
                        {errors.PanoramicoTrasero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Vidrio trasero izq.</label>
                        <input type="text" value={formData.vidriotraseroizquierdo} onChange={(event)=> setFormData({...formData, vidriotraseroizquierdo:event.target.value})}/>
                        {errors.VidrioPuertaDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div> <div>
                        <label >Vidrio trasero der.</label>
                        <input type="text" value={formData.vidriotraseroderecho} onChange={(event)=> setFormData({...formData, vidriotraseroderecho:event.target.value})}/>
                        {errors.VidrioPuertaDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
          
                </Grid>
                
             
                <Grid item xs={12} sm={4}>
                
                
                        <div>
                         <label>Sunroof</label>
                        <input type="text"value={formData.sunroof} onChange={(event)=> setFormData({...formData, sunroof:event.target.value})}/>
                        {errors.LunetaRetrovisorIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        
                        <div>
                        <label >Panorámico trasero</label>
                        <input type="text" value={formData.panoramicotrasero} onChange={(event)=> setFormData({...formData, panoramicotrasero:event.target.value})}/>
                        {errors.PanoramicoTrasero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>

                        <div>
                        <label>Retrovisor interior</label>
                        <input type="text" value={formData.retrovisorinterior} onChange={(event)=> setFormData({...formData, retrovisorinterior:event.target.value})}/>
                        {errors.retrovisorInterior?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                        

                        <div>
                        <label >Luneta retrovisor derecho</label>
                        <input type="text" value={formData.lunetaretrovisorderecho} onChange={(event)=> setFormData({...formData, lunetaretrovisorderecho:event.target.value})}/>
                        {errors.lunetaRetrovisorDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Luneta retrovisor izquierdo</label>
                        <input type="text" value={formData.lunetaretrovisorizquierdo} onChange={(event)=> setFormData({...formData, lunetaretrovisorizquierdo:event.target.value})}/>
                 {errors.lunetaCostadoIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        
                        
                       
                </Grid>
                <Grid item xs={12} sm={4}>
                        

                        <div>
                        <label >Panorámico delantero</label>
                        <input type="text" value={formData.panoramicodelantero} onChange={(event)=> setFormData({...formData, panoramicodelantero:event.target.value})}/>
                        {errors.PanoramicoDelantero?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                     
                        <div>
                        <label>ESTADO de los vidrios en %</label>
                        <input type="number"  min="0" max="100" value={formData.porcentajevidrios} onChange={(event)=> setFormData({...formData,porcentajevidrios:event.target.value})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                       
                        </div>
                        
                </Grid>
                
                
                </Grid>
            
                </div>
        );
                 
                 
                
}

export default Vidrio;