import React, { useState } from 'react';
import './Form.css';
import EstructuraVehiculo from './EstructuraVehiculo';
import FormularioCarro from './FormularioCarro';
import LatoneriaVeh from './LatoneriaVeh';
import Pintura from './Pintura';
import Vidrio from './Vidrio';
import Inferior from './inferior';
import Interior from './Interior';
import Luces from './Luces';
import Fugas from './Fugas';
import Llantas from './Llantas';
import { Grid } from "@material-ui/core"
import { red } from '@material-ui/core/colors';
import { Label } from 'reactstrap';
function Form() {
   
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
            Placa:"",
            Nacionalidad:"",
            Kilometraje:"",
            Transmision:"",
            Fotolateralder:"",
            Clase:"",
            Tipodecaja:"",
            Color:"",
            Version:"",
            Fototrasera:"",
            Marca :"",
            Cilintraje:"",
            Nrochasis:"",
            SOAT:"",
            Tipo:"",
            Combustible:"",
            Nroserial:"",
            Tarjetadepropiedad:"",
            Carroceria:"",
            Tipodepintura:"", 
            Nromotor:"",
            Fotofrente:"",
            Modelo:"",
            Servicio:"",
            Traccion:"",
            Fotolateralizq:"",
            NombreCliente:"",
            Correo:"",
            Telefono:"",
            Observaciones:"",
            Extensióncapotaizq:"",
            Paralcentralderecho:"",
            Gpolvometálicoizq:"",
            Engrafescostadotraseros:"",
            Parallamas:"",
            Estriboizquierdo:"",
            Estriboderecho:"",
            Gpolvometálicoderecho:"",
            Engrafesfaidontraseros:"",
            Faición:"",
            Paralpanorámicoizq:"",
            Pisobaúlsuperior:"",
            Extensióncapotaderecha:"",
            Capota:"",
            Guardafangoizq:"",
            Paragolpestrasero:"",
            Paragolpesdelantero:"",
            Persiana:"",
            Puertadelanteraizq:"",
            Cabocubiertaparallantas:"",
            Puertadelanterader:"",
            Costadoderecho:"",
            Puertatraserader:"",
            Compuerta:"",
            Guardafangoderecho:"",
            Puertatraseraizquierda:"",
            Parallamas:"",
            Faición:"",
            Pintextensioncapotaizq:"",
            Pintestribodere:"",
            Pintparalcentralizq:"",
            Pintparagolpesdelan:"",
            Pintpuertadelanterader:"",
            Pintguardagolpestrasero:"",
            Pintextensioncapotader:"",
            Pintcubiertaparallama:"",
            Pintcapo:"",
            Pintparallamas:"",
            Pintguardafangoizquierdo:"",
            Pintcapota:"",
            Pintestriboizq:"",
            Pintpersiana:"",
            Pintparacentralder:"",
            Pintpuertatraseraderecha:"",
            Pintpuertatraseraizq:"",
            Pintpuertadelanteraizq:"",
            Pintcompuerta:"",
            Pintparalpanoramicoder:"",
            Pintcostadoizquierdo:"",
            Pintcostadoder:"",
            Pintguardafangoder:"",
            Lunetaretrovisorizquierdo:"",
            Vidriopuertadelanteraizq:"",
            Panoramicotrasero:"",
            Vidriopuertadelanterader:"",
            Lunetacostadoizquierdo:"",
            Vidriopuertatraserader:"",
            Lunetaretrovisorderecho:"",
            Retrovisorinterior:"",
            Lunetacostadoderecho:"",
            Panorámicodelantero:"",
            Vidriopuertatraseraizq:"",
            Almabompertrasero:"",
            Basetijeraizquierda:"",
            Extensiónpuntas:"",
            Barraestabilizadora:"",
            Puntadelanteraizq:"",
            Almabomperdelantero:"",
            Basetijeras:"",
            Cartercaja:"",
            Cartermotor:"",
            Exosto:"",
            Puntadelanteraderecha:"",
            Puntatraseraizq:"",
            Puntatraseraderecha:"",
            Pisobaul:"",
            Tanquedecombustible:"",
            Traviesadelantera:"",
            Traviesamedia:"",
            Traviesatrasera:"",
            Frontalsuperior:"",
            Vigaderecha:"",
            Vigaizq:"",
            Frontalinferior:"",
            Panel:"",
            Carterapuertadelanteraizq:"",
            Carterapuertatraserader:"",
            Cojineriadelanteraizq:"",
            Cojineriatrasera:"",
            Consolacentral:"",
            Carterapuertatraseraizq:"",
            Carterapuertadelanterader:"",
            Tapiceríapiso:"",
            Tapetesalfombras:"",
            Tablero:"",
            Tapiceríatecho:"",
            TableroInstrumentos:"",
            CojineriaDelanteraDerecha:"",
            Cocuyolateralizquierdo:"",
            Stopderecho:"",
            LuzTablero:"",
            Luztecho:"",
            Farolaizquierda:"",
            Faroladerecha:"",
            Radio:"",
            Otros:"",
            Stopizquierdo:"",
            Cocuyolateralderecho:"",
            Exploradoraizq:"",
            Panorámicodelantero:"",
            Vidriopuertatraseraizq:"",
            Exploradoraderecha:"",
            Enfreno:"",
            Encaja:"",
            Sistemadedirección:"",
            Enmotor:"",
            Entransmisión:"",
            Encombustible:"",
            Llantadelanteraderecha:"",
            Llantadelanteraizquierda:"",
            Llantatraseraderecha:"",
            Llantatraseraizquierda:"",

        
    })
    const FormTitles = ["", "", "", "", "", "", "", "", "", ""];
    
    const PageDisplay = () => {
        if (page === 0) {
            return <FormularioCarro formData={formData} setFormData={setFormData}/>
        } else if (page === 1) {
            return <EstructuraVehiculo formData={formData} setFormData={setFormData} />
        }
        else if (page === 2) {
            return <LatoneriaVeh formData={formData} setFormData={setFormData}/>
        } else if (page === 3) {
            return <Pintura formData={formData} setFormData={setFormData}/>
        }
        else if (page === 4) {
            return <Vidrio formData={formData} setFormData={setFormData}/>
        } else if (page === 5) {
            return <Inferior formData={formData} setFormData={setFormData}/>
        }
        else if (page === 6) {
            return <Interior formData={formData} setFormData={setFormData}/>
        }
        else if (page === 7) {
            return <Luces formData={formData} setFormData={setFormData}/>
        }
        else if (page === 8) {
            return <Fugas formData={formData} setFormData={setFormData}/>
        }
        else if (page === 9) {
            return <Llantas formData={formData} setFormData={setFormData}/>
        }
    }
    return (<div className='form' >
        <Grid container>





            <div className="progressbar">
                <div
                    style={{
                        width: page === 0 ? "10%" :
                            page === 1 ? "20%" :
                                page === 2 ? "30%" :
                                    page === 3 ? "40%" :
                                        page === 4 ? "50%" :
                                            page === 5 ? "60%" :
                                                page === 6 ? "70%" :
                                                    page === 7 ? "80%" :
                                                        page === 8 ? "90%" : "100%"
                    }}
                ></div>
            </div>

            <div className='form-container'>
                <br /><br />
                <div className='header'>
                    <h6>{FormTitles[page]}</h6>
                </div>
                <div className='body'>{PageDisplay()}</div>

                <br /><br />


                <div className="footer">

                    <Grid item xs={12} sm={12}>
                        <button className="button" disabled={page === 0}
                            onClick={() => { 
                                setPage((currPage) => currPage - 1); }}
                                >Atrás</button>

                        <button className="button" disabled>Guardar</button>
                        <button className="button" disabled>Actualizar</button>
                        <button className="button" id="siguiente"  
                            onClick={() =>{
                            if (page===FormTitles.length-1) 
                            { alert("Se guardo");
                            console.log(formData)
                             }else{
                                
                                setPage((currPage)=> currPage +1);
                             }
                            }}
                            
                            
                            >

                                {page ==FormTitles.length-1 ? "Guardar":"Siguiente"}</button>
                    </Grid>
                </div>

            </div>
        </Grid>
    </div>
    );

}
export default Form;