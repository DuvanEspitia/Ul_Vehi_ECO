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
                
                 <h2>Registro vehículo</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container  direction="row"  >
         

         <Grid item xs={12} sm={12}>
                        <h5>Luces</h5>
                        </Grid>
                <Grid item xs={12} sm={4}>
                 
              
                 <div>
                         <label>Cocuyo lateral izquierdo</label>
                        <input type="text"  value={formData.cocuyolateralizquierdo} onChange={(event)=> setFormData({...formData, cocuyolateralizquierdo:event.target.value})}/>
                       
                        </div>
                        <div>
                        <label>Stop derecho
                        </label>
                        <input type="text"  value={formData.stopderecho} onChange={(event)=> setFormData({...formData, stopderecho:event.target.value})}/>
                    
                         </div>
                         <div>
                        <label>Luz Tablero
                        </label>
                        <input type="text" value={formData.luzTablero} onChange={(event)=> setFormData({...formData, luzTablero:event.target.value})}/>
                       
                         </div>
                         <div>
                        <label>Luz techo</label>
                        <input type="text"  value={formData.luztecho} onChange={(event)=> setFormData({...formData, luztecho:event.target.value})}/>
                        
                        
                        </div>
                        <div>
                        <label>Luz placa</label>
                        <input type="text"  value={formData.luzplaca} onChange={(event)=> setFormData({...formData, luzplaca:event.target.value})}/>
                        
                        
                        </div>
                        <div>
                        <label>Luz direccional delantero der.</label>
                        <input type="text"  value={formData.luzdireccionaldelanteroder} onChange={(event)=> setFormData({...formData, luzdireccionaldelanteroder:event.target.value})}/>
                        
                        
                        </div>
                        <div>
                        <label>Luz direccional delantero izq.</label>
                        <input type="text"  value={formData.luzdireccionaldelanteroizq} onChange={(event)=> setFormData({...formData, luzdireccionaldelanteroizq:event.target.value})}/>
                        
                        
                        </div>
                       
                </Grid>
                
             
                <Grid item xs={12} sm={4}>
                   

                        <div>
                        <label >Farola izquierda</label>
                        <input type="text"  value={formData.farolaizquierda} onChange={(event)=> setFormData({...formData, farolaizquierda:event.target.value})}/>
                        
                        
                        </div>
                        <div>
                        <label >Farola derecha</label>
                        <input type="text"  value={formData.faroladerecha} onChange={(event)=> setFormData({...formData, faroladerecha:event.target.value})}/>
                
                        
                        </div>
                        <div>
                        <label>Radio
                        </label>
                        <input type="text"  value={formData.radio} onChange={(event)=> setFormData({...formData, radio:event.target.value})}/>
                         
                         </div>
                         <div>
                        <label>Luz direccional trasero der.</label>
                        <input type="text"  value={formData.luzdireccionaltraseroder} onChange={(event)=> setFormData({...formData, luzdireccionaltraseroder:event.target.value})}/>
                        
                        
                        </div>
                        <div>
                        <label>Luz direccional trasero izq.</label>
                        <input type="text"  value={formData.luzdireccionaltraseroizq} onChange={(event)=> setFormData({...formData,luzdireccionaltraseroizq:event.target.value})}/>
                        
                        
                        </div>
                        <div>
                        <label>Pito</label>
                        <input type="text"  value={formData.pito} onChange={(event)=> setFormData({...formData, pito:event.target.value})}/>
                        
                        
                        </div>
                         <div>
                        <label>Otros</label>
                        <input type="text"  value={formData.otros} onChange={(event)=> setFormData({...formData, otros:event.target.value})}/>
                        
                        
                        </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                        

                        <div>
                        <label >Stop izquierdo</label>
                        <input type="text"  value={formData.stopizquierdo} onChange={(event)=> setFormData({...formData, stopizquierdo:event.target.value})}/>
                       
                        
                        </div>
                        <div>
                        <label>Cocuyo lateral derecho</label>
                        <input type="text"  value={formData.cocuyolateralderecho} onChange={(event)=> setFormData({...formData, cocuyolateralderecho:event.target.value})}/>
                        
                        
                        </div>
                        <div>
                        <label>Exploradora izq.
                        </label>
                        <input type="text"  value={formData.exploradoraizq} onChange={(event)=> setFormData({...formData, exploradoraizq:event.target.value})}/>
                
                         </div>
                       
                         <div>
                        <label>Exploradora derecha</label>
                        <input type="text"  value={formData.exploradoraderecha} onChange={(event)=> setFormData({...formData, exploradoraderecha:event.target.value})}/>
                
                       
                         </div>
                         <div>
                        <label>Luz reversa derecha</label>
                        <input type="text"  value={formData.luzreversaderecha} onChange={(event)=> setFormData({...formData, luzreversaderecha:event.target.value})}/>
                
                       
                         </div>
                         <div>
                        <label>Luz reversa izquierda</label>
                        <input type="text"  value={formData.luzreversaizquierda} onChange={(event)=> setFormData({...formData, luzreversaizquierda:event.target.value})}/>
                
                       
                         </div>
                         <div>
                        <label>ESTADO de luces en %</label>
                        <input type="number"   min="0" max="100" value={formData.porcentajeestadoluces} onChange={(event)=> setFormData({...formData, porcentajeestadoluces:event.target.value})}/>
                
                       
                         </div>

                </Grid>
                
                
                </Grid>
                </form>
                </div>
        );
                 
                 
                
}

export default Luces;