import { useForm } from "react-hook-form";
import React from 'react';
import {Grid} from "@material-ui/core"
import './FormPagesVeh.css';
function Luces({formData,setFormData}){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Luces (no se revisa su funcionamiento)</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container  spacing={10}  direction="row" alignItems="flex-start" >
         

               
                <Grid item xs={6} sm={4}>
                 
              
                 <div>
                         <label>Cocuyo lateral izquierdo</label>
                        <input type="text"  value={formData.Cocuyolateralizquierdo} onChange={(event)=> setFormData({...formData, Cocuyolateralizquierdo:event.target.value})}/>
                        {errors.DireccionalDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Stop derecho
                        </label>
                        <input type="text"  value={formData.Stopderecho} onChange={(event)=> setFormData({...formData, Stopderecho:event.target.value})}/>
                         {errors.StopDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                         </div>
                         <div>
                        <label>Luz Tablero
                        </label>
                        <input type="text" value={formData.LuzTablero} onChange={(event)=> setFormData({...formData, LuzTablero:event.target.value})}/>
                         {errors.StopDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                         </div>
                         <div>
                        <label>Luz techo</label>
                        <input type="text"  value={formData.Luztecho} onChange={(event)=> setFormData({...formData, Luztecho:event.target.value})}/>
                        {errors.direccionDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                       
                </Grid>
                
             
                <Grid item xs={6} sm={4}>
                   

                        <div>
                        <label >Farola izquierda</label>
                        <input type="text"  value={formData.Farolaizquierda} onChange={(event)=> setFormData({...formData, Farolaizquierda:event.target.value})}/>
                        {errors.farolaIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Farola derecha</label>
                        <input type="text"  value={formData.Faroladerecha} onChange={(event)=> setFormData({...formData, Faroladerecha:event.target.value})}/>
                 {errors.lunetaCostadoIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Radio
                        </label>
                        <input type="text"  value={formData.Radio} onChange={(event)=> setFormData({...formData, Radio:event.target.value})}/>
                         {errors.StopDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                         </div>

                         <div>
                        <label>Otros</label>
                        <input type="text"  value={formData.Otros} onChange={(event)=> setFormData({...formData, Otros:event.target.value})}/>
                        {errors.direccionDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                </Grid>
                <Grid item xs={6} sm={4}>
                        

                        <div>
                        <label >Stop izquierdo</label>
                        <input type="text"  value={formData.Stopizquierdo} onChange={(event)=> setFormData({...formData, Stopizquierdo:event.target.value})}/>
                        {errors.StopIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Cocuyo lateral derecho</label>
                        <input type="text"  value={formData.Cocuyolateralderecho} onChange={(event)=> setFormData({...formData, Cocuyolateralderecho:event.target.value})}/>
                        {errors.direccionDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Exploradora izq.
                        </label>
                        <input type="text"  value={formData.Exploradoraizq} onChange={(event)=> setFormData({...formData, Exploradoraizq:event.target.value})}/>
                         {errors.StopDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                         </div>
                       
                         <div>
                        <label>Exploradora derecha
                        </label>
                        <input type="text"  value={formData.Exploradoraderecha} onChange={(event)=> setFormData({...formData, Exploradoraderecha:event.target.value})}/>
                         {errors.StopDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                         <br  /> <br  /><br  />  <br  /><br  />  <br  /><br  /> 
                         </div>
                </Grid>
                
                
                </Grid>
                </form>
                </div>
        );
                 
                 
                
}

export default Luces;