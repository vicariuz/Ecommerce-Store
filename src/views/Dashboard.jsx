// Dashboard.jsx
import AdminDashboard from "../components/AdminDashboard";
import UserContext from "../context/userContext";
import { useContext } from "react";

const Dashboard = () => {
  const {user} = useContext(UserContext)

    return (
      <div className='container-home d-flex 100-w justify-content-center align-items-center '>
        {user && user.nombre}
        <AdminDashboard /> 
      </div>
    );
  };
  
  export default Dashboard;