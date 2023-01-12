import "./login.css";
import React, { useState} from "react";
import Global from "../Back-edn/Global";
import logo from "../Images/logo.jpg";
import { Navigate,Route,useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { red } from "@material-ui/core/colors";
function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const redirec=()=>{

     navigate('/home');
  }
  const handleSubmitt =async(e)=>{
    e.preventDefault();
    
            var url = Global.url;
            
    let user = document.getElementById("id").value;
    let pass = document.getElementById("pass").value;
    var inicio = "?user="+user+"&"+"pass="+pass;
    var requst = "/api/login/"+inicio;
           axios.get(url + requst).then((res )=> {
            
            if(!res.data[0]){
              Swal.fire({
                      title: 'Usuario no econtrado',
                      text: 'Los datos ingresados no son correctos',
                      icon: 'error',
                      confirmButtonText: 'OK'
                    })

              console.log("no")
      }else{
            redirec()


      }
 
                    
                   
    })

}

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div>
      
      
      
    
      <div className="containerimage"><img src={logo} className="icon" alt="user"></img></div>  
  
        <div className="form">
        
        <form onSubmit={handleSubmitt}>
         
          <div className="input-container">
            <label >Usuario </label>
            <input type="text" id="id" name="uname" className="textLog" required />
              {renderErrorMessage("uname")}
          </div>
            <div className="input-container">
            <label>Contraseña </label>
            <input type="password" id ="pass"name="pass"className="textLog" required />
            {renderErrorMessage("pass")}
          </div>
        <div className="button-container">
        
        <button type="submit" className="logi" id="log" >Entrar</button>
       
          
          

        </div>
         
      </form>
      </div>
   
   
    </div>
  );

  return (
    
    <div className="login">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div>
        : renderForm}
      </div>
     
      
    </div>
   
  );
}

export default Login;