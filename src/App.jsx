import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Gallery from "./views/Gallery";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cart from "./views/Cart";
import NotFound from "./components/NotFound";
import Detail from "./views/Detail";
import Context from "./context/context";
import Login from "./views/Login"; // JP
import Register from "./views/Register"; // JP
import Crear from "./views/Crear"; // JP
import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({});
  const [cart, setCart] = useState([]);

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

  return (
    <Context.Provider
      value={{ pizza, setPizza, cart, setCart, renderEstrellas }}
    >
      <BrowserRouter>
        <div className='container-app d-flex flex-column align-space-center vh-100'>
          <NavBar />
          <Routes>
            {/* PUBLICO */}
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/pizza/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} /> {/* JP */}
            <Route path='/register' element={<Register />} /> {/* JP */}
            {/* PRIVADO */}
            <Route path='/crear' element={<Crear />} /> {/* JP */}
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
