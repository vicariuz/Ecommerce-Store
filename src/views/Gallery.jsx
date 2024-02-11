// import "./Home.css";
// import Card from "../components/Card";
// import pizzasData from "../assets/pizzas.json";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="d-flex flex-column align-items-center ">
//       <div className="welcome w-100">
//         <h1 className=" mt-4">Pizzeria Mamma Mia!!!</h1>
//         <h3 className=" p-3 mb-5  ">
//           ¡tenemos la mejores pizzas que podrás encontrar!
//         </h3>
//       </div>
//       <div className="container-galeria w-100">
//         {pizzasData.map((pizza) => (
//           <Card pizza={pizza} key={pizza.id} />
//         ))}
//       </div>
//       <Link to="/cart" className="nav-link active">
//         <button type="button" className="btn btn-danger mb-4">
//           <img
//             src="/img/cart-shopping-fast-svgrepo-com.svg"
//             alt=""
//             style={{ width: "30px", height: "30px", marginRight: "10px" }}
//           />{" "}
//           Carrito
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Home;
