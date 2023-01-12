import { useForm } from "react-hook-form";
import React from 'react';
import { Grid } from "@material-ui/core"
import './FormPagesVeh.css';
function FormularioCarro({ formData, setFormData }) {

  const { register, formState: { errors }, handleSubmit } = useForm();




  function Fotolateralder(event) {
    let files = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      console.log(reader.result)

      setFormData({ ...formData, fotolateralder: reader.result.split(',').pop() })
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  function Fototrasera(event) {
    let files = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      console.log(reader.result)

      setFormData({ ...formData, fototrasera: reader.result.split(',').pop() })
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };


  }

  function Fotoconsola(event) {
    let files = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      console.log(reader.result)

      setFormData({ ...formData, fotoconsola: reader.result.split(',').pop() })
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };




  }
  function Fotofrente(event) {
    let files = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      console.log(reader.result)

      setFormData({ ...formData, fotofrente: reader.result.split(',').pop() })
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };


  }
  function Fotolateralizq(event) {
    let files = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      console.log(reader.result)

      setFormData({ ...formData, fotolateralizq: reader.result.split(',').pop() })
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };


  }
  function SOAT(event) {
    let files = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      console.log(reader.result)

      setFormData({ ...formData, sOAT: reader.result.split(',').pop() })
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };


  }function TarjetadePropiedad(event) {
    let files = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      console.log(reader.result)

      setFormData({ ...formData, tarjetadepropiedad: reader.result.split(',').pop() })
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };


  }




  return (<div>

    <h2>Registro vehículo</h2>

    <Grid container direction="row" alignItems="flex-start" justifyContent="center">



      <Grid item xs={12} sm={4}>


        <div>
          <label>Placa</label>
          <input type="text"
            value={formData.placa} onChange={(event) => setFormData({ ...formData, placa: event.target.value })} />

        </div>
        <div>
          <label >Nacionalidad</label>
          <input type="text"
            value={formData.nacionalidad} onChange={(event) => setFormData({ ...formData, nacionalidad: event.target.value })}
          />


        </div>
        <div>
          <label >Kilometraje</label>
          <input type="number" value={formData.kilometraje} onChange={(event) => setFormData({ ...formData, kilometraje: event.target.value })} />


        </div>
        <div>
          <label >Transmisión</label>
          <input type="text" value={formData.transmision} onChange={(event) => setFormData({ ...formData, transmision: event.target.value })} />

        </div>




      </Grid>


      <Grid item xs={12} sm={4}>


        <div>
          <label >Clase</label>
          <input type="text" value={formData.clase} onChange={(event) => setFormData({ ...formData, clase: event.target.value })} />


        </div>
        <div>
          <label>Tipo de caja</label>
          <input type="text" value={formData.tipodecaja} onChange={(event) => setFormData({ ...formData, tipodecaja: event.target.value })} />


        </div>
        <div>
          <label >Color</label>
          <input type="text" value={formData.color} onChange={(event) => setFormData({ ...formData, color: event.target.value })} />

        </div>
        <div>
          <label >Versión</label>
          <input type="text" value={formData.version} onChange={(event) => setFormData({ ...formData, version: event.target.value })} />

        </div>



      </Grid>
      <Grid item xs={12} sm={4}>


        <div>
          <label >Marca</label>
          <input type="text" value={formData.marca} onChange={(event) => setFormData({ ...formData, marca: event.target.value })} />


        </div>
        <div>
          <label>Cilindraje</label>
          <input type="number" value={formData.cilindraje} onChange={(event) => setFormData({ ...formData, cilindraje: event.target.value })} />


        </div>
        <div>
          <label >#chasis</label>
          <input type="text" value={formData.nrochasis} onChange={(event) => setFormData({ ...formData, nrochasis: event.target.value })} />



        </div>
        <div>
          <label >Tracción</label>
          <input type="text" value={formData.traccion} onChange={(event) => setFormData({ ...formData, traccion: event.target.value })} />



        </div>


      </Grid>
      <Grid item xs={12} sm={4}>


        <div>
          <label >Tipo</label>
          <input type="text" value={formData.tipo} onChange={(event) => setFormData({ ...formData, tipo: event.target.value })} />


        </div>
        <div>
          <label>Combustible</label>
          <input type="text" value={formData.combustible} onChange={(event) => setFormData({ ...formData, combustible: event.target.value })} />


        </div>
        <div>
          <label >#Serial</label>
          <input type="text" value={formData.nroserial} onChange={(event) => setFormData({ ...formData, nroserial: event.target.value })} />



        </div>


      </Grid>
      <Grid item xs={12} sm={4}>


        <div>
          <label >Carrocería</label>
          <input type="text" value={formData.carroceria} onChange={(event) => setFormData({ ...formData, carroceria: event.target.value })} />


        </div>
        <div>
          <label>Tipo pintura</label>
          <input type="text" value={formData.tipodepintura} onChange={(event) => setFormData({ ...formData, tipodepintura: event.target.value })} />


        </div>
        <div>
          <label >#Motor</label>
          <input type="text" value={formData.nromotor} onChange={(event) => setFormData({ ...formData, nromotor: event.target.value })} />



        </div>


      </Grid>
      <Grid item xs={12} sm={4}>


        <div>
          <label >Modelo</label>
          <input type="text" value={formData.modelo} onChange={(event) => setFormData({ ...formData, modelo: event.target.value })} />


        </div>
        <div>
          <label>Servicio</label>
          <input type="text" value={formData.servicio} onChange={(event) => setFormData({ ...formData, servicio: event.target.value })} />


        </div>



      </Grid>

      <Grid item xs={12} sm={3}>
        <div>
          <label >Foto frente</label>
          <input type="file" class="form-control" accept="image/*" onChange={Fotofrente} />



        </div>
        <div>
          <label >Foto trasera</label>
          <input type="file" class="form-control" accept="image/*" onChange={Fototrasera} />



        </div>
        <div>
          <label >Foto consola</label>
          <input type="file" class="form-control" accept="image/*" onChange={Fotoconsola} />



        </div>


      </Grid>
      <Grid item xs={12} sm={3}>
        <div>
          <label >Foto lateral der.</label>
          <input type="file" class="form-control" accept="image/*" onChange={Fotolateralder} />



        </div>
        <div>
          <label >Foto lateral izq.</label>
          <input type="file" class="form-control" accept="image/*" onChange={Fotolateralizq} />



        </div>


      </Grid>
      <Grid item xs={12} sm={3}>

        <div>
          <label >Tarjeta propiedad</label>
          <input type="file" class="form-control" onChange={TarjetadePropiedad} />



        </div>
        <div>
          <label >SOAT</label>
          <input type="file" class="form-control" onChange={SOAT}/>



        </div>
      </Grid>



    </Grid>

  </div>
  );



}

export default FormularioCarro;