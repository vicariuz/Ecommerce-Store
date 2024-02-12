import { useState } from "react";
import "./Login.css";

const Login = () => {
  // Definir estados para el nombre de usuario y la contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Manejar cambios en el campo de nombre de usuario
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Manejar cambios en el campo de contraseña
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Manejar envío del formulario de inicio de sesión
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar si se ingresó un usuario y una contraseña
    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor ingrese un usuario y una contraseña."); // Mostrar mensaje de error si faltan datos
      return;
    }

    // Validar longitud de la contraseña
    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres."); // Mostrar mensaje de error si la contraseña es corta
      return;
    }

    // Aquí puedes implementar la lógica de autenticación
    console.log("Usuario:", username, "Contraseña:", password); // Simulación de autenticación

    // Redirecciona a la página deseada dependiendo del estado de isLoggedIn
  };

  return (
    <div className='loginpage'>
      <h2>Iniciar sesión</h2>
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
            value={username}
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

        <button type='submit' className='btn btn-primary'>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
