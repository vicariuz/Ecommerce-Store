import { Link, useNavigate } from "react-router-dom";
import "../components/NavBar.css";
import { useContext } from "react";
import Context from "../context/context";

const NavBar = () => {
  const { cart } = useContext(Context);
  const navigate = useNavigate();

  const total = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid '>
        <div className='logo'>
          <Link to='/' className='nav-link active'>
            <img
              src='\img\hand-drawn-weed-cartoon-illustration_23-2150561424.svg'
              alt='logo'
              style={{
                width: "70px",
                height: "70px",
                marginRight: "10px",
              }}
            />
          </Link>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a
                className='nav-link active text-success'
                aria-current='page'
                href=' '
              >
                <h3>Sativgarden</h3>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href=''>
                Home
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Market
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className='d-flex register '>
            <Link to='/login' className=' iniciar text-success me-3'>
              Iniciar Sesión
            </Link>
            <Link to='/register' className='registrarse text-success'>
              Registrarse
            </Link>
          </div>
          <div className='d-flex cart-icon ' onClick={() => navigate("/cart")}>
            <img
              src='/img/cart-shopping-fast-svgrepo-com.svg'
              alt=''
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            <h4>
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

// return (
//   <nav className='navbar bg-white px-5 py-3 d-flex justify-content-between navbar-expand-lg navbar-light bg-light'>
//     {" "}
//     <div className='d-flex align-items-center '>
//       <div className='logo'>
//         <Link to='/' className='nav-link active'>
//           <img
//             src='\img\hand-drawn-weed-cartoon-illustration_23-2150561424.svg'
//             alt='logo'
//             style={{
//               width: "70px",
//               height: "70px",
//               marginRight: "10px",
//             }}
//           />
//         </Link>
//       </div>
//       <div className='tituloNav'>
//         <h3 className='text-success font-weight-bold ms-3 custom-h3 '>
//           {" "}
//           Sativgarden
//         </h3>
//       </div>
//     </div>
//     <div className=' text-success d-flex align-items-center cursor-pointer me-3'>
//       <div className='d-flex flex-column register'>
//         <Link to='/login' className='text-success me-3'>
//           Iniciar Sesión
//         </Link>
//         <Link to='/register' className='text-success'>
//           Registrarse
//         </Link>
//       </div>
//       <div className='d-flex cart-icon ' onClick={() => navigate("/cart")}>
//         <img
//           src='/img/cart-shopping-fast-svgrepo-com.svg'
//           alt=''
//           style={{ width: "30px", height: "30px", marginRight: "10px" }}
//         />
//         <h4>
//           total :{" "}
//           {total.toLocaleString("es-CL", {
//             style: "currency",
//             currency: "CLP",
//           })}{" "}
//         </h4>
//       </div>
//     </div>
//   </nav>
// );
// };

// export default NavBar;
