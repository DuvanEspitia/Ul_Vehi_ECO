import { useForm } from "react-hook-form";
import React from 'react';
import { Grid } from "@material-ui/core"
import "./FormPagesVeh.css";
function Inferior({ formData, setFormData }) {

        const { register, formState: { errors }, handleSubmit } = useForm();

        const onSubmit = (data) => {
                console.log(data);
        }
        return (<div>

                <h2>Registro vehículo</h2>

                <Grid container  >


                        <Grid item xs={12} sm={12}>
                                <h5>Chasis</h5>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                                <div>
                                        <label >Extensión punta delantera</label>
                                        <input type="text" className="Box-size" value={formData.extensionpuntadelantera} onChange={(event) => setFormData({ ...formData, extensionpuntadelantera: event.target.value })} />

                                </div>
                                <div>
                                        <label >Extensión punta trasera</label>
                                        <input type="text" className="Box-size" value={formData.extensionpuntatrasera} onChange={(event) => setFormData({ ...formData, extensionpuntatrasera: event.target.value })} />

                                </div>
                                <div>
                                        <label >Base tijera izquierda</label>
                                        <input type="text" className="Box-size" value={formData.basetijeraizquierda} onChange={(event) => setFormData({ ...formData, basetijeraizquierda: event.target.value })} />


                                </div>

                                <div>
                                        <label >Barra estabilizadora</label>
                                        <input type="text" className="Box-size" value={formData.barraestabilizadora} onChange={(event) => setFormData({ ...formData, barraestabilizadora: event.target.value })} />

                                </div>


                                <div>
                                        <label >Punta delantera izq.</label>
                                        <input type="text" className="Box-size" value={formData.puntadelanteraizq} onChange={(event) => setFormData({ ...formData, puntadelanteraizq: event.target.value })} />


                                </div>

                        </Grid>


                        <Grid item xs={12} sm={4}>



                                <div>
                                        <label>Base tijera der.</label>
                                        <input type="text" className="Box-size" value={formData.basetijeraderecha} onChange={(event) => setFormData({ ...formData, basetijeraderecha: event.target.value })} />


                                </div>
                                <div>
                                        <label >Carter caja</label>
                                        <input type="text" className="Box-size" value={formData.cartercaja} onChange={(event) => setFormData({ ...formData, cartercaja: event.target.value })} />

                                </div>
                                <div>
                                        <label >Carter motor</label>
                                        <input type="text" className="Box-size" value={formData.cartermotor} onChange={(event) => setFormData({ ...formData, cartermotor: event.target.value })} />

                                </div>
                                <div>
                                        <label >Exosto</label>
                                        <input type="text" className="Box-size" value={formData.exosto} onChange={(event) => setFormData({ ...formData, exosto: event.target.value })} />

                                </div>
                                <div>
                                        <label>Tanque de combustible</label>
                                        <input type="text" className="Box-size" value={formData.tanquedecombustible} onChange={(event) => setFormData({ ...formData, tanquedecombustible: event.target.value })} />

                                </div>


                        </Grid>
                        <Grid item xs={12} sm={4}>

                                <div>
                                        <label >Punta delantera derecha</label>
                                        <input type="text" className="Box-size" value={formData.puntadelanteraderecha} onChange={(event) => setFormData({ ...formData, puntadelanteraderecha: event.target.value })} />

                                </div>
                                <div>
                                        <label >Punta trasera izq.</label>
                                        <input type="text" className="Box-size" value={formData.puntatraseraizq} onChange={(event) => setFormData({ ...formData, puntatraseraizq: event.target.value })} />


                                </div>

                                <div>
                                        <label >Punta trasera derecha</label>
                                        <input type="text" className="Box-size" value={formData.puntatraseraderecha} onChange={(event) => setFormData({ ...formData, puntatraseraderecha: event.target.value })} />


                                </div>

                                <div>
                                        <label >Panel</label>
                                        <input type="text" className="Box-size" value={formData.panel} onChange={(event) => setFormData({ ...formData, panel: event.target.value })} />

                                </div>


                        </Grid>
                        <Grid item xs={12} sm={4}>


                                <div>
                                        <label>Traviesa delantera</label>
                                        <input type="text" className="Box-size" value={formData.traviesadelantera} onChange={(event) => setFormData({ ...formData, traviesadelantera: event.target.value })} />

                                </div>
                                <div>
                                        <label >Traviesa media</label>
                                        <input type="text" className="Box-size" value={formData.traviesamedia} onChange={(event) => setFormData({ ...formData, traviesamedia: event.target.value })} />

                                </div>
                                <div>
                                        <label>Traviesa trasera</label>
                                        <input type="text" className="Box-size" value={formData.traviesatrasera} onChange={(event) => setFormData({ ...formData, traviesatrasera: event.target.value })} />

                                </div>
                                <div>
                                        <label>Frontal superior</label>
                                        <input type="text" className="Box-size" value={formData.frontalsuperior} onChange={(event) => setFormData({ ...formData, frontalsuperior: event.target.value })} />

                                </div>


                        </Grid>
                        <Grid item xs={12} sm={4}>


                                <div>
                                        <label >Viga derecha</label>
                                        <input type="text" className="Box-size" value={formData.vigaderecha} onChange={(event) => setFormData({ ...formData, vigaderecha: event.target.value })} />


                                </div>
                                <div>
                                        <label>Viga izq.</label>
                                        <input type="text" className="Box-size" value={formData.vigaizq} onChange={(event) => setFormData({ ...formData, vigaizq: event.target.value })} />


                                </div>
                                <div>
                                        <label >Frontal inferior</label>
                                        <input type="text" className="Box-size" value={formData.frontalinferior} onChange={(event) => setFormData({ ...formData, frontalinferior: event.target.value })} />

                                </div>



                                <div>
                                        <label >ESTADO del Chasis en %</label>
                                        <input type="number" min="0" max="100" className="Box-size" value={formData.porcentajedechasis} onChange={(event) => setFormData({ ...formData, porcentajedechasis: event.target.value })} />

                                </div>

                        </Grid>
                </Grid>

        </div>
        );



}

export default Inferior;