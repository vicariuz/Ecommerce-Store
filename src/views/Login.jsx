//login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
//import usuariosJSON from '../assets/usuarios.json'; // base de prueba para probar la funcionalidad de frontend
import { useContext } from 'react';
import UserContext from '../context/userContext';
import axios from "axios";

const { VITE_APP_URL } = import.meta.env;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser } = useContext(UserContext);
  //const [emailValid, setEmailValid] = useState(false);
  //const [passwordValid, setPasswordValid] = useState(false);

  // Estas funciones se utilizan para manejar los cambios en los campos de entrada del usuario y actualizar el estado correspondiente (email y password).
  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
    //setEmailValid(validateEmail(email)); 
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    //setPasswordValid(validatePassword(password));
  };

  //const validateEmail = (email) => {
  //  return /\S+@\S+\.\S+/.test(email);
  //};

  //const validatePassword = (password) => {
  //  return password.length >= 8;
  //};

// Esta función se llama cuando el formulario se envía. Primero, previene el comportamiento predeterminado del formulario usando event.preventDefault(). Luego, realiza validaciones en los campos de entrada y realiza la autenticación del usuario.
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validar si se ingresó un usuario y una contraseña
    if (email.trim() === "" || password.trim() === "") {
      alert("Por favor ingrese un usuario y una contraseña.");
      return;
    }
    
    // Validar longitud de la contraseña
    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    // Frontend - envio de credenciales al backend
    try {
      const response = await axios.post(`${VITE_APP_URL}/login`, {
        email,
        password,
      });

      const user = response.data; // Obtener el usuario de la respuesta
      
    // Buscar el usuario en el JSON
    //const user = usuariosJSON.find(
    //  (u) => u.usuario ===  email && u.password === password
    //);

    if (user) {
      localStorage.setItem("nombre", user.nombre);
      localStorage.setItem("rol", user.rol);setUser(user);
      navigate(user.rol === "administrador" ? "/dashboard" : "/");       
      } else {  // Credenciales incorrectas
      alert("Credenciales incorrectas. Por favor, verifique su usuario y contraseña.");
    }
  } catch (error) {
    // Manejar errores de la solicitud HTTP
    console.error('Error al realizar la solicitud:', error);
    alert('Ocurrió un error al iniciar sesión. Por favor, intenta nuevamente.');
  }
};

// para usar tickt de validacion en el form login
//{passwordValid ? <span className="validation-message">✔️</span> : null}
//{emailValid ? <span className="validation-message">✔️</span> : null}

  return (
    <div className='loginpage vh-100  p-5'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Usuario</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Ingrese su email'
            onChange={handleUsernameChange}
            value={email}
          />
          
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Password'
            onChange={handlePasswordChange}
            value={password}
          />
          
        </div>
        <button type='submit' className='btn btn-primary'> Entrar </button>
      </form>
    </div>
  );
};

export default Login;
