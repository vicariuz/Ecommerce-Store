// Register.jsx
import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { VITE_APP_URL } = import.meta.env;

const Register = () => {
  // Definir estados para los valores de los inputs y sus estados de validación
  const [nombre, setNombre] = useState({ value: "", valid: false });
  const [fechanacimiento, setFechanacimiento] = useState({
    value: "",
    valid: false,
  });
  const [email, setEmail] = useState({ value: "", valid: false });
  const [direccion, setDireccion] = useState({ value: "", valid: false });
  const [password, setPassword] = useState({ value: "", valid: false });
  const [, setFormValid] = useState(false);
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      nombre.valid,
      fechanacimiento.valid,
      email.valid,
      direccion.valid,
      password.valid
    );
    // Validar que todos los campos estén llenos
    if (
      !nombre.valid ||
      !fechanacimiento.valid ||
      !email.valid ||
      !direccion.valid ||
      !password.valid
    ) {
      return;
    }

    // Frontend - envío de datos para crear usuario
    try {
      const response = await axios.post(`${VITE_APP_URL}/usuarios`, {
        nombre: nombre.value,
        fechanacimiento: new Date(fechanacimiento.value)
          .toISOString()
          .split("T")[0],
        email: email.value,
        direccion: direccion.value,
        password: password.value,
        rol: "usuario", // Valor fijo para el rol
      });

      console.log("Usuario creado:", response.data);

      alert("Usuario creado exitosamente.");

      navigate("/login");

      setNombre({ value: "", valid: false });
      setFechanacimiento({ value: "", valid: false });
      setEmail({ value: "", valid: false });
      setDireccion({ value: "", valid: false });
      setPassword({ value: "", valid: false });
      setFormValid(false);
    } catch (error) {
      console.error("Error al crear usuario:", error);
      alert(
        "Ocurrió un error al crear el usuario. Por favor, intenta nuevamente."
      );
    }

    // Limpiar los campos después de enviar el formulario
    setNombre({ value: "", valid: false });
    setFechanacimiento({ value: "", valid: false });
    setEmail({ value: "", valid: false });
    setDireccion({ value: "", valid: false });
    setPassword({ value: "", valid: false });
    setFormValid(false);
  };

  // Funciones para validar los campos
  const validateNombre = (value) => {
    const regex = /^[a-zA-Z\s]+$/;
    const isValid = regex.test(value);
    console.log(isValid);
    setNombre({ value, valid: isValid });
  };

  const validateFechanacimiento = (value) => {
    console.log(value);
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    const isValid = regex.test(value);
    setFechanacimiento({ value, valid: isValid });
  };

  const validateEmail = (value) => {
    // Verificar el formato de correo electrónico
    const regex = /\S+@\S+\.\S+/;
    const isValid = regex.test(value);
    setEmail({ value, valid: isValid });
  };

  const validateDireccion = (value) => {
    const regex = /^[a-zA-Z0-9\s\-,]+$/;
    const isValid = regex.test(value);
    setDireccion({ value, valid: isValid });
  };

  const validatePassword = (value) => {
    const regex = /^[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{4,}$/;
    const isValid = regex.test(value);
    setPassword({ value, valid: isValid });
  };

  // Función para calcular la edad a partir de la fecha de nacimiento
  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const fechaNac = new Date(fecha);
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      return edad - 1;
    }
    return edad;
  };

  return (
    <div className='vh-100 p-4'>
      <form className='custom-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='form-group col'>
            <label htmlFor='nombre'>
              Nombre Completo:
              <input
                type='text'
                id='nombre'
                placeholder='Ingresar datos'
                value={nombre.value}
                onChange={(e) => validateNombre(e.target.value)}
              />
              {nombre.valid ? (
                <span className='validation-message'>✔</span>
              ) : (
                <span className='validation-message'></span>
              )}
            </label>
          </div>
          <div className='form-group col'>
            <label htmlFor='fechanacimiento'>
              Fecha de Nacimiento:
              <input
                type='date'
                id='fechanacimiento'
                placeholder='Ingresar datos'
                value={fechanacimiento.value}
                onChange={(e) => validateFechanacimiento(e.target.value)}
              />
              {fechanacimiento.valid ? (
                calcularEdad(fechanacimiento.value) >= 18 ? (
                  <span className='validation-message'>✔</span>
                ) : (
                  <span className='validation-message' style={{ color: "red" }}>
                    Debe ser mayor de 18 años
                  </span>
                )
              ) : (
                <span className='validation-message'></span>
              )}
            </label>
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group col'>
            <label htmlFor='email'>
              E-mail:
              <input
                type='email'
                id='email'
                placeholder='Ingresar datos'
                value={email.value}
                onChange={(e) => validateEmail(e.target.value)}
              />
              {email.valid ? (
                <span className='validation-message'>✔</span>
              ) : (
                <span className='validation-message'></span>
              )}
            </label>
          </div>
          <div className='form-group col'>
            <label htmlFor='direccion'>
              Dirección:
              <input
                type='text'
                id='direccion'
                placeholder='Ingresar datos'
                value={direccion.value}
                onChange={(e) => validateDireccion(e.target.value)}
              />
              {direccion.valid ? (
                <span className='validation-message'>✔</span>
              ) : (
                <span className='validation-message'></span>
              )}
            </label>
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group col'>
            <label htmlFor='password'>
              Contraseña:
              <input
                type='password'
                id='password'
                placeholder='Ingresar datos'
                value={password.value}
                onChange={(e) => validatePassword(e.target.value)}
              />
              {password.valid ? (
                <span className='validation-message'>✔</span>
              ) : (
                <span className='validation-message'></span>
              )}
            </label>
          </div>
        </div>

        <button
          className={`btn ${
            nombre.valid &&
            fechanacimiento.valid &&
            email.valid &&
            direccion.valid &&
            password.valid 
              ? "btn-primary"
              : "disabled"
          }`}
          type='submit'
          disabled={false}
        >
          Registrar usuario
        </button>
      </form>
    </div>
  );
};

export default Register;
