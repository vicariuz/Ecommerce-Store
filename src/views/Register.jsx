import { useState } from "react";
import "./Register.css";

const Register = () => {
  // Definir estados para los valores de los inputs
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [role, setRole] = useState("");
  //   const [recetaMedica, setRecetaMedica] = useState(null);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };


  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del usuario al servidor
    console.log("Datos del usuario:", {
      nombre,
      fechaNacimiento,
      email,
      direccion,
    });
  };

  return (
    <div className='vh-100 p-4'>
      <form className='' onSubmit={handleSubmit}>
        <label>
          NOMBRE:
          <input
            type='text'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          FECHA NACIMIENTO:
          <input
            type='text'
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </label>
        <label>
          EMAIL:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          DIRECCIÓN:
          <input
            type='text'
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </label>
       <div className='form-group'>
      <label htmlFor='inputState'>Rol</label>
      <select
        id='inputState'
        className='form-select'
        onChange={handleRoleChange}
        value={role}
      >
        <option value="" disabled>Selecciona un rol</option>
        <option value="user">Usuario</option>
        <option value="admin">Administrador</option>
      </select>
    </div>
        <button type='submit'>Registrar usuario</button>
      </form>
    </div>
  );
};

export default Register;
