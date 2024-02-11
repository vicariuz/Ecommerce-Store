/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/context";
const Card = ({ pizza }) => {
  const { setPizza, setCart } = useContext(Context);

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
            price: pizza.price,
            qty: 1,
          },
        ];
      }
    });
  };

  return (
    <div className="card shadow d-flex">
      <img src={pizza.img} alt={pizza.name} />
      <h2 className="text-capitalize mt-3">{pizza.name}</h2>
      <strong>
        <p>Ingredientes :</p>
      </strong>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>
            <img
              src="/img/pizza-svgrepo-com.svg"
              alt="logo"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "10px",
              }}
            />
            {ingredient}
          </li>
        ))}
      </ul>

      <div className="container-precio d-flex flex-column align-items-center">
        <div className="precio d-flex justify-content-center align-items-center">
          <p className="text-primary">
            {pizza.price.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </p>
        </div>

        <div className="d-flex justify-content-evenly w-100">
          <button className="btn btn-success" onClick={handleDetail}>
            <img
              src="/img/eyes-svgrepo-com.svg"
              alt=""
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            Ver más
          </button>
          <button className="btn btn-danger" onClick={handleAdd}>
            <img
              src="/img/cart-plus-svgrepo-com.svg"
              alt=""
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
