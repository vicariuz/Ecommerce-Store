// HomeAdmin.jsx
// En HomeAdmin.jsx o donde renderices las cartas para el administrador
//import productoData from "../assets/productos.json";
import CardAdmin from "../components/CardAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;

const HomeAdmin = () => {
  // Supongamos que allProducts es una prop o un estado que contiene la lista completa de productos
  //const allProductos = productoData; // Mostrar todas los productos directamente
  const [productos, setProductos] = useState([]);
  //const {user} = useContext(UserContext)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${VITE_APP_URL}/productos`);
      setProductos(response.data.productos);
    } catch (error) {
      console.error("Error al obtener los datos del backend:", error);
    }
  };

  return (
     <div className="container11"> 
          <div id="cartas-container" className='d-flex flex-wrap justify-content-center align-items-center p-3'>
            {productos.map((producto) => (
              <CardAdmin producto={producto} key={producto.id} />
            ))}
          </div>
    </div>
      
  );
};

export default HomeAdmin;
