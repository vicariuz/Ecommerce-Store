// Gallery.jsx
import { useState, useEffect } from "react";
import "./Gallery.css";
import Card from "../components/Card";
//import productosData from "../assets/productos.json";
import FilterMenu from "../components/FilterMenu";
import userContext from "../context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;

const Gallery = () => {
  const { user } = useContext(userContext);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFilter, setPriceFilterState] = useState(100);
  const [ratingFilter, setRatingFilter] = useState(5); //limite 5
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productosData, setProductosData] = useState([]);

 // const handleLogin = (user);

  useEffect(() => {
    fetchData(); // Llama a la función para obtener los datos del backend
  }, []); // Dependencias actualizadas

  //const localStorageUser = localStorage.getItem("usuarioAutenticado");
  const navigate = useNavigate();

  useEffect(() => {
    updateFilteredResults();
  }, [searchText, selectedCategory, priceFilter, ratingFilter, productosData]); // Dependencias actualizadas

  useEffect(() => {
    checkLogin();
    fetchData();
  }, []);

  const fetchData = async () => {

    // Llamada al backend GET de lista total de productos
    try {
      const response = await axios.get(`${VITE_APP_URL}/productos`);
      setProductosData(response.data.productos);
    } catch (error) {
      console.error("Error al obtener los datos del backend:", error);
    }
  };

  const checkLogin = async () => {
    if (!user) navigate("/login");
    console.log("user", user);
  };

  // Filtros
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && searchText.trim() === "") {
      setFilteredProducts(productosData);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (p_precio) => {
    console.log("Price Change:", p_precio);
    setPrecioFilter(p_precio);
  };

  const setPrecioFilter = (p_precio) => {
    setPriceFilterState(p_precio);
  };

  const handleRatingChange = (minRating) => {
    setRatingFilter(minRating);
  };

  const updateFilteredResults = () => {
    const results = productosData.filter(
      (product) =>
        product.p_name.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedCategory === "" ||
          product.p_category.toLowerCase() === selectedCategory.toLowerCase()) &&
        product.p_precio <= parseFloat(priceFilter) &&
        product.p_rating <= ratingFilter
    );

    setFilteredProducts(results);
  };

  return (
    <div className='home-container d-flex '>
      <div className='side-bar '>
        <div className='search-bar'>
          <div className='d-flex '>
            <input
              id='textoHolder'
              type='text'
              placeholder='Busca tu producto'
              value={searchText}
              onChange={handleSearchChange}
              onKeyDown={handleEnterPress}
            />
          </div>
        </div>
        <FilterMenu
          onSelectCategory={handleCategorySelect}
          onPriceChange={handlePriceChange}
          onRatingChange={handleRatingChange}
        />
      </div>
      <div
        id='cartas-container'
        className='d-flex flex-wrap justify-content-center align-items-center p-3'
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((producto) => (
            <Card
            producto={producto} 
            key={producto.id} 
            user={user}/>
          ))
        ) : (
          <p id='callback' className='text-light'>
            No se encontraron resultados para tu búsqueda
          </p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
