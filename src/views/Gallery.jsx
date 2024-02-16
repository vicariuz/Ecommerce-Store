import { useState, useEffect } from "react";
import "./Gallery.css";
import Card from "../components/Card";
import productsData from "../assets/products.json";
import FilterMenu from "../components/FilterMenu";

const Gallery = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFilter, setPriceFilterState] = useState(100);
  const [ratingFilter, setRatingFilter] = useState(5);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    updateFilteredResults();
  }, [searchText, selectedCategory, priceFilter, ratingFilter]); // Dependencias actualizadas

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && searchText.trim() === "") {
      setFilteredProducts(productsData);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (price) => {
    console.log("Price Change:", price);
    setPriceFilter(price);
  };

  const setPriceFilter = (price) => {
    setPriceFilterState(price);
  };

  const handleRatingChange = (minRating) => {
    setRatingFilter(minRating);
  };

  const updateFilteredResults = () => {
    const results = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedCategory === "" ||
          product.category.toLowerCase() === selectedCategory.toLowerCase()) &&
        product.price <= priceFilter &&
        product.rating <= ratingFilter
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
          filteredProducts.map((producto) => <Card producto={producto} key={producto.id} />)
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
