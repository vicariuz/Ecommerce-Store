/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./CardAdmin.css";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import Context from '../context/context';
import "bootstrap/dist/css/bootstrap.min.css";

const CardAdmin = ({ producto }) => {
  const { setProducto  } = useContext(Context);
  const navigate = useNavigate();

  const renderEstrellas = () => {
    if (!producto) return null; 

    const calificacion = parseInt(producto.p_rating, 10);
    

    const estrellas = [];
    for (let i = 1; i <= 5; i++) {
      // Cambia la clase 'filled' si la calificación es mayor o igual a i
      const claseEstrella = calificacion >= i ? 'filled' : '';
      estrellas.push(<span key={i} className={`estrella ${claseEstrella}`}>★</span>);
    }
    return estrellas;
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      // Truncar la descripción y agregar puntos suspensivos
      return `${description.slice(0, maxLength)}...`;
    }
  };

  const handleDetail = (e) => {
    e.preventDefault();
    setProducto(producto);
    navigate(`/producto/${producto.producto_id}`);
  };

  return (
    <div className="card shadow d-flex">
      <img src={producto.p_img} alt={producto.p_name} />
      <h1 className="card-title text-capitalize mt-3">Detalle General</h1>
      <div className="container-precio d-flex flex-column align-items-center">
        <div className="precio d-grid justify-content-center align-items-center">
        <ul>
          <li className="text-primary1">
            Nombre: {producto.p_name}
          </li>
          <li className="text-primary1">
            Categoria: {producto.p_category}
          </li>
          <li className="text-primary1">
            Descripción: {truncateDescription(producto.p_descripcion, 20)}
            </li>
            <li className="text-primary1">
            Feelings: {producto.p_feelings}
          </li>
          <li className="text-primary1">
            Negatives: {producto.p_negatives}
          </li>
          <li className="text-primary1">
            Helps with: {producto.p_helpwith}
          </li>
          <li className="text-primary1">
            Precio:{producto.p_precio.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </li>

          <li className="text-primary1">
            Rating: ({producto.p_rating}){renderEstrellas()}
          </li>

          <li className="text-primary1">
              Stock: {producto.p_stock} unidades
          </li>
          <li className="text-primary1">
            Rating: ({producto.p_rating}){renderEstrellas()}
          </li>

          </ul>
        </div>
        <div className="d-flex justify-content-evenly w-100">
          <button id="btnpubli" className="btn btn-success" onClick={handleDetail}>
            Ver mas
          </button>
          <Link to={`/edit/${producto.producto_id}`} className="nav-link active">
          <button type="button" className="btn btn-warning mb-4" style={{ display:"flex", width: "100px", height:"80px", justifyContent: "center", alignItems:"center" }}>
            <img
              src="/img/iconmonstr-pencil-square-lined.svg"
              alt=""
              style={{ width: "30px", height: "50px", marginRight: "5px" }}
            />{" "}
           Editar
          </button>
        </Link>
          <button id="btnpubli" className="btn btn-success">
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardAdmin;
