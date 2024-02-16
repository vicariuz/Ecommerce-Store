// En HomeAdmin.jsx o donde renderices las cartas para el administrador
import pizzasData from "../assets/pizzas.json";
import CardAdmin from "../components/CardAdmin";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeAdmin = () => {
  // Supongamos que allPizzas es una prop o un estado que contiene la lista completa de pizzas
  const allPizzas = pizzasData; // Mostrar todas las pizzas directamente

  return (
  
     <div className="container11">
       <button type="button" className="btn btn-secondary btn-lg">
    <Link to='/dashboard' className="link-button"> Volver a Dashboard</Link>
        </button>
    <div id="cartas-container" className='d-flex flex-wrap justify-content-center align-items-center p-3'>
            {allPizzas.map((pizza) => (
              <CardAdmin pizza={pizza} key={pizza.id} />
            ))}
          </div>
    </div>
      

  );
};

export default HomeAdmin;
