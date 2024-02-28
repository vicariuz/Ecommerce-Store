import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import userContext from '../context/userContext';
import axios from "axios";

const { VITE_APP_URL } = import.meta.env;

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const storedNombre = localStorage.getItem("nombre");
    const storedRol = localStorage.getItem("rol");

    if (storedNombre && storedRol) {
      setUser({ nombre: storedNombre, rol: storedRol });
      navigate(storedRol === "administrador" ? "/dashboard" : "/");
    }
  }, [setUser, navigate]);

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Por favor ingrese un usuario y una contraseña.");
      return;
    }

    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    try {
      const response = await axios.post(`${VITE_APP_URL}/login`, {
        email,
        password,
      });

      const user = response.data;
      console.log('user que es', user)

      if (user) {
        localStorage.setItem("nombre", user.nombre);
        localStorage.setItem("usuario_id", user.usuario_id);
        localStorage.setItem("rol", user.rol);
        setUser(user);
        navigate(user.rol === "administrador" ? "/dashboard" : "/");
      } else {
        alert("Credenciales incorrectas. Por favor, verifique su usuario y contraseña.");
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      alert('Ocurrió un error al iniciar sesión. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className='loginpage vh-100 p-5'>
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
          <div className='password-input'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
              onChange={handlePasswordChange}
              value={password}
            />
            <div className='form-group form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='showPasswordCheckbox'
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label className='form-check-label' htmlFor='showPasswordCheckbox'>
                Mostrar contraseña
              </label>
            </div>
            <div className="createAccount">
              <label htmlFor="createAccount">
                <Link to='/register' style={{ textDecoration: 'none', color: 'inherit' }} >
                  <h6>Crea una cuenta</h6>
                </Link>
              </label>
            </div>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'> Entrar </button>
      </form>
    </div>
  );
};

export default Login;
