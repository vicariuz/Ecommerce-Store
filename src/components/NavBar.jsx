import { NavLink, Link, useNavigate } from "react-router-dom";
import "../components/NavBar.css";
import { useContext } from "react";
import Context from "../context/context";
import userContext from "../context/userContext";

const NavBar = () => {
  const { user, setUser } = useContext(userContext);
  const { cart } = useContext(Context);
  const navigate = useNavigate();

  const localStorageUser = localStorage.getItem("usuarioAutenticado");
  const usuarioAutenticado = localStorageUser
    ? JSON.parse(localStorageUser)
    : null;

  const total = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  const handleLogout = () => {
    // Limpiar la información del usuario del localStorage
    localStorage.removeItem("usuarioAutenticado");
    setUser({});
    // Redirigir a la página de inicio u otra página después de cerrar sesión
    navigate("/");
  };

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='d-flex justify-content-between align-items-center w-100 m-3'>
        <div className='d-flex align-items-center'>
          <div className='logo me-3'>
            <Link to='/' className='nav-link active'>
              <img
                src='\img\hand-drawn-weed-cartoon-illustration_23-2150561424.svg'
                alt='logo'
                style={{
                  width: "70px",
                  height: "70px",
                }}
              />
            </Link>
          </div>
          <h3 className='text-success m-0'>Sativgarden</h3>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center'>
            <li className='nav-item d-flex m-2'>
              <Link to='/' className='nav-link active home-link'>
                Home
              </Link>
              <NavLink
                to='/gallery'
                className={`nav-link producto-link ${
                  user && localStorageUser ? "active" : "pending"
                }`}
              >
                Productos
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='d-flex align-items-center'>
          <div className='d-flex align-items-center ms-3'>
            {usuarioAutenticado && usuarioAutenticado.usuario ? (
              <>
                <h6 className='registrarse text-success mb-2 me-5'>
                  Hola, {usuarioAutenticado.usuario}
                </h6>
                {usuarioAutenticado.rol === "Administrador" && (
                  <Link to='/dashboard' className='btn btn-secondary mb-2 me-2'>
                    Volver al Dashboard
                  </Link>
                )}
                <Link
                  to='/'
                  className='btn btn-danger mb-2 me-2'
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </Link>
              </>
            ) : (
              <>
                <Link to='/login' className='btn btn-success mb-2 me-2'>
                  Iniciar Sesión
                </Link>
                <Link to='/register' className='btn btn-success mb-2 me-2'>
                  Registrarse
                </Link>
              </>
            )}
          </div>
          <div
            className='d-flex cart-icon mx-3'
            onClick={() => navigate("/cart")}
          >
            <img
              src='/img/cart-shopping-fast-svgrepo-com.svg'
              alt=''
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            <h4 className='m-0'>
              total :{" "}
              {total.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}{" "}
            </h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
