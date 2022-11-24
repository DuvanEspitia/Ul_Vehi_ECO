import { useForm } from "react-hook-form";
import React from 'react';
import {Box,Grid} from "@material-ui/core"

import './RevisionTecnica.css';
function RevisionTecnicaVehi(){
        alert("INGRESE LA PLACA PARA CONSULTAR INFO ASOCIADAD AL VEHICULO")
        const {register,formState:{errors},handleSubmit}= useForm();
        
        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div className="BodyRevisionTec">
                
                 <h2>Revisión tecnica vehículo</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container  spacing={10}  direction="colum" alignItems="flex-start" >
         

         <Grid item xs={6} sm={4}>
                 
              
                
                       
                 <div> 
                        <br/><br/>
                        <label>Placa</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
        
                    
          
                </Grid>
                <Grid item xs={6} sm={4}>
                 
              
                 <div> 
                 <br/><br/>
                         <label>Fecha</label>
                        <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                        {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                       
    
                    
          
                </Grid>
                <Grid item xs={6} sm={4}>
                 
                <label>El numero consecutivo es generado al momento de relizar el informe</label>
              
                        <div> 
                        
                         <label>Hora</label>
                        <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                        {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                         
                     
           
                 </Grid>
                 <Grid item xs={6} sm={4}>
                <h4>Datos Vehiculo</h4>
              
                 <div> 
                        
                         <label>Marca</label>
                        <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                        {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                       
                 <div> 
                        
                        <label>Serie</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
                       <div> 
                        
                        <label>Color</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
              
                        
                    
          
                </Grid>
                <Grid item xs={6} sm={4}>
              
                 <div> 
                        
                         <label>Motor</label>
                        <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                        {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                       
                 <div> 
                        
                        <label>Modelo</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
                </Grid>
                <Grid item xs={6} sm={4}>
              
              <div> 
                     
                      <label>Chasis</label>
                     <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                     {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                     </div>
                    
              <div> 
                     
                     <label>Clase</label>
                    <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                    {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                    </div>
             </Grid>
          
                        
                        
                     
                       
                <Grid item xs={6} sm={4}>
                <h4>Datos propietario</h4>
              
                 <div> 
                        
                         <label>Nombre</label>
                        <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                        {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                       
                 <div> 
                        
                        <label>Celular</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
              
              
                        
                    
          
                </Grid>
             
                
              
                <Grid item xs={6} sm={3}>
                   
               
                <div> 
                        <br/> 
                        <label>Apellido</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
                       <div> 
                        
                        <label>Dirección</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
                        
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                <div> 
                <br/>
                        <label>Identificación</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
                        
                    
                </Grid>
                <Grid item xs={6} sm={4}>
                <h4>Datos cliente</h4>
              
                 <div> 
                        
                         <label>Nombre</label>
                        <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                        {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
        
                        
                    
          
                </Grid>
             
                
              
                <Grid item xs={6} sm={3}>
                   
               
                <div> 
                        <br/> 
                        <label>Identificación</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
                     
                     
                        

                        
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                <div> 
                <br/>
                        <label>Celular</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
                        
                    
                </Grid> 
                <Grid item xs={6} sm={3}>
                        

      </Grid>
                            
         </Grid>
         <Grid item xs={4}>
                       

                      
                       
               </Grid>
               <Grid item xs={4}>
               </Grid>
               <Grid item xs={4}>
               </Grid>
               <Grid item xs={12}>
               
               <button 
                    className="buttonl"
                    
                    >Guardar
                    </button>
                    <button 
                    className="button"
                    disabled
                    >Actualizar
                    </button>
                    <button 
                    className="button"
                    disabled
                    >Generar reporte
                    </button>
                    </Grid>
         </form>

</div>
        );
                 
                 
                
}

export default RevisionTecnicaVehi;