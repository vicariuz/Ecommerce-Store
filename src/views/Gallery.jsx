import { useState, useEffect } from "react";
import "./Gallery.css";
import Card from "../components/Card";
import pizzasData from "../assets/pizzas.json";
import FilterMenu from "../components/FilterMenu";

const Gallery = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFilter, setPriceFilterState] = useState(100);
  const [ratingFilter, setRatingFilter] = useState(5);
  const [filteredPizzas, setFilteredPizzas] = useState([]);


  useEffect(() => {
    updateFilteredResults();
  }, [searchText, selectedCategory, priceFilter, ratingFilter]); // Dependencias actualizadas

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && searchText.trim() === "") {
      setFilteredPizzas(pizzasData);
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
    const results = pizzasData.filter(
      (pizza) =>
        pizza.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedCategory === "" ||
          pizza.category.toLowerCase() === selectedCategory.toLowerCase()) &&
        pizza.price <= priceFilter &&
        pizza.rating <= ratingFilter
    );

    setFilteredPizzas(results);
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
      <div id="cartas-container" className='d-flex flex-wrap justify-content-center align-items-center p-3'>
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => <Card pizza={pizza} key={pizza.id} />)
        ) : (
          <p id="callback" className='text-light'>
            No se encontraron resultados para tu búsqueda
          </p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
