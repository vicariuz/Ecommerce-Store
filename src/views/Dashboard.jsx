import AdminDashboard from "../components/AdminDashboard";
import userContext from "../context/userContext";
import { useContext } from "react";

const Dashboard = () => {
  const {user} = useContext(userContext)

    return (
      <div className='container-home d-flex 100-w justify-content-center align-items-center '>
        {user && user.username}
        <AdminDashboard /> 
      </div>
    );
  };
  
  export default Dashboard;
  //