import { useForm } from "react-hook-form";
import React from 'react';
import {Grid} from "@material-ui/core"
import './FormPagesVeh.css';
function Pintura({formData,setFormData}){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Registro vehículo</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container   alignItems="flex-start" >
         
         <Grid item xs={12} sm={12}>
                        <h5>Pintura</h5>
                        </Grid>
               
                <Grid item xs={6} sm={3}>
                 
              
                 <div>
                         <label>Pint extension capota izq.</label>
                        <input type="text" value={formData.Pintextensioncapotaizq} onChange={(event)=> setFormData({...formData, Pintextensioncapotaizq:event.target.value})}/>
                        {errors.PintExtensionCapotaIzq?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pint estribo dere.
                        </label>
                        <input type="text" value={formData.Pintestribodere} onChange={(event)=> setFormData({...formData, Pintestribodere:event.target.value})}/>
                         {errors.pintEstriboDerecho?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >Pint paral central izq.</label>
                        <input type="text" value={formData.Pintparalcentralizq} onChange={(event)=> setFormData({...formData, Pintparalcentralizq:event.target.value})}/>
                        {errors.pintParalCentralIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pint paragolpes delan.</label>
                        <input type="text" value={formData.Pintparagolpesdelan} onChange={(event)=> setFormData({...formData, Pintparagolpesdelan:event.target.value})}/>
                        {errors.ParagolpesDelantero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Pint puerta delantera der.</label>
                        <input type="text" value={formData.Pintpuertadelanterader} onChange={(event)=> setFormData({...formData, Pintpuertadelanterader:event.target.value})}/>
                        {errors.pintPuertaDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
              
                        <div>
                        <label>Pint guardagolpes trasero.</label>
                        <input type="text" value={formData.Pintguardagolpestrasero} onChange={(event)=> setFormData({...formData, Pintguardagolpestrasero:event.target.value})}/>
                        {errors.Chasis?.type=== "required"&&<p>*Obligatorio</p>}
                        
                        </div>
                    
          
                </Grid>
                
             
                <Grid item xs={6} sm={3}>
                   

                        <div>
                        <label >Pint extension capota der.</label>
                        <input type="text" value={formData.Pintextensioncapotader} onChange={(event)=> setFormData({...formData, Pintextensioncapotader:event.target.value})}/>
                        {errors.PintExtensionCapotaDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Pint cubierta parallama</label>
                        <input type="text" value={formData.Pintcubiertaparallama} onChange={(event)=> setFormData({...formData, Pintcubiertaparallama:event.target.value})}/>
                 {errors.pintCubiertaParallama?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Pint capo</label>
                        <input type="text" value={formData.Pintcapo} onChange={(event)=> setFormData({...formData, Pintcapo:event.target.value})}/>
                 {errors.PintCapo?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pint parallamas</label>
                        <input type="text" value={formData.Pintparallamas} onChange={(event)=> setFormData({...formData, Pintparallamas:event.target.value})}/>
                 {errors.PintParallama?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pint guardafango izquierdo</label>
                        <input type="text" value={formData.Pintguardafangoizquierdo} onChange={(event)=> setFormData({...formData, Pintguardafangoizquierdo:event.target.value})}/>
                 {errors.pintGuardafangoIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Pint capota</label>
                        <input type="text" value={formData.Pintcapota} onChange={(event)=> setFormData({...formData, Pintcapota:event.target.value})}/>
                        {errors.Chasis?.type=== "required"&&<p>*Obligatorio</p>}
                        
                        </div>

                        
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                        <div>
                        <label >Pint estribo izq.</label>
                        <input type="text" value={formData.Pintestriboizq} onChange={(event)=> setFormData({...formData, Pintestriboizq:event.target.value})}/>
                        {errors.pintEstriboIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>pint persiana</label>
                        <input type="text" value={formData.Pintpersiana} onChange={(event)=> setFormData({...formData, Pintpersiana:event.target.value})}/>
                        {errors.pintPersinana?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Pint para central der.</label>
                        <input type="text" value={formData.Pintparacentralder} onChange={(event)=> setFormData({...formData, Pintparacentralder:event.target.value})}/>
                          {errors.PuertaTraseraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pint puerta trasera derecha</label>
                        <input type="text" value={formData.Pintpuertatraseraderecha} onChange={(event)=> setFormData({...formData, Pintpuertatraseraderecha:event.target.value})}/>
                          {errors.PuertaTraseraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >pint puerta trasera izq.</label>
                        <input type="text" value={formData.Pintpuertatraseraizq} onChange={(event)=> setFormData({...formData, Pintpuertatraseraizq:event.target.value})}/>
                          {errors.pintPuertaTraseraIzq?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >pint puerta delantera izq.</label>
                        <input type="text" value={formData.Pintpuertadelanteraizq} onChange={(event)=> setFormData({...formData, Pintpuertadelanteraizq:event.target.value})}/>
                          {errors.PintPuertaTraseraIzq?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                       
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                        <div>
                        <label >Pint compuerta</label>
                        <input type="text" value={formData.Pintcompuerta} onChange={(event)=> setFormData({...formData, Pintcompuerta:event.target.value})}/>
                        {errors.pintCompuerta?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Pint paral panoramico der.</label>
                        <input type="text" value={formData.Pintparalpanoramicoder} onChange={(event)=> setFormData({...formData, Pintparalpanoramicoder:event.target.value})}/>
                        {errors.pintParalPanoramicoDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Pint costado izquierdo</label>
                        <input type="text" value={formData.Pintcostadoizquierdo} onChange={(event)=> setFormData({...formData, Pintcostadoizquierdo:event.target.value})}/>
                        {errors.pintCostadoIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>pint costado der.</label>
                        <input type="text" value={formData.Pintcostadoder} onChange={(event)=> setFormData({...formData, Pintcostadoder:event.target.value})}/>
                        {errors.pintCostadoDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Pint guardafango der.</label>
                        <input type="text" value={formData.Pintguardafangoder} onChange={(event)=> setFormData({...formData, Pintguardafangoder:event.target.value})}/>
                        {errors.Chasis?.type=== "required"&&<p>*Obligatorio</p>}
                        
                        </div>

                       
                </Grid>
                
                
                </Grid>
                </form>
                </div>
        );
                 
                 
                
}

export default Pintura;