//UpdateProduct.jsx
import "./UpdateProduct.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const { VITE_APP_URL } = import.meta.env;


const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productoData, setProductoData] = useState({
    p_name: "",
    p_descripcion: "",
    p_precio: 0,
    p_descuento: 0,
    p_stock: 0,
    p_category: "",
    p_feelings: "",
    p_negatives: "",
    p_helpwith: "",
    p_rating: 0,
    p_img: "",
  });


  const fetchData = async () => {
    try {
      const response = await axios.get(`${VITE_APP_URL}/productos/${id}`);
      const firstProduct = response.data.producto[0];
      setProductoData(firstProduct);  
      } catch (error) {
      console.error("Error al obtener los datos del backend:", error);
      }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
  
    try {
      const response = await axios.put(`${VITE_APP_URL}/productos/edit/${id}`, productoData);
      // Puedes hacer algo con la respuesta si es necesario
      console.log(response.data);
    
    // Alerta de éxito si la solicitud fue exitosa
    alert("Cambios guardados exitosamente.");
    navigate('/homeAdmin');
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };
  return (
    <div className="form-container">
      
      <form>
        <div className="formGroup">
        <h5>Editar Publicacion N° ID {id} </h5>
          <label>
            Nombre:
            <input
               type="text"
               name="p_name"
               value={productoData.p_name}
               onChange={handleChange}
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Descripcion:
            <input
              type="text"
              name="p_descripcion"
              value={productoData.p_descripcion}
               onChange={handleChange}
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            URL img:
            <input
              type="text"
              name="p_img"
              value={productoData.p_img}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Aspectos positivos:
            <input
              type="text"
              name="p_feelings"
              value={productoData.p_feelings}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Aspectos negativos:
            <input
              type="text"
              name="p_negatives"
              value={productoData.p_negatives}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
           Ayuda con:
            <input
              type="text"
              name="p_helpwith"
              value={productoData.p_helpwith}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Precio:
            <input
              type="number"
              name="p_precio"
              value={productoData.p_precio}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Precio descuento: 
            <input
              type="number"
              name="p_descuento"
              value={productoData.p_descuento}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Stock:
            <input
              type="number"
              name="p_stock"
              value={productoData.p_stock}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
           Rating:
            <input
              type="number"
              name="p_rating"
              value={productoData.p_rating}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="formGroup">
          <button type="button" onClick={handleSaveChanges}>
            Guardar cambios
          </button>
          <button id="btn2" type="button">
            <Link to='/dashboard' className="link-button">
              Volver a Dashboard 
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
