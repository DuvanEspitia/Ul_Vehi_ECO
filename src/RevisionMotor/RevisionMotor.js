import { useForm } from "react-hook-form";
import React from 'react';
import {Box,Grid} from "@material-ui/core"

import './Revisionmotor.css';
function RevisionMotor(){
        alert("Ingrese la placa del vehiculo a revisar motor");
        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Revision motor</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
 <div className="espacioiz">
         <Grid container  spacing={10}  direction="colum" alignItems="flex-start" >
         
               
         <Grid item xs={6} sm={4}>
                 
              
                
                       
                 <div> 
                        
                        <label>Placa</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
                       <div> 
                        
                        <label>Marca</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
              
              
                        
                    
          
                </Grid>
                <Grid item xs={6} sm={4}>
                 
              
                 <div> 
                        
                         <label>Fecha</label>
                        <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                        {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                       
                 <div> 
                        
                        <label>Kilometraje</label>
                       <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                       {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                       </div>
                     
              
              
                        
                    
          
                </Grid>
                <Grid item xs={6} sm={4}>
                 
                 <div> 
                         
                         <label>El numero consecutivo es generado al momento de relizar el informe</label>
                        
                        </div>
              
                        <div> 
                         
                         <label>Hora</label>
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
                       
              
                        <div> 
                         
                         <label>Técnico asignado </label>
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
                <Grid item xs={6} sm={7}>
                 
              
                 <div> 
                        
                         <h4>Sugerencias de mantenimiento y o corrección</h4>
                      
                        </div>
                          
          
                </Grid>
                
                <Grid item xs={6} sm={4}>
                        

               
                        
                    
                </Grid> 
                <Grid item xs={7} sm={4}>
                        

                        <div> 
                        <label>Cilindro</label>
                               <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                               {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                               </div>
                               <div> 
                                <label>Valor</label>
                               <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                               {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                               </div>
                               
                                
                            
                        </Grid> 
                        <Grid item xs={6} sm={4}>
                        

                        <div> 
                      
                                <label>Fuga</label>
                               <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                               {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                               </div>
                                
                            
                        </Grid> 
                <Grid item xs={6} sm={3}>
                        
                <div className="BotonMotor">
                <button 
                    className="button"
                    
                    >Agregar
                    </button> 
                        </div>
                
                </Grid>
                            
                     
              
               
        <Grid item xs={12} sm={12}>
                <table >
        <tr>
          <th>Cilindro</th>
          <th>Valor</th>
          <th>Fuga</th>
        </tr>
        <tr>
          <td>1200</td>
          <td>20</td>
          <td>2</td>
        </tr>
        <tr>
          <td>1222</td>
          <td>2200</td>
          <td>2</td>
        </tr>
        <tr>
          <td>255</td>
          <td>20</td>
          <td>5</td>
        </tr>
      </table>


      </Grid>
                            
         </Grid>

         </div>
         </form>
         <div className="espacioiz">
         <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container  spacing={10}  direction="colum" alignItems="flex-start" >
         

               
                <Grid item xs={6} sm={3}>
                 
              
                 <div> 
                        
                         <label>Vacío interno IN, HG</label>
                        <input type="text" {...register("CarteraPuertaDelanteraIzquierda",{required:true,maxLength:25})}/>
                        {errors.CarteraPuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                       
                 <div> 
                        
                        <label>Perdidas de fluidos</label>
                        <select className="select" {...register("Ciudad")}>
                                <option value="tj">   </option>
                                <option value="tj">Empaque tapa válvulas</option>
                                <option value="cc">hidráulico dirección</option>
                                <option value="tjx">radiador y o mangueras</option>
                                <option value="cex">cartera motor y o caja</option>
                                <option value="nit">retenes distribución</option>
                                <option value="pap">retenes cigüeñal</option>
                                <option value="tjx">sello caja de cambios</option>
                                <option value="cex">transmisiones y o transfer</option>
                                <option value="nit">compresor aire acondicionado</option>
                                <option value="pap">compresor aire acondicionado</option>
                 </select>
                       </div>
              
              
                        
                    
          
                </Grid>
                
              
                <Grid item xs={6} sm={3}>
                   
               
            
                        <br/> <br/> <br/> <br/>
                        <label >Revisar</label>
                         <label>Si/No</label>
                        
                </Grid>
           
                <Grid item xs={6} sm={3}>
                        
                <div className="BotonMotor">
                <button 
                    className="button"
                    
                    >Agregar
                    </button>
                        </div>
                
                </Grid>
                            
                     
              
               
        <Grid item xs={12} sm={12}>
                <table >
        <tr>
          <th>Perdida de Fluido</th>
          <th>Revisar</th>
        </tr>
        <tr>
          <td>retenes cigüeñal</td>
          <td>si</td>
        </tr>
        <tr>
          
        
        </tr>

      </table>


      </Grid>
                            
         </Grid>


         </form>
         <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container  spacing={10}  direction="colum" alignItems="flex-start" >
         

               
               
                
              
                <Grid item xs={6} sm={3}>
                   
               
                <div> 
                        <div> 
                        
                        <label>Operacion</label>
                        <select className="select" {...register("Ciudad")}>
                                <option value="tj">   </option>
                                <option value="tj">bujías</option>
                                <option value="cc">bobinas de alta</option>
                                <option value="tjx">cables de alta</option>
                                <option value="cex">bobina principal</option>
                                <option value="nit">tapa distribución</option>
                                <option value="pap">batería</option>
                                <option value="tjx">alternador</option>
                                <option value="cex">arranque</option>
                                <option value="nit">sistema AA</option>
                                <option value="pap">embrague</option>
                                <option value="tj">soportes motor</option>
                                <option value="tj">mangueras vació</option>
                                <option value="cc">paso o mezcla</option>
                                <option value="tjx">inyectores</option>
                                <option value="cex">filtro aire motor</option>
                                <option value="nit">desgaste bloque</option>
                                <option value="pap">desgaste anillo</option>
                                <option value="tjx">desmontar culata</option>
                                <option value="cex">guías válvulas</option>
                                <option value="nit">impulsadores</option>
                                <option value="pap">obturadores</option>
                                <option value="nit">golpeteo valvular</option>
                                <option value="pap">válvulas</option>
                                <option value="tjx">correas externas</option>
                                <option value="cex">correa distribución</option>
                                <option value="nit">aceite motor</option>
                                <option value="pap">aceite caja</option>
                                <option value="tjx">aceite transmisión</option>
                                <option value="cex">g polvos ejes</option>
                                <option value="nit">sellos ejes</option>
                 </select>
                       </div>
                       </div>
                        
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                <div> 
               
                        <label>Revisar</label>
                        <label>Si/No</label>
                       </div>
                        
                    
                </Grid>
                <Grid item xs={6} sm={3}>
                   <label >Cambiar</label>
                    <label>Si/No</label>
                   
           </Grid>
                <Grid item xs={6} sm={3}>
                        
                <div className="BotonMotor2">
                <button 
                    className="button"
                    
                    >Agregar
                    </button> 
                        </div>
                
                </Grid>
                            
                     
              
               
        <Grid item xs={12} sm={12}>
                <table >
        <tr>
          <th>Operación</th>
          <th>Revisar</th>
          <th>Cambiar</th>
        </tr>
        <tr>
          <td>correas externas</td>
          <td>Cambiar</td>
          
          <td></td>
        </tr>
        <tr>
          <td>aceite motor</td>
          <td></td>
          <td>Revisar</td>
        </tr>
        <tr>
          
          
         
        </tr>
      </table>


      </Grid>
                            
         </Grid>
         <Grid item xs={12}>
                       

                       <div>
                       <label className="observaciones">Observaciones</label>
                       <input type="textarea" className="Observaciones" {...register("Observaciones")}/>
                       </div>
                       
               </Grid>
               <Grid item xs={12}>
               <button 
                    className="buttonl"
                    
                    >Guardar
                    </button>
                    <button 
                    className="button"
                    
                    >Actualizar
                    </button>
                  
                    </Grid>
         </form>
         </div>
</div>
        );
                 
                 
                
}

export default RevisionMotor;