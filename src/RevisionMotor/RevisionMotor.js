import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { Grid, isMuiElement } from "@material-ui/core"
import Cilindro from "./Ejemplo.json";
import Perdidad from "./Ejemplo2.json";
import Global from "../Back-edn/Global";
import Ejemplo from "./Ejemplo.json";
import axios from "axios";
import Swal from "sweetalert2";
import './Revisionmotor.css';
import { Util } from "reactstrap";

function RevisionMotor() {
        let log =[];
        
        var json={};
        var jsonString = [];
        let id_motor = 0;
        const [id_vehiculo, setid_vehiculo] = useState(Ejemplo);
        const { register, formState: { errors }, handleSubmit } = useForm();
        const [contacts, setContacts] = useState(Ejemplo);
        const [contactsP, setContactsP] = useState(Ejemplo);


        const [idsCilindro,setidsCilindro] =useState(Ejemplo)
        const [idsPerdida,setidsPerdida]= useState(Ejemplo)


        let arreglocilindro = [];
        let arregloperdida = [];
        const [id_cilindro, setid_cilindro] = useState(arreglocilindro);
        const [id_perdida, setid_perdida] = useState(arregloperdida);


        const [addFormData, setAddFormData] = useState({
                "id_motor": {
                        "id": 0
                },
                cilindro: '',
                valor: '',
                vacio: ''
        })

        const [addFormDataS, setAddFormDataP] = useState({
                perdidafluido: '',
                revisar: ''
        })



        const handleAddFormChangeP = (event) => {
                event.preventDefault();
                const fieldName = event.target.getAttribute("name");
                const fieldValue = event.target.value;

                const newFormData = { ...addFormDataS };
                newFormData[fieldName] = fieldValue;

                setAddFormDataP(newFormData);
        };
                let Aperdida;
        const handleAddFormSumitP = async (event) => {


                event.preventDefault();
                const newContact = {


                        perdidafluido: addFormDataS.perdidafluido,
                        revisar: addFormDataS.revisar

                };
                const newContacts = [...contactsP, newContact];
                setContactsP(newContacts);

                console.log(newContacts);

                console.log(arregloperdida);
                var requst = "/api/perdida/add";
                var url = Global.url;
                try {

                        await axios.post(url + requst, {
                                "perdidafluido": newContact.perdidafluido,
                                "revisar": newContact.revisar,

                        }).then((res) => {
                                const nuevoperdida = [...id_perdida, res.data.id]
                                setid_perdida(nuevoperdida);
                                console.log(nuevoperdida)


                                Aperdida=nuevoperdida.map((item) => ({ id: item }));

                                const setidperdida = [idsPerdida, Aperdida]
                                setidsPerdida(setidperdida)
                                console.log(Aperdida)


                        })

                }
                catch (error) {
                        console.log(error);
                        console.log(error.response);
                }


        };

        const handleAddFormChange = (event) => {
                event.preventDefault();
                const fieldName = event.target.getAttribute("name");
                const fieldValue = event.target.value;

                const newFormData = { ...addFormData };
                newFormData[fieldName] = fieldValue;
                console.log(newFormData)

                setAddFormData(newFormData);
        };
        let NuevoArreglo;
        const handleAddFormSumit = async (event) => {
                event.preventDefault();
                const newContact = {

                        cilindro: addFormData.cilindro,
                        valor: addFormData.valor,
                        vacio: addFormData.vacio

                };
                const newContacts = [...contacts, newContact];
              
                setContacts(newContacts);
                console.log(newContacts);


                var requst = "/api/cilindro/add";
                var url = Global.url;
               
                try {

                        await axios.post(url + requst, {


                                "cilindro": newContact.cilindro,
                                "valor": newContact.valor,
                                "vacio": newContact.vacio,






                        }).then((res) => {

                                console.log(res.data.id);
                                const nuevocilindro = [...id_cilindro, res.data.id]
                                setid_cilindro(nuevocilindro);
                                 json={};
                                
                                

                                 NuevoArreglo=nuevocilindro.map((item) => ({ id: item }));
                                        console.log(NuevoArreglo)
             
                                const añadir= [...idsCilindro,NuevoArreglo];    
                                
                                setidsCilindro(añadir)
                                console.log(idsCilindro)
                                


                                console.log(id_cilindro)



                        })
                        

                        console.log(arreglocilindro)
                }
               

                catch (error) {
                        console.log(error);
                        console.log(error.response);
                }

             

        };
        const ConsultaPla = async (e) => {
                e.preventDefault();

                var url = Global.url;
                let inputValue = document.getElementById("id").value;

                var requst = "/api/vehiculo/placa/" + inputValue;
                axios.get(url + requst).then((res) => {
                        
                        if(!res.data[0]){
                                Swal.fire({
                                        title: 'UPSSS',
                                        text: 'No se logro encontrar la placa: '+inputValue,
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                      })

                                console.log("no")
                        }



                        let array = res.data;
                        let ultimo = array.pop();

                        const idmotor = [...id_vehiculo, ultimo.id_motor.id]
                        setid_vehiculo(idmotor);




                        document.getElementById("fecha").innerHTML = (ultimo.createdDate).slice(0,10);
                        document.getElementById("Marca").innerHTML = ultimo.marca;
                        document.getElementById("Color").innerHTML = ultimo.color;
                        document.getElementById("Modelo").innerHTML = ultimo.modelo;



                        document.getElementById("nombre").innerHTML = ultimo.id_cliente.nombrePropietario;
                        document.getElementById("celular").innerHTML = ultimo.id_cliente.celularPropietario;
                        document.getElementById("identificacion").innerHTML = ultimo.id_cliente.identificacionPropietario;
                        document.getElementById("direccionP").innerHTML = ultimo.id_cliente.direccionP;

                        document.getElementById("nombreC").innerHTML = ultimo.id_cliente.nombreC;
                        document.getElementById("celularPropietario").innerHTML = ultimo.id_cliente.celularC;
                        document.getElementById("numeroIndentificacion").innerHTML = ultimo.id_cliente.numeroIdentificacion;
                        document.getElementById("direccionC").innerHTML = ultimo.id_cliente.direccionC;



                        console.log(ultimo)


                        console.log(res.data)
                        console.log(ultimo)
                })

        }
        

    /*    const FillCilinder =  () => {
                

                for ( let i = 0; i<id_cilindro.length; i++) {


                        cilindro.push("id:"+id_cilindro[i])

                       console.log( cilindro.stringify(cilindro))

                        }
        }*/
        

       
        const onSubmit =async (data) => {
                var url = Global.url;
                console.log(id_motor);

                var requst = "/api/motor/alter";
              
               
                log= idsCilindro.pop()
                let Arr= [];
                Arr =idsPerdida.pop()
                
               
            
                console.log()

              
             
                        console.log(idsCilindro)

                                try{

                                        await axios.post(url + requst, {


                                                id: id_vehiculo[0],
                                                "id_cilindro":(log),
                                                "id_perdida":(Arr),
                                                aceitemotor: data.aceitemotor,
                                                embrague: data.embrague,
                                                liquidofrenos: data.liquidofrenos,
                                                lavaparabrisas: data.lavaparabrisas,
                                                observaciones: data.Observaciones,
                                                refigerante: data.refigerante,
                                                direccionhidraulica: data.direccionhidraulica
                                        })


                                        Swal.fire({
                                                title: '¡Genial!',
                                                text: 'Motor registrado',
                                                icon: 'success',
                                                confirmButtonText: 'OK'
                                              })
                                }catch{

                                        Swal.fire({
                                                title: 'UPS',
                                                text: 'No se logro hacer el registro',
                                                icon: 'error',
                                                confirmButtonText: 'OK'
                                              })

                                }
                       
                     
       
             
                

                console.log(data);
        }
        return (

                <div className="cuerpo">

                        <h2>Revisión motor</h2>


                        <Grid container  justifyContent="flex-start" alignItems="flex-start">


                                <Grid item xs={7} sm={6}>




                                        

                                                <label>Placa</label>
                                                <div className="ko">
                                                <input type="text" id="id" />

                                        
                                                <button onClick={ConsultaPla}
                                                        className="button"

                                                >Consultar placa
                                                </button>

                                        </div>
                                        <div>

                                                <label >Marca:</label>
                                                <h6 id="Marca"></h6>

                                        </div>
                                        <div>

                                                <label >Color:</label>
                                                <h6 id="Color"></h6>

                                        </div>


                                </Grid>
                                <Grid item xs={7} sm={4}>


                                        <div>

                                                <label >Fecha:</label>
                                                <h6 id="fecha"></h6>

                                        </div>

                                        <div>

                                                <label >Modelo:</label>
                                                <h6 id="Modelo"></h6>

                                        </div>
                                </Grid>


                                <Grid item xs={6} sm={6}>
                                        <h4>Datos propietario</h4>

                                        <div>
                                                <label >Nombre:</label>
                                                <h6 id="nombre"></h6>


                                        </div>

                                        <div>
                                                <label >Celular:</label>
                                                <h6 id="celular"></h6>

                                        </div>

                                        <div>
                                                <label >Identificación:</label>
                                                <h6 id="identificacion"></h6>


                                        </div>

                                </Grid>



                                <Grid item xs={6} sm={6}>

                                        <br /><br />
                                        <div>
                                                <label >Dirección:</label>
                                                <h6 id="direccionP"></h6>

                                        </div>

                                </Grid>

                                <Grid item xs={6} sm={6}>
                                        <h4>Datos cliente</h4>

                                        <div>

                                                <label >Nombre:</label>
                                                <h6 id="nombreC"></h6>
                                        </div>
                                        <div>
                                                <label >Celular:</label>
                                                <h6 id="celularPropietario"></h6>

                                        </div>

                                </Grid>


                                <Grid item xs={6} sm={6}>


                                        <div>
                                                <br />
                                                <label >Identificación:</label>
                                                <h6 id="numeroIndentificacion"></h6>

                                        </div>
                                        <div>

                                                <label >Dirección:</label>
                                                <h6 id="direccionC"></h6>

                                        </div>

                                </Grid>
                                <Grid item xs={6} sm={6}>


                                        <div>

                                                <h4>Sugerencias de mantenimiento y o corrección</h4>

                                        </div>


                                        <form onSubmit={handleAddFormSumit}>

                                                <label>Cilindro</label>
                                                <input type="text" name="cilindro" onChange={handleAddFormChange} />
                                                <div>
                                                        <form>
                                                                <label>Vacio</label>
                                                                <input type="text" name="vacio" onChange={handleAddFormChange} />
                                                        </form>
                                                </div>

                                                <label>Valor</label>
                                                <input type="text" name="valor" onChange={handleAddFormChange} />
                                                <br />
                                                <button
                                                        type="submit"
                                                        className="button"

                                                >Agregar
                                                </button>

                                        </form>

                                </Grid>
                               

                                <Grid item xs={12} sm={12}>
                                <br/> <br/>
                                        <table class="table" >
                                                <thead>
                                                        <tr>
                                                                <th>Cilindro</th>
                                                                <th>Valor</th>
                                                                <th>Vacio</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {contacts.map((contacts) => (

                                                                <tr>
                                                                        <td>{contacts.cilindro}</td>
                                                                        <td>{contacts.vacio}</td>
                                                                        <td>{contacts.valor}</td>
                                                                </tr>


                                                        ))}


                                                </tbody>
                                        </table>


                                </Grid>












                                <Grid item xs={9} sm={4}>

                                        <form className="si" onSubmit={handleAddFormSumitP}>





                                                <label>Perdidas de fluidos</label>

                                                <select id="select" onChange={handleAddFormChangeP} className="select" name="perdidafluido" >
                                                        <option value="null"> selec.  </option>
                                                        <option value="Empaque tapa válvulas">Empaque tapa válvulas</option>
                                                        <option value="hidráulico dirección">hidráulico dirección</option>
                                                        <option value="radiador y o mangueras">radiador y o mangueras</option>
                                                        <option value="cartera motor y o caja">cartera motor y o caja</option>
                                                        <option value="retenes distribución">retenes distribución</option>
                                                        <option value="retenes cigüeñal">retenes cigüeñal</option>
                                                        <option value="tapa valvulas">Tapa valvulas</option>
                                                        <option value="tanque combustible">Tanque combustible</option>
                                                        <option value="sello caja de cambios">sello caja de cambios</option>
                                                        <option value="transmisiones y o transfer">transmisiones y o transfer</option>
                                                        <option value="compresor aire acondicionado">compresor aire acondicionado</option>

                                                </select>
                                                <br/>
                                                <button
                                                        type="submit"
                                                        className="button"
                                                >Agregar
                                                </button>
                                        </form>
                                </Grid>
                                <Grid item xs={3} sm={4}>
                                        

                                        <label >Revisar        </label>
                                        <select onChange={handleAddFormChangeP} className="select" name="revisar" >
                                                <option value="tj">  </option>
                                                <option value="si">si</option>
                                                <option value="no">no</option>


                                        </select>


                                </Grid>


                                <Grid item xs={12} sm={12}>
                                        <br /> <br/>
                                        <table class="table">
                                                <thead>


                                                        <tr>
                                                                <th>Perdida de Fluido</th>
                                                                <th>Revisar</th>
                                                        </tr>
                                                </thead>
                                                <tbody>

                                                        {contactsP.map((contactsP) => (

                                                                <tr>

                                                                        <td>{contactsP.perdidafluido}</td>
                                                                        <td>{contactsP.revisar}</td>
                                                                </tr>


                                                        ))}


                                                </tbody>

                                        </table>


                                </Grid>


                                <Grid item xs={12}> <label>Niveles de fluido</label></Grid>
                                <Grid item xs={6} sm={6}>

                                        <div >

                                                <label>Aceite motor</label>
                                                <select {...register("aceitemotor")}>
                                                        <option value="null"></option>
                                                        <option value="Aceptable">Normal</option>
                                                        <option value="Deficiente">Fuera de nivel</option>
                                                        <option value="Optimo">No aplica</option>
                                                </select>
                                                <label>Dirección hidráulica</label>
                                                <select {...register("direccionhidraulica")}>
                                                        <option value="null" ></option>
                                                        <option value="Aceptable">Normal</option>
                                                        <option value="Deficiente">Fuera de nivel</option>
                                                        <option value="Optimo">No aplica</option>
                                                </select>
                                                <label>Lava parabrisas</label>
                                                <select {...register("lavaparabrisas")}>
                                                        <option value="null"></option>
                                                        <option value="Aceptable">Normal</option>
                                                        <option value="Deficiente">Fuera de nivel</option>
                                                        <option value="Optimo">No aplica</option>
                                                </select>

                                        </div>




                                </Grid>
                                <Grid item xs={6} sm={6}>

                                        <div >

                                                <label>Liquido frenos</label>
                                                <select {...register("liquidofrenos")}>
                                                        <option value="null"></option>
                                                        <option value="Aceptable">Normal</option>
                                                        <option value="Deficiente">Fuera de nivel</option>
                                                        <option value="Optimo">No aplica</option>
                                                </select>
                                                <label>Embrague</label>
                                                <select {...register("embrague")}>
                                                        <option value="null"></option>
                                                        <option value="Aceptable">Normal</option>
                                                        <option value="Deficiente">Fuera de nivel</option>
                                                        <option value="Optimo">No aplica</option>
                                                </select>
                                                <label>Refrigerante</label>
                                                <select {...register("refigerante")}>
                                                        <option value="null"></option>
                                                        <option value="Aceptable">Normal</option>
                                                        <option value="Deficiente">Fuera de nivel</option>
                                                        <option value="Optimo">No aplica</option>
                                                </select>

                                        </div>




                                </Grid>



                                <Grid item xs={12}>


                                        <div>
                                                <label className="observaciones">Observaciones</label>
                                                <textarea className="Observaciones" {...register("Observaciones")} />
                                        </div>

                                </Grid>
                                <Grid item xs={12}>
                                        <div className="reB">
                                                <button type="submit" onClick={handleSubmit(onSubmit)}
                                                        className="buttonl"

                                                >Guardar
                                                </button>
                                        </div>


                                </Grid>


                        </Grid>
                </div>
        );



}

export default RevisionMotor;