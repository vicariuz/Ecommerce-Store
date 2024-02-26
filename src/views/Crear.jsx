import { useState } from 'react';
import "./Crear.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { VITE_APP_URL } = import.meta.env;

const Crear = () => {
    // Definir los estados para los valores de los inputs
    const [p_name, setP_name] = useState('');
    const [p_descripcion, setP_descripcion] = useState('');
    const [p_precio, setP_precio] = useState('');
    const [p_descuento, setP_descuento] = useState('');
    const [p_stock, setP_stock] = useState('');
    const [p_category, setP_category] = useState('');
    const [p_feelings, setP_feelings] = useState('');
    const [p_negatives, setP_negatives] = useState('');
    const [p_helpwith, setP_helpwith] = useState('');
    const [p_rating, setP_rating] = useState('');
    const [p_img, setP_img] = useState('');
    const navigate = useNavigate();

// Función para manejar el envío del formulario
const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar que todos los campos estén completos
    if (!p_name || !p_descripcion || !p_precio || !p_descuento || !p_stock || !p_category || !p_feelings || !p_negatives || !p_helpwith || !p_rating || !p_img) {
        alert('Por favor complete todos los campos del formulario.');
        return;
    }

    // Enviar los datos al backend
    try {
        const response = await axios.post(`${VITE_APP_URL}/productos/nuevo`, {
            p_name,
            p_descripcion,
            p_precio,
            p_descuento,
            p_stock,
            p_category,
            p_feelings,
            p_negatives,
            p_helpwith,
            p_rating,
            p_img
        });

        if (response.data.nombre === p_name) {
            console.log('Producto creado exitosamente');
            // Redirigir a la página de dashboard
            navigate("/dashboard");
        } else {
            console.error('Error al crear el producto');
            // Manejar el error
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        // Manejar el error
    }
};

    return (
        <div className="form-crear">
                <form onSubmit={handleSubmit} >
                    <h2>Registrar Producto</h2>
                    <label>
                        Nombre :
                        <input type="text" value={p_name} onChange={(e) => setP_name(e.target.value)} />
                    </label>
                    <label>
                        Descripción:
                        <textarea type="text" value={p_descripcion} onChange={(e) => setP_descripcion(e.target.value)} />
                    </label>
                    <label>
                        Precio:
                        <input type="number" value={p_precio} onChange={(e) => setP_precio(e.target.value)} />
                    </label>
                    <label>
                        Precio con descuento:
                        <input type="number" value={p_descuento} onChange={(e) => setP_descuento(e.target.value)} />
                    </label>
                    <label>
                        Stock:
                        <input type="number" value={p_stock} onChange={(e) => setP_stock(e.target.value)} />
                    </label>
                    <label>
                        Categoría:
                        <input type="text" value={p_category} onChange={(e) => setP_category(e.target.value)} />
                    </label>
                    <label>
                        Como te hace sentir:
                        <input type="text" value={p_feelings} onChange={(e) => setP_feelings(e.target.value)} />
                    </label>
                    <label>
                        Efectos no deseados:
                        <input type="text" value={p_negatives} onChange={(e) => setP_negatives(e.target.value)} />
                    </label>
                    <label>
                        Beneficios para:
                        <input type="text" value={p_helpwith} onChange={(e) => setP_helpwith(e.target.value)} />
                    </label>
                    <label>
                        Rating:
                        <input type="number" value={p_rating} onChange={(e) => setP_rating(e.target.value)} />
                    </label>
                    <label>
                        Imagen (URL):
                        <input type="text" value={p_img} onChange={(e) => setP_img(e.target.value)} />
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