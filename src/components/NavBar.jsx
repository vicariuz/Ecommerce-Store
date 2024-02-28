import { Link, useLocation, useNavigate } from "react-router-dom";
import  { useContext, useEffect } from "react";
import Context from "../context/context";
import userContext from "../context/userContext";
import "./NavBar.css";

const NavBar = () => {
  const { cart,resetCart } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const currentPath = location.pathname;

  useEffect(() => {
    // Cargar información del usuario desde localStorage al estado del contexto
    const storedNombre = localStorage.getItem("nombre");
    const storedRol = localStorage.getItem("rol");
    const storedUsuarioId = localStorage.getItem("usuario_id");

    if (storedNombre && storedRol && storedUsuarioId) {
      setUser({ nombre: storedNombre, rol: storedRol, usuario_id: storedUsuarioId });
    }
  }, [setUser]);

  const total = cart.reduce((acc, curr) => {
    return acc + curr.p_precio * curr.qty; // Utiliza el precio y la cantidad del primer código
  }, 0);

  const handleLogout = () => {
    // Limpiar la información del usuario del localStorage
    localStorage.removeItem("nombre");
    localStorage.removeItem("rol");
    localStorage.setItem("usuario_id", user.usuario_id);
    setUser(null);

  // Reiniciar el carrito a cero (puedes ajustar esto según tu lógica)
    resetCart();

    // Redirigir a la página de inicio después de cerrar sesión
    navigate("/");
  };

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container- fluid d-flex justify-content-between align-items-center w-100 m-3'>
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
            <li className=''>
              {user ? (
                <>
                  {user.rol === "administrador" && (
                    <Link to='/dashboard' className='nav-link mb-2 me-2'>
                      Volver al Dashboard
                    </Link>
                  )}
                  {user.rol === "usuario" && (
                    <Link
                      to='/gallery'
                      className='nav-link active gallery-link'
                    >
                      Galería
                    </Link>
                  )}
                </>
              ) : null}
            </li>
          </ul>
        </div>

        <div className='d-flex align-items-center'>
          <div className='d-flex align-items-center ms-3'>
            {user ? (
              <>
                <h6 className='registrarse text-success mb-2 me-5'>
                  Hola, {user.nombre}
                </h6>

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
                {currentPath !== "/login" ? (
                  <Link to='/login' className='btn btn-success mb-2 me-2'>
                    Iniciar Sesión
                  </Link>
                ) : null}
                {currentPath !== "/register" ? (
                  <Link to='/register' className='btn btn-success mb-2 me-2'>
                    Registrarse
                  </Link>
                ) : null}
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
