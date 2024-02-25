/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// Card.jsx //Galeria de Card
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/context";

const Card = ({ producto }) => {
  const { setProducto, setCart } = useContext(Context);

  const renderEstrellas = () => {
    if (!producto) return null;

    const calificacion = parseInt(producto.rating, 10);

    const estrellas = [];
    for (let i = 1; i <= 5; i++) {
      // Cambia la clase 'filled' si la calificación es mayor o igual a i
      const claseEstrella = calificacion >= i ? "filled" : "";
      estrellas.push(
        <span key={i} className={`estrella ${claseEstrella}`}>
          ★
        </span>
      );
    }
    return estrellas;
  };

  const navigate = useNavigate();

  const handleDetail = (e) => {
    e.preventDefault();
    setProducto(producto);
    navigate(`/producto/${producto.id}`);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setCart((prevCart) => {
      const itemsFound = prevCart.find((item) => item.p_name === producto.p_name);
      if (itemsFound) {
        return prevCart.map((item) => {
          if (item.p_name === producto.p_name) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...prevCart,
          {
            p_img: producto.p_img,
            p_name: producto.p_name,
            p_precio: producto.p_descuento,
            qty: 1,
          },
        ];
      }
    });
  };

  return (
    <div className='card shadow d-flex'>
      <img src={producto.p_img} alt={producto.p_name} />
      <p id='subTitulo'>{producto.p_category}</p>
      <h2 className='card-title text-capitalize mt-3'>{producto.p_name}</h2>
      <div className='container-precio d-flex flex-column align-items-center'>
        <div className='precio d-flex justify-content-center align-items-center'>
          <p className='p_precioCard1'>
            Now{" "}
            {producto.p_descuento.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </p>
          <p className='p_precioCard2'>
            {producto.p_precio.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </p>
        </div>
        <div className='calificacion'>
          <p>
            ({producto.rating}){renderEstrellas()}
          </p>
        </div>
        <div className='d-flex justify-content-evenly w-100 mx-5'>
          <button className='btn btn-success' onClick={handleDetail}>
            <img
              src='/img/eyes-svgrepo-com.svg'
              alt=''
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            Ver más
          </button>
          <button className='btn btn-danger' onClick={handleAdd}>
            <img
              src='/img/cart-plus-svgrepo-com.svg'
              alt=''
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
