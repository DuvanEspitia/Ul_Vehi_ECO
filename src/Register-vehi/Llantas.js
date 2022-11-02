import { useForm } from "react-hook-form";
import React from 'react';
import { Grid } from "@material-ui/core"
import './FormPagesVeh.css';
function Llantas() {

        const { register, formState: { errors }, handleSubmit } = useForm();

        const onSubmit = (data) => {
                console.log(data);
        }
        return (<div>


                <h2>Llantas</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                        <Grid container direction="row" stifyContent="space-evenly"  >


                                <Grid item xs={12} sm={6}>

                                        <br />
                                        <div className="llanta">
                                                <label>Llanta delantera derecha</label>
                                                <select {...register("LlantaDelanteraDerecha")}>
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
                                                <br />
                                                <label>Llanta delantera izquierda</label>
                                                <select {...register("LlantaDelanteraIzquierda")}>
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

                                        <br />
                                        <div className="llanta">
                                                <label>Llanta trasera derecha</label>
                                                <select {...register("LlantaTraseraDerecha")}>
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
                                                <br />
                                                <label>Llanta trasera izquierda</label>
                                                <select {...register("LlantaTraseraIzquierda")}>
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
                                                <br /><br /><br />
                                        </div>


                                </Grid>
                        </Grid>

                </form>
        </div>
        );



}

export default Llantas;