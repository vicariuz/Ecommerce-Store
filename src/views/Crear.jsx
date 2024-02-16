import { useState } from 'react';
import "./Crear.css";
import { Link } from 'react-router-dom';

const Crear = () => {
    // Definir los estados para los valores de los inputs
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // lógica para enviar los datos del producto al servidor
        console.log('Datos del producto:', { nombre, descripcion, precio, stock, categoria, imagen });
    };

    return (
        <div >
                <form onSubmit={handleSubmit} >
                    <h2>Registrar Producto</h2>
                    <label>
                        Nombre del producto:
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </label>
                    <label>
                        Descripción:
                        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </label>
                    <label>
                        Precio:
                        <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                    </label>
                    <label>
                        Stock:
                        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
                    </label>
                    <label>
                        Categoría:
                        <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                    </label>
                    <label>
                        Imagen (URL):
                        <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
                    </label>
                    <button type="submit">Registrar producto</button>
                    <Link to="/dashboard">
                    <button id="btn1" type="submit">Volver a Dashboard </button>
                    </Link>
                </form>
        </div>
    );
};

export default Crear;