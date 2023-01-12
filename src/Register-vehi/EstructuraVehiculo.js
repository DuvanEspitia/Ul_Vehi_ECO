import { useForm } from "react-hook-form";
import React from 'react';
import { Grid } from "@material-ui/core"
import  "./FormPagesVeh.css";
function EstructuraVehiculo({formData,setFormData}      ) {

        const { register, formState: { errors }, handleSubmit } = useForm();

        const onSubmit = (data) => {
                console.log(data);
        }
        return (<div>

                <h2>Registro vehículo</h2>
                
                        <Grid container direction="row" alignItems="flex-start" >

                        <Grid item xs={12} sm={12}>
                        <h5>Estructura vehículo</h5>
                        </Grid>
                                <Grid item xs={12} sm={4}>


                                     
                                        <div>
                                                <label >Paral delantero der.</label>
                                                <input type="text" value={formData.paraldelanteroderecho} onChange={(event)=> setFormData({...formData, paraldelanteroderecho:event.target.value})} />
                                                {errors.Modelo?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label >Paral delantero izq.</label>
                                                <input type="text" value={formData.paraldelanteroizquierdo} onChange={(event)=> setFormData({...formData, paraldelanteroizquierdo:event.target.value})} />
                                                {errors.Modelo?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label >Paral central der.</label>
                                                <input type="text" value={formData.paralcentralderecho} onChange={(event)=> setFormData({...formData, paralcentralderecho:event.target.value})} />
                                                {errors.Modelo?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label >Paral central izq.</label>
                                                <input type="text" value={formData.paralcentralizquierdo} onChange={(event)=> setFormData({...formData, paralcentralizquierdo:event.target.value})} />
                                                {errors.Modelo?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label >Paral trasero der.</label>
                                                <input type="text" value={formData.paraltraseroderecho} onChange={(event)=> setFormData({...formData, paraltraseroderecho:event.target.value})} />
                                                {errors.Modelo?.type === "required" && <p>* Obligatorio</p>}


                                        </div>
                                        <div>
                                                <label >Paral trasero izq.</label>
                                                <input type="text" value={formData.paraltraseroizquierdo} onChange={(event)=> setFormData({...formData, paraltraseroizquierdo:event.target.value})} />
                                                {errors.Modelo?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        
                                    


                                </Grid>


                                <Grid item xs={12} sm={4}>


                                        <div>
                                                <label >Estribo izquierdo</label>
                                                <input type="text" value={formData.estriboizquierdo} onChange={(event)=> setFormData({...formData, estriboizquierdo:event.target.value})} />
                                                {errors.Placa?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label>Estribo derecho</label>
                                                <input type="text" value={formData.estriboderecho} onChange={(event)=> setFormData({...formData, estriboderecho:event.target.value})} />
                                                {errors.Chasis?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label >G/polvo metálico derecho</label>
                                                <input type="text" value={formData.gpolvometalicoderecho} onChange={(event)=> setFormData({...formData, gpolvometalicoderecho:event.target.value})} />
                                                {errors.Kilometraje?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label >G/polvo metálico izq.</label>
                                                <input type="text" value={formData.gpolvometalicoizq} onChange={(event)=> setFormData({...formData, gpolvometalicoizq:event.target.value})} />
                                                {errors.Color?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label >Engrafes costado izquierdo</label>
                                                <input type="text" value={formData.engrafescostadoizquierdo} onChange={(event)=> setFormData({...formData, engrafescostadoizquierdo:event.target.value})} />
                                                {errors.Kilometraje?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label >Engrafes costado derecho</label>
                                                <input type="text" value={formData.engrafescostadoderecho} onChange={(event)=> setFormData({...formData, engrafescostadoderecho:event.target.value})} />
                                                {errors.Color?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                      


                                </Grid>
                                <Grid item xs={12} sm={4}>

                                <div>
                                                <label>Capota</label>
                                                <input type="text" value={formData.capota} onChange={(event)=> setFormData({...formData, capota:event.target.value})} />
                                                {errors.Placa?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label>Piso baúl superior</label>
                                                <input type="text" value={formData.pisobaulsuperior} onChange={(event)=> setFormData({...formData, pisobaulsuperior:event.target.value})} />
                                                {errors.Chasis?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label>Panel trasero</label>
                                                <input type="text" value={formData.panelTrasero} onChange={(event)=> setFormData({...formData, panelTrasero:event.target.value})} />
                                                {errors.Chasis?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label>Piso baul</label>
                                                <input type="text" value={formData.pisobaul} onChange={(event)=> setFormData({...formData, pisobaul:event.target.value})} />
                                                {errors.Chasis?.type === "required" && <p>* Obligatorio</p>}

                                        </div>

                                        <div>
                                                <label >ESTADO de la estructura en %</label>
                                                <input type="number" min="0" max="100" value={formData.porcentajeesctructura} onChange={(event)=> setFormData({...formData, porcentajeesctructura:event.target.value})} />
                                                {errors.Kilometraje?.type === "required" && <p>* Obligatorio</p>}


                                        </div>

                                </Grid>

                        </Grid>
        
        </div>
        );



}

export default EstructuraVehiculo;