import React, { useState } from 'react';
import Cilindro from "./Vehiculo.json";
import './Form.css';
import EstructuraVehiculo from './EstructuraVehiculo';
import FormularioCarro from './FormularioCarro';
import LatoneriaVeh from './LatoneriaVeh';
import Swal from 'sweetalert2';
import Vidrio from './Vidrio';
import Inferior from './inferior';
import Interior from './Interior';
import Luces from './Luces';
import Llantas from './Llantas';
import Registropersonas from './Registropersonas';
import { Grid } from "@material-ui/core"
import axios from 'axios';
import Global from '../Back-edn/Global';
const url = '/api/vehiculo/add';
const urlVeh = '/api/motor/add'

function Form() {

    const [page, setPage] = useState(0);
    let estado = false;
    let id_motor;
    const Crearmotor = async () => {


        try {

            const resp = await axios.post(Global.url + urlVeh, {


                "aceitemotor": "",
                "embrague": "",
                "liquidofrenos": "",
                "lavaparabrisas": "",
                "observaciones": "",
                "refigerante": "",
                "direccionhidraulica": "",





            });

            id_motor = resp.data.id;
            console.log(resp.data.id);
            console.log(id_motor);
            formData.id_motor.id = resp.data.id;
        }


        catch (error) {
            console.log(error);
            console.log(error.response);
        }

        handleAddFormSumit();

    };


    const [formData, setFormData] = useState({

        "id_cliente": {
            id: 0,

        },
        "id_motor": {
            id: 0,

        },


        CC_cliente: "",

        tipo_id: "",
        placa: "",
        nacionalidad: "",
        kilometraje: "",
        transmision: "",
        fotolateralder: "",
        clase: "",
        tipodecaja: "",
        color: "",
        version: "",
        fototrasera: "",
        fotoconsola: "",
        marca: "",
        cilindraje: "",
        nrochasis: "",
        sOAT: "",
        tipo: "",
        combustible: "",
        nroserial: "",
        tarjetadepropiedad: "",
        carroceria: "",
        tipodepintura: "",
        nromotor: "",
        fotofrente: "",
        modelo: "",
        servicio: "",
        traccion: "",
        fotolateralizq: "",





        gpolvometalicoizq: "",
        engrafescostadoderecho: "",

        estriboizquierdo: "",
        estriboderecho: "",
        gpolvometalicoderecho: "",
        engrafescostadoizquierdo: "",

        pisobaulsuperior: "",


        guardafangoizq: "",
        bompertrasero: "",
        bomperdelantero: "",
        persiana: "",
        puertadelanteraizq: "",
        retrovisorizquierdo: "",
        retrovisorderecho: "",
        puertadelanterader: "",
        costadoderecho: "",
        puertatraserader: "",
        compuerta: "",
        guardafangoderecho: "",
        puertatraseraizquierda: "",
        panelTrasero: "",
        pisobaul: "",
        capota: "",

        paraldelanteroizquierdo: "",
        paralcentralderecho: "",
        paralcentralizquierdo: "",
        paraltraseroderecho: "",
        paraltraseroizquierdo: "",







        sunroof: "",
        vidriodelanteroizquierdo: "",
        vidriodelanteroderecho: "",
        vidriotraseroizquierdo: "",
        vidriotraseroderecho: "",
        lunetaretrovisorizquierdo: "",
        panoramicotrasero: "",
        lunetaretrovisorderecho: "",
        retrovisorinterior: "",
        panorámicodelantero: "",



        porcentajeesctructura: "",
        porcentajeestadointerior: "",
        porcentajelatoneria: "",
        porcentajevidrios: "",
        porcentajedechasis: "",
        porcentajeestadoluces: "",
        basetijeraizquierda: "",
        extensionpuntadelantera: "",
        extensionpuntatrasera: "",
        barraestabilizadora: "",
        puntadelanteraizq: "",
        basetijeraderecha: "",
        cartercaja: "",
        cartermotor: "",
        exosto: "",
        puntadelanteraderecha: "",
        puntatraseraizq: "",
        puntatraseraderecha: "",
        tanquedecombustible: "",
        traviesadelantera: "",
        traviesamedia: "",
        traviesatrasera: "",
        frontalsuperior: "",
        vigaderecha: "",
        vigaizq: "",
        frontalinferior: "",
        panel: "",
        panoramicodelantero: "",


        carterapuertadelanteraizq: "",
        carterapuertatraserader: "",
        cojineriadelanteraizq: "",
        cojineriatrasera: "",
        cojineriaDelanteraDerecha: "",
        consolacentral: "",
        carterapuertatraseraizq: "",
        carterapuertadelanterader: "",
        tapiceriapiso: "",
        tapetesalfombras: "",
        parasolizquierdo: "",
        parasolderecho: "",
        barradecambios: "",
        timon: "",
        tablero: "",
        frenodemano: "",
        guantera: "",
        mandopuertadelanteraizqui: "",
        mandopuertadelanteradere: "",
        mandopuertatraseradere: "",
        mandopuertatraseraizqui: "",
        tapiceriatecho: "",
        tableroInstrumentos: "",



        luzdireccionaldelanteroder: "",
        luzdireccionaldelanteroizq: "",
        luzdireccionaltraseroder: "",
        luzdireccionaltraseroizq: "",
        pito: "",
        luzreversaderecha: "",
        luzreversaizquierda: "",
        cocuyolateralizquierdo: "",
        stopderecho: "",
        luzTablero: "",
        luztecho: "",
        farolaizquierda: "",
        faroladerecha: "",
        radio: "",
        otros: "",
        stopizquierdo: "",
        cocuyolateralderecho: "",
        exploradoraizq: "",
        exploradoraderecha: "",
        luzplaca: "",




        llantadelanteraderecha: "",
        llantadelanteraizquierda: "",
        llantatraseraderecha: "",
        llantatraseraizquierda: "",
        suspensiondelanteraizquierda: "",
        suspensiondelanteraderecha: "",
        suspensiontraseraizquierda: "",
        suspensiontraseraderecha: "",
        observaciones: "",
        estado: true,




    })



    const [contacts, setContacts] = useState(Cilindro);
    const ultimoElemento = [0];
    let id = Registropersonas.id;

    const handleAddFormSumit = async () => {

        await (12)

        try {

            const resp = await axios.post(Global.url + url, {

                "id_cliente": {
                    id: formData.id_cliente.id
                },
                "id_motor": {

                    id: formData.id_motor.id

                },


                tipo_id: formData.tipo_id,
                placa: formData.placa,
                nacionalidad: formData.nacionalidad,
                kilometraje: formData.kilometraje,
                transmision: formData.transmision,
                fotolateralder: formData.fotolateralder,
                clase: formData.clase,

                tipodecaja: formData.tipodecaja,
                color: formData.color,
                version: formData.version,
                fototrasera: formData.fototrasera,
                fotoconsola: formData.fotoconsola,
                marca: formData.marca,
                cilindraje: formData.cilindraje,
                nrochasis: formData.nrochasis,
                sOAT: formData.sOAT,
                tipo: formData.tipo,
                combustible: formData.combustible,
                nroserial: formData.nroserial,
                tarjetadepropiedad: formData.tarjetadepropiedad,
                carroceria: formData.carroceria,
                tipodepintura: formData.tipodepintura,
                nromotor: formData.nromotor,
                fotofrente: formData.fotofrente,
                modelo: formData.modelo,
                servicio: formData.servicio,
                traccion: formData.traccion,
                fotolateralizq: formData.fotolateralizq,





                gpolvometalicoizq: formData.gpolvometalicoizq,
                engrafescostadoderecho: formData.engrafescostadoderecho,

                estriboizquierdo: formData.estriboizquierdo,
                estriboderecho: formData.estriboderecho,
                gpolvometalicoderecho: formData.gpolvometalicoderecho,
                engrafescostadoizquierdo: formData.engrafescostadoizquierdo,

                pisobaulsuperior: formData.pisobaulsuperior,


                guardafangoizq: formData.guardafangoizq,
                bompertrasero: formData.bompertrasero,
                bomperdelantero: formData.bomperdelantero,
                persiana: formData.persiana,
                puertadelanteraizq: formData.puertadelanteraizq,
                retrovisorizquierdo: formData.retrovisorizquierdo,
                retrovisorderecho: formData.retrovisorderecho,
                puertadelanterader: formData.puertadelanterader,
                costadoderecho: formData.costadoderecho,
                puertatraserader: formData.puertatraserader,
                compuerta: formData.compuerta,
                guardafangoderecho: formData.guardafangoderecho,
                puertatraseraizquierda: formData.puertatraseraizquierda,
                panelTrasero: formData.panelTrasero,
                pisobaul: formData.pisobaul,
                capota: formData.capota,

                paraldelanteroizquierdo: formData.paraldelanteroizquierdo,
                paralcentralderecho: formData.paralcentralderecho,
                paralcentralizquierdo: formData.paralcentralizquierdo,
                sunroof: formData.sunroof,
                vidriodelanteroizquierdo: formData.vidriodelanteroizquierdo,
                vidriodelanteroderecho: formData.vidriodelanteroderecho,
                vidriotraseroizquierdo: formData.vidriotraseroizquierdo,
                vidriotraseroderecho: formData.vidriotraseroderecho,
                lunetaretrovisorizquierdo: formData.lunetaretrovisorizquierdo,
                panoramicotrasero: formData.panoramicotrasero,
                lunetaretrovisorderecho: formData.lunetaretrovisorderecho,
                retrovisorinterior: formData.retrovisorinterior,
                panoramicodelantero: formData.panoramicodelantero,

                //--------------------------------------------

                porcentajeesctructura: formData.porcentajeesctructura,
                porcentajeestadointerior: formData.porcentajeestadointerior,
                porcetajelatoneria: formData.porcentajelatoneria,
                porcentajevidrios: formData.porcentajevidrios,
                porcentajedechasis: formData.porcentajedechasis,
                porcentajeestadoluces: formData.porcentajeestadoluces,
                basetijeraizquierda: formData.basetijeraizquierda,
                extensionpuntadelantera: formData.extensionpuntadelantera,
                extensionpuntatrasera: formData.extensionpuntatrasera,
                //------------------------------
                barraestabilizadora: formData.barraestabilizadora,
                puntadelanteraizq: formData.puntadelanteraizq,
                basetijeraderecha: formData.basetijeraderecha,
                cartercaja: formData.cartercaja,
                cartermotor: formData.cartermotor,
                exosto: formData.exosto,
                puntadelanteraderecha: formData.puntadelanteraderecha,
                puntatraseraizq: formData.puntatraseraizq,
                puntatraseraderecha: formData.puntatraseraderecha,
                //<<<<<<<

                //-------------

                //aqui
                carterapuertadelanteraizq: formData.carterapuertadelanteraizq,
                carterapuertatraserader: formData.carterapuertatraserader,
                cojineriadelanteraizq: formData.cojineriadelanteraizq,
                cojineriatrasera: formData.cojineriatrasera,
                cojineriaDelanteraDerecha: formData.cojineriaDelanteraDerecha,
                consolacentral: formData.consolacentral,
                //<<<<
                carterapuertatraseraizq: formData.carterapuertatraseraizq,
                carterapuertadelanterader: formData.carterapuertadelanterader,
                tapiceriapiso: formData.tapiceriapiso,
                tapetesalfombras: formData.tapetesalfombras,
                parasolizquierdo: formData.parasolizquierdo,
                parasolderecho: formData.parasolderecho,
                barradecambios: formData.barradecambios,
                timon: formData.timon,
                tablero: formData.tablero,
                frenodemano: formData.frenodemano,
                guantera: formData.guantera,
                mandopuertadelanteraizqui: formData.mandopuertadelanteraizqui,
                mandopuertadelanteradere: formData.mandopuertadelanteradere,
                mandopuertatraseradere: formData.mandopuertatraseradere,
                mandopuertatraseraizqui: formData.mandopuertatraseraizqui,
                tapiceriatecho: formData.tapiceriapiso,
                tableroInstrumentos: formData.tableroInstrumentos,
                ///////////////////////

                //---
                luzdireccionaldelanteroder: formData.luzdireccionaldelanteroder,
                luzdireccionaldelanteroizq: formData.luzdireccionaldelanteroizq,
                luzdireccionaltraseroder: formData.luzdireccionaltraseroder,
                luzdireccionaltraseroizq: formData.luzdireccionaltraseroizq,
                pito: formData.pito,
                luzreversaderecha: formData.luzreversaderecha,
                luzreversaizquierda: formData.luzreversaizquierda,
                cocuyolateralizquierdo: formData.cocuyolateralizquierdo,
                stopderecho: formData.stopderecho,
                luzTablero: formData.luzTablero,
                luztecho: formData.luztecho,
                farolaizquierda: formData.farolaizquierda,
                faroladerecha: formData.faroladerecha,
                radio: formData.radio,
                otros: formData.otros,
                stopizquierdo: formData.stopizquierdo,
                cocuyolateralderecho: formData.cocuyolateralderecho,
                exploradoraizq: formData.exploradoraizq,
                exploradoraderecha: formData.exploradoraderecha,
                luzplaca: formData.luzplaca,




                llantadelanteraderecha: formData.llantadelanteraderecha,
                llantadelanteraizquierda: formData.llantadelanteraizquierda,
                llantatraseraderecha: formData.llantadelanteraderecha,
                llantatraseraizquierda: formData.llantatraseraizquierda,
                suspensiondelanteraizquierda: formData.suspensiondelanteraizquierda,
                suspensiondelanteraderecha: formData.suspensiondelanteraderecha,
                suspensiontraseraizquierda: formData.suspensiontraseraizquierda,
                suspensiontraseraderecha: formData.suspensiontraseraderecha,
                observaciones: formData.observaciones


            });

            console.log(resp.data);

        } catch (error) {
            console.log(error.response);
        }
        Swal.fire({
            title: '¡Genial!',
            text: 'Vehículo registrado',
            icon: 'success',
            confirmButtonText: 'OK'
        })


    };

    console.log(formData.estado)


    const FormTitles = ["", "", "", "", "", "", "", "", ""];

    const PageDisplay = () => {

        if (page === 0) {
            return <Registropersonas formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <FormularioCarro formData={formData} setFormData={setFormData} />
        }
        else if (page === 2) {
            return <EstructuraVehiculo formData={formData} setFormData={setFormData} />
        }
        else if (page === 3) {
            return <LatoneriaVeh formData={formData} setFormData={setFormData} />
        }/* else if (page === 4) {
            return <Pintura formData={formData} setFormData={setFormData}/>
        }*/
        else if (page === 4) {
            return <Vidrio formData={formData} setFormData={setFormData} />
        } else if (page === 5) {
            return <Inferior formData={formData} setFormData={setFormData} />
        }
        else if (page === 6) {
            return <Interior formData={formData} setFormData={setFormData} />
        }
        else if (page === 7) {
            return <Luces formData={formData} setFormData={setFormData} />
        }
        /*else if (page === 8) {
             return <Fugas formData={formData} setFormData={setFormData}/>
         }*/
        else if (page === 8) {
            return <Llantas formData={formData} setFormData={setFormData} />
        }
    }
    return (
        <div>








            <div className='form' >
                <Grid container>





                    <div className="progressbar">
                        <div
                            style={{
                                width:
                                    page === 0 ? "0%" :
                                        page === 1 ? "20%" :
                                            page === 2 ? "30%" :
                                                page === 3 ? "40%" :
                                                    page === 4 ? "50%" :
                                                        page === 5 ? "60%" :
                                                            page === 6 ? "70%" :
                                                                page === 7 ? "90%" : "100%"
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
                                        setPage((currPage) => currPage - 1);
                                    }}
                                >Atrás</button>



                                <button className="button" id="siguiente" disabled={formData.estado}

                                    onClick={() => {
                                        if (page === FormTitles.length - 1) {

                                            Crearmotor()
                                        }


                                        else {

                                            setPage((currPage) => currPage + 1);
                                        }
                                    }}>

                                    {page === FormTitles.length - 1 ? "Guardar" : "Siguiente"}



                                </button>
                            </Grid>
                        </div>

                    </div>
                </Grid>
            </div>
        </div>
    );

}
export default Form;