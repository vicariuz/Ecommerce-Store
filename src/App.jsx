import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// login user
import ProtectedRoute from "./components/ProtectedRoute";
import userContext from "./context/userContext";
import Login from "./views/Login";

// crear usuario
import Register from "./views/Register";

// publico
import Home from "./views/Home";
import Gallery from "./views/Gallery";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cart from "./views/Cart";
import NotFound from "./components/NotFound";
import Detail from "./views/Detail";
import Contacto from "./views/Contacto";
import Context from "./context/context";

//privado
import Dashboard from "./views/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import Crear from "./views/Crear";
import HomeAdmin from "./views/HomeAdmin";
import EditDetail from "./views/EditDetail";

function App() {
  const [producto, setProducto] = useState({});
  const [cart, setCart] = useState([]);

  //------------------------------------- setuser
  const [user, setUser] = useState(null);

  //------------------------------------- galery
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

  return (
    <userContext.Provider value={{ user, setUser }}>
      <Context.Provider
        value={{ producto, setProducto, cart, setCart, renderEstrellas }}
      >
        <BrowserRouter>
          <div className='container-app d-flex flex-column align-space-center vh-100'>
            <NavBar />
            <Routes>
              {/* PUBLICO */}
              <Route path='/' element={<Home />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/producto/:id' element={<Detail />} />

              <Route path='/cart' element={<Cart />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              {/* PRIVADO */}
              <Route element={<ProtectedRoute></ProtectedRoute>}>
                <Route path='/galleryAdmin' element={<HomeAdmin />} />
                <Route path='/edit/:id' element={<EditDetail />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/crear' element={<Crear />} />
                <Route path='/adminDashboard' element={<AdminDashboard />} />
                <Route path='/homeAdmin' element={<HomeAdmin />} />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </Context.Provider>
    </userContext.Provider>
  );
}

export default App;
