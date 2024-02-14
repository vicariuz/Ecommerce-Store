import "./Home.css";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <div className='container-home d-flex flex-column w-100 align-items-center   '>
      <Carousel />
      <AboutUs />
    </div>
  );
};

export default Home;
