import { useForm } from "react-hook-form";
import React from 'react';
import { Grid } from "@material-ui/core"
import './FormPagesVeh.css';
function Llantas({formData,setFormData}) {

        const { register, formState: { errors }, handleSubmit } = useForm();

        const onSubmit = (data) => {
                console.log(data);
        }
        return (<div>


                <h2>Registro vehículo</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                        <Grid container direction="row" stifyContent="space-evenly"  >

                        <Grid item xs={12} sm={12}>
                        <h5>Suspensión y llantas</h5>
                        </Grid>
                                <Grid item xs={12} sm={6}>

                                       
                                        <div className="llanta">
                                                <label>Llanta delantera derecha</label>
                                                <select value={formData.llantadelanteraderecha} onChange={(event)=> setFormData({...formData, llantadelanteraderecha:event.target.value})}>
                                                        <option value="null">Selec</option>
                                                        <option value="0%">0%</option>
                                                        <option value="10%">10%</option>
                                                        <option value="20%">20%</option>
                                                        <option value="30%">30%</option>
                                                        <option value="40%">40%</option>
                                                        <option value="50%">50%</option>
                                                        <option value="60%">60%</option>
                                                        <option value="70%">70%</option>
                                                        <option value="80%">80%</option>
                                                        <option value="90%">90%</option>
                                                        <option value="100%">100%</option>


                                                </select>
                                        </div>
                                        <div className="llanta">
                                            
                                                <label>Llanta delantera izquierda</label>
                                                <select value={formData.llantadelanteraizquierda} onChange={(event)=> setFormData({...formData, llantadelanteraizquierda:event.target.value})}>
                                                <option value="null">Selec.</option>
                                                        <option value="0%">0%</option>
                                                        <option value="10%">10%</option>
                                                        <option value="20%">20%</option>
                                                        <option value="30%">30%</option>
                                                        <option value="40%">40%</option>
                                                        <option value="50%">50%</option>
                                                        <option value="60%">60%</option>
                                                        <option value="70%">70%</option>
                                                        <option value="80%">80%</option>
                                                        <option value="90%">90%</option>
                                                        <option value="100%">100%</option>

                                                </select>

                                        </div>
                                        </Grid>
                                        



                                <Grid item xs={12} sm={6}>

            
                                        <div className="llanta">
                                                <label>Llanta trasera derecha</label>
                                                <select value={formData.llantatraseraderecha} onChange={(event)=> setFormData({...formData, llantatraseraderecha:event.target.value})}>
                                                        <option value="null">Selec.</option>
                                                        <option value="0%">0%</option>
                                                        <option value="10%">10%</option>
                                                        <option value="20%">20%</option>
                                                        <option value="30%">30%</option>
                                                        <option value="40%">40%</option>
                                                        <option value="50%">50%</option>
                                                        <option value="60%">60%</option>
                                                        <option value="70%">70%</option>
                                                        <option value="80%">80%</option>
                                                        <option value="90%">90%</option>
                                                        <option value="100%">100%</option>

                                                </select>
                                        </div>
                                        <div className="llanta" >
                                             
                                                <label>Llanta trasera izquierda</label>
                                                <select value={formData.llantatraseraizquierda} onChange={(event)=> setFormData({...formData, llantatraseraizquierda:event.target.value})}>
                                                <option value="null">Selec.</option>
                                                        <option value="0%">0%</option>
                                                        <option value="10%">10%</option>
                                                        <option value="20%">20%</option>
                                                        <option value="30%">30%</option>
                                                        <option value="40%">40%</option>
                                                        <option value="50%">50%</option>
                                                        <option value="60%">60%</option>
                                                        <option value="70%">70%</option>
                                                        <option value="80%">80%</option>
                                                        <option value="90%">90%</option>
                                                        <option value="100%">100%</option>

                                                </select>
                                             
                                        </div>

                                        </Grid>
                                        <Grid item xs={12} sm={6}>

                                        <div className="llanta">
                                               
                                                <label>Suspensión trasera izquierda</label>
                                                <select value={formData.suspensiontraseraizquierda} onChange={(event)=> setFormData({...formData, suspensiontraseraizquierda:event.target.value})}>
                                                <option value="null">Selec.</option>
                                                <option value="Aceptable">Aceptable</option>
                                                        <option value="Deficiente">Optimo</option>
                                                        <option value="Optimo">Deficiente</option>
                                                </select>

                                        </div>
                                        <div className="llanta">
                                               
                                               <label>Suspensión trasera derecha</label>
                                               <select value={formData.suspensiontraseraderecha} onChange={(event)=> setFormData({...formData, suspensiontraseraderecha:event.target.value})}>
                                               <option value="null">Selec.</option>
                                               <option value="Aceptable">Aceptable</option>
                                                        <option value="Deficiente">Optimo</option>
                                                        <option value="Optimo">Deficiente</option>
                                               </select>

                                       </div>


                                </Grid>
                                <Grid item xs={12} sm={6}>
                                        <div className="llanta">
                                               
                                                <label>Suspensión delantera izquierda</label>
                                                <select value={formData.suspensiondelanteraizquierda} onChange={(event)=> setFormData({...formData, suspensiondelanteraizquierda:event.target.value})}>
                                                <option value="null">Selec.</option>
                                                        <option value="Aceptable">Aceptable</option>
                                                        <option value="Deficiente">Optimo</option>
                                                        <option value="Optimo">Deficiente</option>
                                                </select>

                                        </div>
                                        <div className="llanta">
                                               
                                               <label>Suspensión delantera derecha</label>
                                               <select value={formData.suspensiondelanteraderecha} onChange={(event)=> setFormData({...formData, suspensiondelanteraderecha:event.target.value})}>
                                               <option value="null">Selec.</option>
                                               <option value="Aceptable">Aceptable</option>
                                                        <option value="Deficiente">Optimo</option>
                                                        <option value="Optimo">Deficiente</option>
                                               </select>

                                       </div>
                                </Grid>
                                <Grid item xs={12}>
                       

                       <div>
                       <label className="observaciones">Observaciones generales</label>
                       <textarea className="Observaciones" value={formData.observaciones} onChange={(event)=> setFormData({...formData, observaciones:event.target.value})}></textarea>
                    
                       </div>
                       
               </Grid>
                        </Grid>

                </form>
        </div>
        );



}

export default Llantas;