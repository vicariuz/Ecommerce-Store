import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchBar = () => {
  return (
    <div className='container-principal w-100'>
      <div className='search-bar'>
        <Link to='/cart' className='nav-link active'>
          <button
            type='button'
            className='btn btn-danger mb-4'
            style={{ display: "flex", width: "120px" }}
          >
            <img
              src='/img/cart-shopping-fast-svgrepo-com.svg'
              alt=''
              style={{ width: "20px", height: "20px", marginRight: "20px" }}
            />{" "}
            Carrito
          </button>
        </Link>
        <div className='textHolde'>
          <h3>Search:</h3>
          <input
            id='textoHolder'
            type='text'
            placeholder='Busca productos en nuestra tienda virtual'
            value={searchText}
            onChange={handleSearchChange}
            onKeyDown={handleEnterPress}
          />
          <button className='circleButton' type='button'>
            <img
              src='/img/iconmonstr-magnifier-lined.svg'
              alt=''
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
