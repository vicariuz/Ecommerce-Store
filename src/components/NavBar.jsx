import { Link, useNavigate } from "react-router-dom";
import "../components/NavBar.css";
import { useContext } from "react";
import Context from "../context/context";
import UserContext from "../context/userContext";

const NavBar = () => {
  const { cart } = useContext(Context);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const total = cart.reduce((acc, curr) => {
    return acc + curr.p_precio * curr.qty; // Utiliza el precio y la cantidad del primer código
  }, 0);

  const handleLogout = () => {
    // Limpiar la información del usuario del localStorage
    localStorage.removeItem("nombre");
    localStorage.removeItem("rol");
    const total = total();
    setUser(null);
    // Redirigir a la página de inicio después de cerrar sesión
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

            </li>
          </ul>
        </div>
      
        <div className='d-flex align-items-center'>
          <div className='d-flex align-items-center ms-3'>
            {user ? (
              <> 
                <h6 className='registrarse text-success mb-2 me-5'>Hola, {user.nombre}</h6>
                {user.rol === "Administrador" && (
                  <Link to='/dashboard' className='btn btn-secondary mb-2 me-2'>
                    Volver al Dashboard
                  </Link>
                )}
                {user.rol === "Usuario" && (
                  <Link to='/gallery' className='btn btn-secondary mb-2 me-2'>
                    Ir a la Galería
                  </Link>
                )}
                <Link to='/' className='btn btn-danger mb-2 me-2' onClick={handleLogout}>
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
