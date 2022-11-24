import { useForm } from "react-hook-form";
import React from 'react';
import { Grid } from "@material-ui/core"
import  "./FormPagesVeh.css";
function LatoneriaVeh({formData,setFormData}) {

        const { register, formState: { errors }, handleSubmit } = useForm();

        const onSubmit = (data) => {
                console.log(data);
        }
        return (<div>

                <h2>Latoneria vehículo</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={10} direction="row" alignItems="flex-start" justifyContent="center">



                                <Grid item xs={6} sm={4}>


                                        <div>
                                                <label>Capota</label>
                                                <input type="text" value={formData.Capota} onChange={(event)=> setFormData({...formData, Capota:event.target.value})} />
                                                {errors.Capota?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label >Guarda fango izq.
                                                </label>
                                                <input type="text" value={formData.Guardafangoizq} onChange={(event)=> setFormData({...formData, Guardafangoizq:event.target.value})} />
                                                {errors.GuardaFangoIzquierdo?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label >Paragolpes trasero</label>
                                                <input type="text" value={formData.Paragolpestrasero} onChange={(event)=> setFormData({...formData, Paragolpestrasero:event.target.value})} />
                                                {errors.ParagolpesTrasero?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label >Paragolpes delantero</label>
                                                <input type="text" value={formData.Paragolpesdelantero} onChange={(event)=> setFormData({...formData, Paragolpesdelantero:event.target.value})} />
                                                {errors.ParagolpesDelantero?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label>Persiana</label>
                                                <input type="text" value={formData.Persiana} onChange={(event)=> setFormData({...formData, Persiana:event.target.value})} />
                                                {errors.Persiana?.type === "required" && <p>* Obligatorio</p>}
                                        </div>




                                </Grid>


                                <Grid item xs={6} sm={4}>


                                        <div>
                                                <label >Puerta delantera izq.</label>
                                                <input type="text" value={formData.Puertadelanteraizq} onChange={(event)=> setFormData({...formData, Puertadelanteraizq:event.target.value})} />
                                                {errors.PuertaDelanteraIzquierda?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label className="hola">cabo cubierta parallantas</label>
                                                <input type="text" value={formData.Cabocubiertaparallantas} onChange={(event)=> setFormData({...formData, Cabocubiertaparallantas:event.target.value})} />
                                                {errors.caboCubiertaParallantas?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label >Puerta delantera der.</label>
                                                <input type="text"value={formData.Puertadelanterader} onChange={(event)=> setFormData({...formData, Puertadelanterader:event.target.value})} />
                                                {errors.PuertaDelanteraDerecha?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label >Costado derecho</label>
                                                <input type="text" value={formData.Costadoderecho} onChange={(event)=> setFormData({...formData, Costadoderecho:event.target.value})} />
                                                {errors.CostadoDerecho?.type === "required" && <p>* Obligatorio</p>}
                                        </div>
                                        <div>
                                                <label >Puerta trasera der.</label>
                                                <input type="text" value={formData.Puertatraserader} onChange={(event)=> setFormData({...formData, Puertatraserader:event.target.value})} />
                                                {errors.PuertaTraseraDerecha?.type === "required" && <p>* Obligatorio</p>}
                                        </div>



                                </Grid>
                                <Grid item xs={6} sm={4}>


                                        <div>
                                                <label >Compuerta</label>
                                                <input type="text" value={formData.Compuerta} onChange={(event)=> setFormData({...formData, Compuerta:event.target.value})} />
                                                {errors.Compuerta?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label>Guardafango derecho</label>
                                                <input type="text" value={formData.Guardafangoderecho} onChange={(event)=> setFormData({...formData, Guardafangoderecho:event.target.value})} />
                                                {errors.GuardafangoDerecho?.type === "required" && <p>* Obligatorio</p>}

                                        </div>
                                        <div>
                                                <label >Puerta trasera izquierda</label>
                                                <input type="text" value={formData.Puertatraseraizquierda} onChange={(event)=> setFormData({...formData, Puertatraseraizquierda:event.target.value})} />
                                                {errors.PuertaTraseraIzquierda?.type === "required" && <p>* Obligatorio</p>}


                                        </div>

                                </Grid>
                               


                        </Grid>
                </form>
        </div>
        );



}

export default LatoneriaVeh;