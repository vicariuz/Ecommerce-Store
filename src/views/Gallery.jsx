import React, { useState, useEffect } from 'react';
import "./Gallery.css";
import Card from "../components/Card";
import pizzasData from "../assets/pizzas.json";
import { Link } from "react-router-dom";
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
    const results = pizzasData.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedCategory === "" || pizza.category.toLowerCase() === selectedCategory.toLowerCase()) &&
      pizza.price <= priceFilter &&
      pizza.rating <= ratingFilter
    );

    setFilteredPizzas(results);
  };

  return (
    <div className="d-flex flex-column align-items-center ">
      <div className="welcome w-100">
        <div className="search-bar">
        <Link to="/cart" className="nav-link active">
          <button type="button" className="btn btn-danger mb-4" style={{ display:"flex", width: "120px" }}>
            <img
              src="/img/cart-shopping-fast-svgrepo-com.svg"
              alt=""
              style={{ width: "20px", height: "20px", marginRight: "20px" }}
            />{" "}
            Carrito
          </button>
        </Link>
          <div className="textHolde">
            <h3>Search:</h3>
            <input
              id="textoHolder"
              type="text"
              placeholder="Busca productos en nuestra tienda virtual"
              value={searchText}
              onChange={handleSearchChange}
              onKeyDown={handleEnterPress}
            />
            <button className="circleButton" type="button">
              <img
                src="/img/iconmonstr-magnifier-lined.svg"
                alt=""
                style={{ width: "30px", height: "30px" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="home-container">
        <div className="filters-bar">
          <FilterMenu 
            onSelectCategory={handleCategorySelect}
            onPriceChange={handlePriceChange}
            onRatingChange={handleRatingChange}
          />
        </div>
        <div className="container-galeria w-100">
          {filteredPizzas.length > 0 ? (
            filteredPizzas.map((pizza) => (
              <Card pizza={pizza} key={pizza.id} />
            ))
          ) : (
            <p id="responseBack">No se encontraron resultados para tu búsqueda</p>
          )}
        </div>
        <Link to="/cart" className="nav-link active">
          <button type="button" className="btn btn-danger mb-4">
            <img
              src="/img/cart-shopping-fast-svgrepo-com.svg"
              alt=""
              style={{ width: "10px", height: "10px", marginRight: "10px" }}
            />{" "}
            Carrito
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
