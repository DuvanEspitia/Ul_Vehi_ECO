import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import './register.css';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core"
import axios from 'axios';
import Global from '../Back-edn/Global';

function ClienteRegistrado() {

        
        const [dropdown4, setDropdown4] = useState(false);
        const abrirCerrarDropdown4 = () => { setDropdown4(!dropdown4); }
        
        const handleSubmit =async(e)=>{
                e.preventDefault();
                
                        var url = Global.url;
                let inputValue = document.getElementById("id").value;
                
                var requst = "/api/cliente/identificacion/"+inputValue;
                      try{ axios.get(url + requst).then((res )=> {
                        if(!res.data[0]){
                                Swal.fire({
                                        title: 'Usuario no econtrado',
                                        text: 'no se logro econtrar la cedula',
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                      })

                                console.log("no")
                        }

                                let array = res.data;
                                let ultimo = array.pop();


                document.getElementById("Tid").innerHTML= ultimo.tipoIdentificacion;
                document.getElementById("Le").innerHTML= ultimo.lugarexpedicion;
                document.getElementById("nombre").innerHTML= ultimo.nombreC;
                document.getElementById("correo").innerHTML= ultimo.correoC;
                document.getElementById("nroid").innerHTML= ultimo.numeroIdentificacion;
                document.getElementById("dire").innerHTML= ultimo.direccionC;
                document.getElementById("tele").innerHTML= ultimo.telefonoC;
                document.getElementById("celu").innerHTML= ultimo.celularC;
             
                                console.log(res.data)
                                console.log(ultimo)
                })
        
        }catch(error){
                console.log(error);

        }
}
                
    

      

       

        return (



                <div>
                        <h2>Consultar Cliente</h2>
                        <form onSubmit={handleSubmit}>
                                <Grid container direction="row" >

                                        <Grid item xs={12} sm={12}>
                                                <label className='consulta'  >Identificación a cosultar:</label>
                                                <input className='Consulta' id="id" type="number" name="consultauser" />
                                                <button className='b_consultars' type='submit' >Consultar</button>

                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                                <div className="spacing">
                                                        <label >Tipo de indentificación:</label>
                                                        <h6 id='Tid'></h6>


                                                        <label >Lugar de expedición:</label>
                                                        <h6 id='Le'></h6>

                                                        <label >Nombre completo:</label>
                                                        <h6 id='nombre'></h6>


                                                        <label >Correo:</label>
                                                        <h6 id='correo'></h6>

                                                </div>

                                        </Grid>
                                        <Grid item xs={12} sm={6}>




                                                <div className="spacing">
                                                        <label>Numero de identificación:</label>
                                                        <h6 id='nroid'></h6>



                                                        <label >Dirección:</label>
                                                        <h6 id='dire'></h6>


                                                        <label >Telefono:</label>
                                                        <h6 id='tele'></h6>


                                                        <label >Celular:</label>
                                                        <h6 id='celu'></h6>


                                                </div>

                                        </Grid>



                                </Grid>
                        </form>





                </div>
                /* <Grid item xs={12} sm={12}>
                <div className="button-container">
                <input type="submit" id="regis-cli" value="Guardar"/>
                </div>
                </Grid>*/
        );


}

export default ClienteRegistrado;