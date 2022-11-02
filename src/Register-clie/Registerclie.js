import React from 'react';
import './register.css';
import { useForm } from "react-hook-form";
import {Grid} from "@material-ui/core"
function Registerclie () {

         const {register,formState:{errors},handleSubmit}= useForm();

         const onSubmit = (data) =>{
                console.log(data);
        }
        
        return (
        
       
        
        <div>
                 <h2>Registro Cliente</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                       
                         <Grid item xs={12} sm={6}>
                <div>
                 <label id="izquierda">Tipo de indentificación</label>
                 <select {...register("Ciudad")}>
                 <option value="tj">Tarjeta de identidad</option>
                 <option value="cc">Cedula de ciudadanía</option>
                 <option value="tjx">Tarjeta de extranjeria</option>
                 <option value="cex">Cedula de extranjeria</option>
                 <option value="nit">NIT</option>
                 <option value="pap">Pasaporte</option>
                 </select>

                </div>
                <div>
                 <label id="izquierda">Lugar de expedición </label>
                 <input type="text"{...register("ccexpedicion")}/>

                </div>
                <div>
                 <label id="izquierda">Nombre completo</label>
                 <input type="text" {...register("nombre",{required:true,maxLength:25})}/>
                 {errors.nombre?.type=== "required"&&<p>El campo nombre es requerido</p>}
                </div>
                <div>
                 <label id="izquierda">Correo</label>
                 <input type="text"{...register("Correo")}/>

                </div>
               
                 </Grid>
                 <Grid item xs={12} sm={6}>
               

              

                <div>
                <label id="izquierda">Numero de identificación</label>
                <input type="text" {...register("nombre",{required:true,maxLength:25})}/>

                        {errors.nombre?.type=== "required"&&<p>El campo nombre es requerido</p>}
                        </div>
                        <div>
                        <label id="izquierda">Dirección</label>
                        <input type="text" {...register("direccion",{required:true})}/>

                        </div>
                        <div>
                        <label id="izquierda">Telefono</label>
                        <input type="text" {...register("telefono",{required:true})}/>

                        </div>
                        <div>
                        <label id="izquierda">Celular</label>
                        <input type="text" {...register("direccion",{required:true})}/>

                        </div>
                        <div>

                        </div>
                          
                        </Grid>                                 
                                
                        </Grid> 
                        </form>
                        <Grid item xs={12} sm={12}>
                        <div className="button-container">
                        <input type="submit" value="Guardar"/>
                        </div>
                        </Grid>
        </div>
                
        );
                 
   
}

export default Registerclie;