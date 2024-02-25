import Context from "../context/context";
import { useContext } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { cart, setCart, setProducto } = useContext(Context);
  const navigate = useNavigate();

  const total = cart.reduce((acc, curr) => {
    return acc + curr.p_precio * curr.qty;
  }, 0);

  const handleReset = (e) => {
    e.preventDefault();
    setCart([]);
    setProducto({});
    navigate("/");
  };

  const handleAdd = (producto) => {
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
            p_precio: producto.p_precio,
            qty: 1,
          },
        ];
      }
    });
  };

  const handleRemove = (producto) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.p_name === producto.p_name) {
          if (item.qty > 1) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return null;
          }
        } else {
          return item;
        }
      });

      return updatedCart.filter((item) => item);
    });
  };

  return (
    <div className="container-cart bg-white ">
      <div>
        <h2 className="mt-5 mt-5 text-center text-uppercase font-weight-bold ">
          Detalles del pedido
        </h2>
      </div>
      {cart.length ? (
        cart.map((producto) => {
          return (
            <div className="sub-container-cart" key={producto.name}>
              <div className="image-container d-flex align-items-center ms-5">
                <img
                  src={producto.p_img}
                  alt={producto.p_name}
                  className="custom-image"
                />

                <h3 className="ms-5 text-capitalize">{producto.name}</h3>
              </div>
              <div className="d-flex align-items-center ">
                <div className="me-5 text-primary  ">
                  <h3>
                    {(producto.p_precio * producto.qty).toLocaleString("es-CL", {
                      style: "currency",
                      currency: "CLP",
                    })}
                  </h3>
                </div>
                <button
                  onClick={() => handleRemove(producto)}
                  className="red-button m-3"
                >
                  -
                </button>
                <div className="producto-quantity m-3">{producto.qty}</div>
                <button
                  onClick={() => handleAdd(producto)}
                  className="blue-button m-3 me-5"
                >
                  +
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div> Sin productos en el carro </div>
      )}

      <div className="container-precio mb-5  ">
        <p>
          total:
          {total.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
        </p>
      </div>
      <button onClick={handleReset} className="pagar-button mb-5">
        ir a pagar
      </button>
    </div>
  );
}
