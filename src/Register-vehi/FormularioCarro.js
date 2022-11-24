import { useForm } from "react-hook-form";
import React from 'react';
import {Grid} from "@material-ui/core"
import './FormPagesVeh.css';
function FormularioCarro ({formData,setFormData}){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Registro vehículo</h2>
           
         <Grid container  direction="row" alignItems="flex-start" justifyContent="center">
         

               
                <Grid item xs={6} sm={2}>
                 
              
                 <div>
                         <label>Placa</label>
                        <input type="text" 
                        value={formData.Placa} onChange={(event)=> setFormData({...formData, Placa:event.target.value})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Nacionalidad</label>
                        <input type="text" 
                        value={formData.Nacionalidad} onChange={(event)=> setFormData({...formData, Nacionalidad:event.target.value})}
                        />
                         {errors.Modelo?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >Kilometraje</label>
                        <input type="text" value={formData.Kilometraje} onChange={(event)=> setFormData({...formData, Kilometraje:event.target.value})}/>
                        {errors.Color?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Transmisión</label>
                        <input type="text" value={formData.Transmision} onChange={(event)=> setFormData({...formData, Transmision:event.target.value})}/>
                        {errors.Color?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Foto lateral der.</label>
                        <input type="file" value={formData.Fotolateralder} onChange={(event)=> setFormData({...formData, Fotolateralder:event.target.value})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                        
                    
          
                </Grid>
                
             
                <Grid item xs={6} sm={2}>
                   

                        <div>
                        <label >Clase</label>
                        <input type="text" value={formData.Clase} onChange={(event)=> setFormData({...formData, Clase:event.target.value})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Tipo de caja</label>
                        <input type="text" value={formData.Tipodecaja} onChange={(event)=> setFormData({...formData, Tipodecaja:event.target.value})}/>
                 {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Color</label>
                        <input type="text" value={formData.Color} onChange={(event)=> setFormData({...formData, Color:event.target.value})}/>
                 {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Versión</label>
                        <input type="text" value={formData.Version} onChange={(event)=> setFormData({...formData, Version:event.target.value})}/>
                 {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Foto trasera</label>
                        <input type="file" value={formData.fototrasera} onChange={(event)=> setFormData({...formData, fototrasera:event.target.value})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>

                        
                </Grid>
                <Grid item xs={6} sm={2}>
                        

                        <div>
                        <label >Marca</label>
                        <input type="text" value={formData.Marca} onChange={(event)=> setFormData({...formData, Marca:event.target.value})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Cilindraje</label>
                        <input type="text" value={formData.Cilintraje} onChange={(event)=> setFormData({...formData, Cilintraje:event.target.value})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >#chasis</label>
                        <input type="text" value={formData.Nrochasis} onChange={(event)=> setFormData({...formData, Nrochasis:event.target.value})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                        <div>
                        <label >SOAT</label>
                        <input type="file" value={formData.SOAT} onChange={(event)=> setFormData({...formData, SOAT:event.target.value})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                       
                </Grid>
                <Grid item xs={6} sm={2}>
                        

                        <div>
                        <label >Tipo</label>
                        <input type="text" value={formData.Tipo} onChange={(event)=> setFormData({...formData, Tipo:event.target.value})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Combustible</label>
                        <input type="text" value={formData.Combustible} onChange={(event)=> setFormData({...formData, Combustible:event.target.value})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >#Serial</label>
                        <input type="text" value={formData.Nroserial} onChange={(event)=> setFormData({...formData, Nroserial:event.target.value})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                        <div>
                        <label >Tarjeta propiedad</label>
                        <input type="file" value={formData.Tarjetadepropiedad} onChange={(event)=> setFormData({...formData, Tarjetadepropiedad:event.target.value})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                       
                </Grid>
                <Grid item xs={6} sm={2}>
                     

                        <div>
                        <label >Carrocería</label>
                        <input type="text" value={formData.Carroceria} onChange={(event)=> setFormData({...formData, Carroceria:event.target.value})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Tipo pintura</label>
                        <input type="text" value={formData.Tipodepintura} onChange={(event)=> setFormData({...formData, Tipodepintura:event.target.value})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >#Motor</label>
                        <input type="text" value={formData.Nromotor} onChange={(event)=> setFormData({...formData, Nromotor:event.target.value})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                        <div>
                        <label >Foto frente</label>
                        <input type="file" value={formData.Fotofrente} onChange={(event)=> setFormData({...formData, Fotofrente:event.target.value})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                   
                </Grid>
                <Grid item xs={6} sm={2}>
                        

                        <div>
                        <label >Modelo</label>
                        <input type="text" value={formData.Modelo} onChange={(event)=> setFormData({...formData, Modelo:event.target.value})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Servicio</label>
                        <input type="text" value={formData.Servicio} onChange={(event)=> setFormData({...formData, Servicio:event.target.value})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Tracción</label>
                        <input type="text" value={formData.Traccion} onChange={(event)=> setFormData({...formData, Traccion:event.target.value})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                        <div>
                        <label >Foto lateral izq.</label>
                        <input type="file" value={formData.fotolateralizq}
                         onChange={(event)=> setFormData({...formData, fotolateralizq:event.target.value})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                        
                </Grid>
                <Grid item xs={6} sm={4}>
                        
                <h4>Datos cliente</h4>
              
                 <div> 
                        
                         <label>Nombre</label>
                        <input type="text" value={formData.NombreCliente} onChange={(event)=> setFormData({...formData, NombreCliente:event.target.value})}/>
                        {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                       
                 
                 </Grid>
                <Grid item xs={6} sm={4}>
                 
                <div> 
                        <label>Correo</label>
                       <input type="text" value={formData.Correo} onChange={(event)=> setFormData({...formData, Correo:event.target.value})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
                    
                 </Grid>
                 
                       <Grid item xs={6} sm={4}>
                       <div> 
                        <label>Telefono</label>
                       <input type="text" value={formData.Telefono} onChange={(event)=> setFormData({...formData, Telefono:event.target.value})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
                       </Grid>
                        
                    
          
              
                <Grid item xs={12}>
                       

                        <div>
                        <label className="observaciones">Observaciones</label>
                        <input type="textArea" className="Observaciones" value={formData.Observaciones} onChange={(event)=> setFormData({...formData, Observaciones:event.target.value})}/>
                        </div>
                        
                </Grid>
              </Grid>
              
                </div>
        );
                 
                 
                
}

export default FormularioCarro;