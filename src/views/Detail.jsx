import { useContext } from "react";
import Context from "../context/context";
import "./Detail.css";
import { Link } from "react-router-dom";

export default function Detail() {
  const { pizza, setCart } = useContext(Context);

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
    <div className="container-detail d-flex flex-column">
      <div
        className="card-detail 
       d-flex align-items-center 
        "
      >
        <img src={pizza.img} alt={pizza.name} className="img-pizza me-5  " />

        <div className="">
          <h2 className=" text-capitalize mb-3 ">{pizza.name}</h2>
          <p className="pe-5">{pizza.desc}</p>
          <strong>
            <p>Ingredientes:</p>
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
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="text-primary ">
              {pizza.price.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
            </h3>
            <button onClick={handleAdd} className="btn btn-danger me-5">
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
      <Link to="/" className="nav-link active">
        <button type="button" className="btn btn-success mt-5">
          Atrás
        </button>
      </Link>
    </div>
  );
}
