import React from 'react';
import './register.css';
import { useForm } from "react-hook-form";
import {Grid} from "@material-ui/core"
function Registerclie () {

         const {register,formState:{errors},handleSubmit}= useForm();

         const onSubmit = (data) =>{
               window.alert("Se Registro Cliente")
                console.log(data);
        }
        
        return (
        
       
        
        <div>
                 <h2>Registro Cliente</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                       
                         <Grid item xs={6} sm={6}>
                <div className="spacing">
                 <label >Tipo de indentificación</label>
                 <select {...register("TipoIdentificacion")}>
                 <option value="TJ">Tarjeta de identidad</option>
                 <option value="CC">Cedula de ciudadanía</option>
                 <option value="TJX">Tarjeta de extranjeria</option>
                 <option value="CCE">Cedula de extranjeria</option>
                 <option value="NIT">NIT</option>
                 <option value="PASP">Pasaporte</option>
                 </select>

                
                 <label >Lugar de expedición </label>
                 <input type="text"{...register("Lugarexpedición")}/>
                 {errors.nombre?.type=== "required"&&<p id='validacionRe'>Obligatorio</p>}
              
                 <label >Nombre completo</label>
                 <input type="text" {...register("nombre",{required:true,maxLength:25})}/>
                 {errors.nombre?.type=== "required"&&<p id='validacionRe'>Obligatorio</p>}
                
                 <label >Correo</label>
                 <input type="text"{...register("Correo")}/>
                 {errors.nombre?.type=== "required"&&<p id='validacionRe'>Obligatorio</p>}
                </div>
               
                 </Grid>
                 <Grid item xs={6} sm={6}>
               

              

                <div className="spacing">
                <label>Numero de identificación</label>
                <input type="text" {...register("NroID",{required:true,maxLength:25})}/>

                        {errors.nombre?.type=== "required"&&<p id='validacionRe'>Obligatorio</p>}
                      
                        <label >Dirección</label>
                        <input type="text" {...register("direccion",{required:true})}/>
                        {errors.nombre?.type=== "required"&&<p id='validacionRe'>Obligatorio</p>}
                       
                        <label >Telefono</label>
                        <input type="text" {...register("telefono",{required:true})}/>
                        {errors.nombre?.type=== "required"&&<p id='validacionRe'>Obligatorio</p>}
                      
                        <label >Celular</label>
                        <input type="text" {...register("Celular",{required:true})}/>
                        {errors.nombre?.type=== "required"&&<p id='validacionRe'>Obligatorio</p>}
                       
                        </div>
                          
                        </Grid>                                 
                                
                        
                        <Grid item xs={12} sm={12}>
                        <div className="button-container">
                        <input type="submit" id="regis-cli" value="Guardar"/>
                        </div>
                        </Grid>
                        </Grid> 
                        </form>
        </div>
                
        );
                 
   
}

export default Registerclie;