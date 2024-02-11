import "./Home.css";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <div className='container-home d-flex 100-w     '>
      <Carousel />
      <AboutUs />
    </div>
  );
};

export default Home;
