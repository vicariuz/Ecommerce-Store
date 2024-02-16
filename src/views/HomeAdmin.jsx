// En HomeAdmin.jsx o donde renderices las cartas para el administrador
import productoData from "../assets/products.json";
import CardAdmin from "../components/CardAdmin";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import userContext from "../context/userContext";
import { useContext } from "react";

const HomeAdmin = () => {
  // Supongamos que allProducts es una prop o un estado que contiene la lista completa de productos
  const allProductos = productoData; // Mostrar todas los productos directamente
  const {user} = useContext(userContext)

  return (
     <div className="container11"> {user && user.username}
       <button type="button" className="btn btn-secondary btn-lg">
            <Link to='/dashboard' className="link-button"> Volver a Dashboard</Link>
        </button>
          <div id="cartas-container" className='d-flex flex-wrap justify-content-center align-items-center p-3'>
            {allProductos.map((producto) => (
              <CardAdmin producto={producto} key={producto.id} />
            ))}
          </div>
    </div>
      
  );
};

export default HomeAdmin;
