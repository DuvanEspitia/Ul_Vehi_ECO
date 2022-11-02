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

    const FormTitles = ["", "", "", "", "", "", "", "", "", ""];

    const PageDisplay = () => {
        if (page === 0) {
            return <FormularioCarro />;
        } else if (page === 1) {
            return <EstructuraVehiculo />
        }
        else if (page === 2) {
            return <LatoneriaVeh />
        } else if (page === 3) {
            return <Pintura />
        }
        else if (page === 4) {
            return <Vidrio />
        } else if (page === 5) {
            return <Inferior />
        }
        else if (page === 6) {
            return <Interior />
        }
        else if (page === 7) {
            return <Luces />
        }
        else if (page === 8) {
            return <Fugas />
        }
        else if (page === 9) {
            return <Llantas />
        }
    }
    return (<div className='form' >
        <Grid container >





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

                <Grid item xs={12} sm={12}>
                    <div className="footer">


                        <button className="button" disabled={page === 0}
                            onClick={() => { setPage((currPage) => currPage - 1); }}>Atrás</button>

                        <button className="button" disabled>Guardar</button>
                        <button className="button" disabled>Actualizar</button>
                        <button className="button" disabled={page === 9}
                            onClick={() => { setPage((currPage) => currPage + 1); }}>Siguiente</button>

                    </div>
                </Grid>
            </div>
        </Grid>
    </div>
    );

}
export default Form;