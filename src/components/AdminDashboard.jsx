import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDashboard.css";
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    return (
        <div className="dashboard">
            <form>
            <h4>Dasboard Administrador</h4>
              <b>Bienvenido Administrador explora diferentes opciones:</b>
            <button type="button" className="btn btn-secondary btn-lg">
            <Link to='/galleryadmin' className="link-button">   Galery y Editar Publicaciones </Link>
            </button>

            <button type="button" className="btn btn-secondary btn-lg">
            <Link to='/crear' className="link-button"> Crear Nueva Publicacion</Link>
            </button>

            <button type="button" className="btn btn-secondary btn-lg">
            <Link to='/' className="link-button"> Volver a menu inicio</Link>
            </button>
            </form>
        </div> 
      );
    };
    
    export default AdminDashboard;