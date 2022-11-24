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

                <h2>Estructura vehículo</h2>
                
                        <Grid container direction="row" alignItems="flex-start" justifyContent="center">



                                <Grid item xs={6} sm={4}>


                                        <div>
                                                <label>Extensión capota izq.</label>
                                                <input type="text" value={formData.Extensióncapotaizq} onChange={(event)=> setFormData({...formData, Extensióncapotaizq:event.target.value})} />
                                                {errors.Placa?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label >Paral central derecho</label>
                                                <input type="text" value={formData.Paralcentralderecho} onChange={(event)=> setFormData({...formData, Paralcentralderecho:event.target.value})} />
                                                {errors.Modelo?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label >G/polvo metálico izq.</label>
                                                <input type="text" value={formData.Gpolvometálicoizq} onChange={(event)=> setFormData({...formData, Gpolvometálicoizq:event.target.value})} />
                                                {errors.Color?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label >Engrafes costado traseros</label>
                                                <input type="text" value={formData.Engrafescostadotraseros} onChange={(event)=> setFormData({...formData, Engrafescostadotraseros:event.target.value})} />
                                                {errors.Color?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label >Parallamas</label>
                                                <input type="text" value={formData.Parallamas} onChange={(event)=> setFormData({...formData, Parallamas:event.target.value})} />
                                                {errors.Placa?.type === "required" && <p>* Obligatorio</p>}

                                        </div>



                                </Grid>


                                <Grid item xs={6} sm={4}>


                                        <div>
                                                <label >Estribo izquierdo</label>
                                                <input type="text" value={formData.Estriboizquierdo} onChange={(event)=> setFormData({...formData, Estriboizquierdo:event.target.value})} />
                                                {errors.Placa?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label>Estribo derecho</label>
                                                <input type="text" value={formData.Estriboderecho} onChange={(event)=> setFormData({...formData, Estriboderecho:event.target.value})} />
                                                {errors.Chasis?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label >G/polvo metálico derecho</label>
                                                <input type="text" value={formData.Gpolvometálicoderecho} onChange={(event)=> setFormData({...formData, Gpolvometálicoderecho:event.target.value})} />
                                                {errors.Kilometraje?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label >Engrafes faidon traseros</label>
                                                <input type="text" value={formData.Engrafesfaidontraseros} onChange={(event)=> setFormData({...formData, Engrafesfaidontraseros:event.target.value})} />
                                                {errors.Kilometraje?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label>Faición</label>
                                                <input type="text" value={formData.Faición} onChange={(event)=> setFormData({...formData, Faición:event.target.value})} />
                                                {errors.Chasis?.type === "required" && <p>* Obligatorio</p>}

                                        </div>


                                </Grid>
                                <Grid item xs={6} sm={4}>


                                        <div>
                                                <label >Paral panorámico izq.</label>
                                                <input type="text" value={formData.Paralpanorámicoizq} onChange={(event)=> setFormData({...formData, Paralpanorámicoizq:event.target.value})} />
                                                {errors.Placa?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label>Piso baúl superior</label>
                                                <input type="text" value={formData.Pisobaúlsuperior} onChange={(event)=> setFormData({...formData, Pisobaúlsuperior:event.target.value})} />
                                                {errors.Chasis?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label >Extensión capota derecha</label>
                                                <input type="text" value={formData.Extensióncapotaderecha} onChange={(event)=> setFormData({...formData, Extensióncapotaderecha:event.target.value})} />
                                                {errors.Kilometraje?.type === "required" && <p>* Obligatorio</p>}


                                        </div>

                                </Grid>

                        </Grid>
        
        </div>
        );



}

export default EstructuraVehiculo;