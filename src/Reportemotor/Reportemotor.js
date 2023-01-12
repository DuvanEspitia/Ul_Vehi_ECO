import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import {  Grid } from "@material-ui/core"
import axios from "axios";
import Global from "../Back-edn/Global";
import Swal from "sweetalert2";
import './Reportemotor.css';
function Reportemotor() {

        const { register, formState: { errors }, handleSubmit } = useForm();
        let cilindroConsultado = [];
       
        
        const [placareporte,setplacareporte]=useState([]);
      
        let por = [];
        let per = [];
        const [dataCilindro, setDataCilindro] = useState([]);
        const [dataPerdida, setdataPerdida] = useState([]);

        const Buscar = async (e) => {

                e.preventDefault();

                var url = Global.url;
                let inputValue = document.getElementById("id").value;

                var requst = "/api/vehiculo/placa/" + inputValue;
                axios.get(url + requst).then((res) => {

                        if (!res.data[0]) {
                                Swal.fire({
                                        title: 'UPSSS',
                                        text: 'No se logro econtrar la placa: ' + inputValue,
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                })

                                console.log("no")
                        }
                        let array = res.data;
                        let ultimo = array.pop();
                        let placareportes = ultimo.placa;
                        setplacareporte(placareportes)
                        
                        
                        document.getElementById("fecha").innerHTML = (ultimo.createdDate).slice(0, 10);
                        document.getElementById("Marca").innerHTML = ultimo.marca;

                        document.getElementById("Color").innerHTML = ultimo.color;

                        document.getElementById("Chasis").innerHTML = ultimo.nrochasis;


                        document.getElementById("NombreP").innerHTML = ultimo.id_cliente.nombrePropietario;
                        document.getElementById("CelularP").innerHTML = ultimo.id_cliente.celularPropietario;
                        document.getElementById("IdP").innerHTML = ultimo.id_cliente.identificacionPropietario;

                        document.getElementById("DireccionP").innerHTML = ultimo.id_cliente.direccionP;
                        document.getElementById("nombreC").innerHTML = ultimo.id_cliente.nombreC;
                        document.getElementById("CelularC").innerHTML = ultimo.id_cliente.celularC;
                        document.getElementById("IdC").innerHTML = ultimo.id_cliente.direccionC;


                        document.getElementById("aceite_motor").innerHTML = ultimo.id_motor.aceitemotor;
                        document.getElementById("direccion_hidraulica").innerHTML = ultimo.id_motor.direccionhidraulica;
                        document.getElementById("lava_parabrisas").innerHTML = ultimo.id_motor.embrague;
                        document.getElementById("liquido_frenos").innerHTML = ultimo.id_motor.lavaparabrisas;
                        document.getElementById("embrague").innerHTML = ultimo.id_motor.liquidofrenos;
                        document.getElementById("refrigerante").innerHTML = ultimo.id_motor.refigerante;
                        document.getElementById("observaciones").innerHTML = ultimo.id_motor.observaciones;




                        console.log(ultimo)
                        por = ultimo.id_motor.id_cilindro;
                        per = ultimo.id_motor.id_perdida;
                        setDataCilindro(por)
                        setdataPerdida(per)

                        console.log(por)
                        console.log(cilindroConsultado)
                        
                })
               

        }
        const Reportemotor=()=>{
              
                console.log(placareporte)
                        if(placareporte==""){
                                Swal.fire({
                                        title: 'UPSSS',
                                        text: 'Ingrese primero una placa antes de hacer el reporte ',
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                })
                        }else{
                                setTimeout(window.open(Global.url+"/api/motor/export/"+placareporte),2000)
                        }
                       
               

        }

        const onSubmit = (data) => {
                console.log(data);
        }
        return (<div>

                <h2>Reporte motor</h2>

                <div className="espacioiz">
                        <Grid container>


                                <Grid item xs={9} sm={4}>




                                        <div>

                                                <label>Placa</label>
                                                <div className="ko">
                                                <input type="text" id="id" />
                                                {errors.CarteraPuertaDelanteraIzquierda?.type === "required" && <p>* Obligatorio</p>}

                                                <button type="submit" className="button" onClick={Buscar}>Buscar</button>
                                                </div>
                                        </div>


                                        <div>

                                                <label>Marca</label>
                                                <h6 id="Marca"></h6>
                                        </div>





                                </Grid>
                                <Grid item xs={3} sm={4}>


                                        <div>

                                                <label>Fecha</label>
                                                <h6 id="fecha"></h6>
                                        </div>

                                        <div>

                                                <label>Color</label>
                                                <h6 id="Color"></h6>
                                        </div>






                                </Grid>
                                <Grid item xs={6} sm={4}>



                                        <div>

                                                <label>Chasis</label>
                                                <h6 id="Chasis"></h6>
                                        </div>



                                </Grid>





                                <Grid item xs={7} sm={4}>
                                        <h4>Datos propietario</h4>

                                        <div>

                                                <label>Nombre</label>
                                                <h6 id="NombreP"></h6>
                                        </div>

                                        <div>

                                                <label>Celular</label>
                                                <h6 id="CelularP"></h6>
                                        </div>



                                        <div>

                                                <label>Identificación</label>
                                                <h6 id="IdP"></h6>
                                        </div>


                                </Grid>



                                <Grid item xs={5} sm={3}>



                                        <br />

                                        <div>

                                                <label>Dirección</label>
                                                <h6 id="DireccionP"></h6>
                                        </div>

                                </Grid>

                                <Grid item xs={6} sm={6}>
                                        <h4>Datos cliente</h4>

                                        <div>

                                                <label>Nombre</label>
                                                <h6 id="nombreC"></h6>
                                        </div>

                                        <div>

                                                <label>Celular</label>
                                                <h6 id="CelularC"></h6>
                                        </div>



                                </Grid>


                                <Grid item xs={6} sm={6}>


                                        <div>
                                                <br />
                                                <label>Identificación</label>
                                                <h6 id="IdC"></h6>
                                        </div>





                                </Grid>





                                <Grid item xs={12} sm={12}>

                                        <table class="table" >
                                                <thead>
                                                        <tr>
                                                                <th>Cilindro</th>
                                                                <th>Valor</th>
                                                                <th>Vacio</th>
                                                        </tr>
                                                </thead>
                                                <tbody>

                                                        {dataCilindro.map((dataCilindros) => (

                                                                <tr key={dataCilindros.id}>
                                                                        <td>{dataCilindros.cilindro}</td>
                                                                        <td>{dataCilindros.valor}</td>
                                                                        <td>{dataCilindros.vacio}</td>
                                                                </tr>


                                                        ))}


                                                </tbody>

                                        </table>


                                </Grid>

                        </Grid>

                </div>

                <div className="espacioiz">











                        <Grid item xs={12} sm={12}>
                                <br />
                                <table class="table" >
                                        <thead>
                                                <tr>
                                                        <th>Perdida de Fluido</th>
                                                        <th>Revisar</th>
                                                </tr>
                                        </thead>
                                        <tbody>

                                                {dataPerdida.map((dataPerdidas) => (

                                                        <tr key={dataPerdidas.id}>
                                                                <td>{dataPerdidas.perdidafluido}</td>
                                                                <td>{dataPerdidas.revisar}</td>

                                                        </tr>


                                                ))}

                                        </tbody>

                                </table>


                        </Grid>
                        <Grid item xs={12}> <label>Niveles de fluido:</label></Grid>
                        <Grid item xs={6} sm={6}>

                                <div >

                                        <label>Aceite motor:</label>
                                        <h6 id="aceite_motor"></h6>
                                        <label>Dirección hidráulica:</label>
                                        <h6 id="direccion_hidraulica"></h6>
                                        <label>Lava parabrisas:</label>
                                        <h6 id="lava_parabrisas"></h6>

                                </div>




                        </Grid>
                        <Grid item xs={6} sm={6}>

                                <div >

                                        <label>Liquido frenos:</label>
                                        <h6 id="liquido_frenos"></h6>
                                        <label>Embrague:</label>
                                        <h6 id="embrague"></h6>
                                        <label>Refrigerante:</label>
                                        <h6 id="refrigerante"></h6>

                                </div>




                        </Grid>




                        <Grid item xs={12}>


                                <div>
                                        <label className="observaciones">Observaciones</label>
                                        <textarea type="text" id="observaciones" className="Observaciones" disabled />
                                </div>

                        </Grid>
                        <Grid item xs={12}>
                                <br/>
                                <div className="reB">
                                        <button
                                                className="button"

                                                                onClick={Reportemotor}

                                        >Generar reporte
                                        </button>

                                </div>


                        </Grid>

                </div>
        </div>
        );



}

export default Reportemotor;