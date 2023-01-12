import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import './register.css';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core"
import Global from '../Back-edn/Global';
import axios from 'axios';
const requst ='/api/cliente/add';

function Registerclie() {

       

          const[lugarexpedicion,setLugarexpedicion]=useState('');
          const[tipodepersona,setTipodepersona]=useState('');
          const[nombreC,setNombreC]=useState('');
          const[CorreoC,setCorreoc]=useState('');
          const[tipoIdentificacion,setTipoIdentificacion]=useState('');
          const[numeroIdentificacion,setNroID]=useState('');
          const[direccionC,setdireccionC]=useState('');
          const[CelularC,setCelularC]=useState('');
          const[telefonoC,settelefonoC]=useState('');
          const[NombrePropietario,setNombrePropietario]=useState('');
          const[celularPropietario,setCelularPropietario]=useState('');
          const[identificacionPropietario,setIdentificacionPropietario]=useState('');
          const[direccionP,setDireccionP]=useState('');
         const tpersona =()=>{
                var combo = document.getElementById("Tpersona").value;
                
                console.log(combo)
                if(combo==="juridica"){
                        setTipoIdentificacion("NIT")
                        
                       
                }
                else{
                        setTipoIdentificacion("")
                }
               
         }
           const handleSubmit =async(e)=>{
                
                e.preventDefault();
                var url = Global.url;
                try{
                        const resp = await axios.post(url + requst,{
                                
                                

                                lugarexpedicion:lugarexpedicion,
                                tipodepersona:tipodepersona,
                                nombreC:nombreC,
                                correoC:CorreoC,
                                tipoIdentificacion:tipoIdentificacion,
                                numeroIdentificacion:numeroIdentificacion,
                                direccionC:direccionC,
                                celularC:CelularC,
                                telefonoC:telefonoC,
                                nombrePropietario:NombrePropietario,
                                celularPropietario:celularPropietario,
                                identificacionPropietario:identificacionPropietario,
                                direccionP:direccionP

                        });
                        Swal.fire({
                                title: '¡Genial!',
                                text: 'Persona registrado',
                                icon: 'success',
                                confirmButtonText: 'OK'
                              })
                        console.log(resp.data)
                }catch(error){
                        Swal.fire({
                                title: 'No se pudo registrar',
                                text: 'no se logro hacer el registrado',
                                icon: 'error',
                                confirmButtonText: 'OK'
                              })
                        console.log(error.response);

                }


        };
        



        const [dropdown4, setDropdown4] = useState(false);
        const abrirCerrarDropdown4 = () => { setDropdown4(!dropdown4); }

        return (



                <div>
                       
                        <h2>Registro Cliente</h2>
                        <form onSubmit={handleSubmit}>
                                <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">

                                        <Grid item xs={12} sm={6}>
                                                <div className="spacing">
                                                        <label >Tipo de persona</label>
                                                        <select id='Tpersona' value={tipodepersona} onChange={
                                                                
                                                                
                                                                (e)=>{setTipodepersona(e.target.value); tpersona(); }}>
                                                                <option value="Null">--</option>
                                                                <option value="natural">Natural</option>
                                                                <option value="juridica">Juridica</option>

                                                        </select>




                                                        <label >Lugar de expedición </label>
                                                        <input type="text" value={lugarexpedicion} onChange={(e)=>setLugarexpedicion(e.target.value) } />


                                                        <label >Nombre completo</label>
                                                        <input type="text" value={nombreC} onChange={(e)=>setNombreC(e.target.value) } required />


                                                        <label >Correo</label>
                                                        <input type="text"value={CorreoC} onChange={(e)=>setCorreoc(e.target.value) } />

                                                </div>

                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                                <div className="spacing">

                                                        <label >Tipo de indentificación</label>
                                                        <select value={tipoIdentificacion} id="ti"
                                                        onChange={(e)=>setTipoIdentificacion(e.target.value) }>
                                                                <option value="Null">--</option>
                                                                <option value="TJ">Tarjeta de identidad</option>
                                                                <option value="CC">Cedula de ciudadanía</option>
                                                                <option value="TJX">Tarjeta de extranjeria</option>
                                                                <option value="CCE">Cedula de extranjeria</option>
                                                                <option value="NIT">NIT</option>
                                                                <option value="PASP">Pasaporte</option>
                                                        </select>


                                                        <label>Numero de identificación</label>
                                                        <input type="number" value={numeroIdentificacion
                                                        } onChange={(e)=>setNroID(e.target.value) }/>



                                                        <label >Dirección</label>
                                                        <input type="text" value={direccionC
                                                        } onChange={(e)=>setdireccionC(e.target.value) }/>

                                                        <label >Telefono</label>
                                                        <input type="text" value={telefonoC
                                                        } onChange={(e)=>settelefonoC(e.target.value) } />


                                                        <label >Celular</label>
                                                        <input type="text"  value={CelularC
                                                        } onChange={(e)=>setCelularC(e.target.value) }  />


                                                </div>

                                        </Grid>



                                        <Grid item xs={12} sm={12}>
                                                <h2>Datos propietario</h2>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>

                                                <div className="spacing">
                                                        <div>

                                                                <label>Nombre completo</label>
                                                                <input type="text"  value={NombrePropietario
                                                        } onChange={(e)=>setNombrePropietario(e.target.value) }/>

                                                        </div>

                                                        <div>

                                                                <label>Celular</label>
                                                                <input type="number" value={celularPropietario
                                                        } onChange={(e)=>setCelularPropietario(e.target.value) }/>

                                                        </div>
                                                        <div>

                                                                <label>Identificación</label>
                                                                <input type="number" value={identificacionPropietario
                                                        } onChange={(e)=>setIdentificacionPropietario(e.target.value) }/>

                                                        </div>
                                                </div>
                                        </Grid>







                                        <Grid item xs={12} sm={6}>

                                                <div className="spacing">
                                                        
                                                        <div>

                                                                <label>Dirección</label>
                                                                <input type="text"  value={direccionP
                                                        } onChange={(e)=>setDireccionP(e.target.value) }/>
                                                               
                                                        </div>
                                                </div>

                                        </Grid>


                                        <Grid item xs={12} sm={12}>
                                                <div className="butooncenter">


                                                        <button type="submit" className="butonreg" id="regis-cli" value="Guardar" >Guardar</button>
                                                </div>


                                        </Grid>
                                </Grid>
                        </form>
                </div>

        );


}

export default Registerclie;