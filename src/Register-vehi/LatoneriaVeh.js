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

                <h2>Registro vehículo</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container  direction="row" alignItems="flex-start" >

                        <Grid item xs={12} sm={12}>
                        <h5>Latoneria</h5>
                        </Grid>

                                <Grid item xs={12} sm={4}>


                                       
                                        <div>
                                                <label >Guarda fango izq.
                                                </label>
                                                <input type="text" value={formData.guardafangoizq} onChange={(event)=> setFormData({...formData, guardafangoizq:event.target.value})} />
                                                

                                        </div>
                                        <div>
                                                <label >Bomper trasero</label>
                                                <input type="text" value={formData.Bompertrasero} onChange={(event)=> setFormData({...formData, bompertrasero:event.target.value})} />
                                               
                                        </div>
                                        <div>
                                                <label >Bomper delantero</label>
                                                <input type="text" value={formData.bomperdelantero} onChange={(event)=> setFormData({...formData, bomperdelantero:event.target.value})} />
                                               
                                        </div>
                                        
                                        <div>
                                                <label >Retrovisor izq.</label>
                                                <input type="text" value={formData.retrovisorizquierdo} onChange={(event)=> setFormData({...formData, retrovisorizquierdo:event.target.value})} />
                                             
                                        </div>
                                        <div>
                                                <label >Retrovisor derecho</label>
                                                <input type="text" value={formData.retrovisorderecho} onChange={(event)=> setFormData({...formData, retrovisorderecho:event.target.value})} />
                                                
                                        </div>



                                </Grid>


                                <Grid item xs={12} sm={4}>


                                        <div>
                                                <label >Puerta delantera izq.</label>
                                                <input type="text" value={formData.puertadelanteraizq} onChange={(event)=> setFormData({...formData, puertadelanteraizq:event.target.value})} />
                                                

                                        </div>
                   
                                        <div>
                                                <label >Puerta delantera der.</label>
                                                <input type="text"value={formData.puertadelanterader} onChange={(event)=> setFormData({...formData, puertadelanterader:event.target.value})} />
                                                
                                        </div>
                                        <div>
                                                <label >Costado derecho</label>
                                                <input type="text" value={formData.costadoderecho} onChange={(event)=> setFormData({...formData, costadoderecho:event.target.value})} />
                                                
                                        </div>
                                        <div>
                                                <label >Puerta trasera der.</label>
                                                <input type="text" value={formData.puertatraserader} onChange={(event)=> setFormData({...formData, puertatraserader:event.target.value})} />
                                              
                                        </div>
                                        

                                        <div>
                                                <label>Persiana</label>
                                                <input type="text" value={formData.persiana} onChange={(event)=> setFormData({...formData, persiana:event.target.value})} />
                                                
                                        </div>  

                                </Grid>
                                <Grid item xs={12} sm={4}>


                                        <div>
                                                <label >Compuerta</label>
                                                <input type="text" value={formData.compuerta} onChange={(event)=> setFormData({...formData, compuerta:event.target.value})} />
                                              

                                        </div>
                                        <div>
                                                <label>Guardafango derecho</label>
                                                <input type="text" value={formData.guardafangoderecho} onChange={(event)=> setFormData({...formData, guardafangoderecho:event.target.value})} />
                                    

                                        </div>
                                        <div>
                                                <label >Puerta trasera izquierda</label>
                                                <input type="text" value={formData.puertatraseraizquierda} onChange={(event)=> setFormData({...formData, puertatraseraizquierda:event.target.value})} />
                                         


                                        </div>
                                        <div>
                                                <label >ESTADO de la Latoneria en %</label>
                                                <input type="number"  min="0" max="100" value={formData.porcetajelatoneria} onChange={(event)=> setFormData({...formData, porcetajelatoneria:event.target.value})} />
                                            


                                        </div>

                                </Grid>
                               


                        </Grid>
                </form>
        </div>
        );



}

export default LatoneriaVeh;