import { useState } from 'react';
import "./Register.css";

const Register = () => {
    // Definir estados para los valores de los inputs
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [recetaMedica, setRecetaMedica] = useState(null);

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del usuario al servidor
        console.log('Datos del usuario:', { nombre, fechaNacimiento, email, direccion, recetaMedica });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                NOMBRE:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </label>
            <label>
                FECHA NACIMIENTO:
                <input type="text" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
            </label>
            <label>
                EMAIL:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                DIRECCIÓN:
                <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            </label>
            <label>
                RECETA MEDICA:
                <input type="file" accept=".pdf, .jpg, .jpeg, .png" onChange={(e) => setRecetaMedica(e.target.files[0])} />
            </label>
            <button type="submit">Registrar usuario</button>
        </form>
    );
};

export default Register;
