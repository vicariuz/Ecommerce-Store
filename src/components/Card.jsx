/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/context";

const Card = ({ pizza }) => {
  const { setPizza, setCart } = useContext(Context);

  const renderEstrellas = () => {
    if (!pizza) return null;

    const calificacion = parseInt(pizza.rating, 10);

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
    setPizza(pizza);
    navigate(`/pizza/${pizza.id}`);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setCart((prevCart) => {
      const itemsFound = prevCart.find((item) => item.name === pizza.name);
      if (itemsFound) {
        return prevCart.map((item) => {
          if (item.name === pizza.name) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...prevCart,
          {
            img: pizza.img,
            name: pizza.name,
            price: pizza.discountprice,
            qty: 1,
          },
        ];
      }
    });
  };

  return (
    <div className='card shadow d-flex'>
      <img src={pizza.img} alt={pizza.name} />
      <p id='subTitulo'>{pizza.category}</p>
      <h2 className='card-title text-capitalize mt-3'>{pizza.name}</h2>
      <div className='container-precio d-flex flex-column align-items-center'>
        <div className='precio d-flex justify-content-center align-items-center'>
          <p className='priceCard1'>
            Now{" "}
            {pizza.discountprice.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </p>
          <p className='priceCard2'>
            {pizza.price.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </p>
        </div>
        <div className='calificacion'>
          <p>
            ({pizza.rating}){renderEstrellas()}
          </p>
        </div>
        <div className='d-flex justify-content-evenly w-100'>
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
