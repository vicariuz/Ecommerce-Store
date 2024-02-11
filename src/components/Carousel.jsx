import "./Carousel.css";
const Carousel = () => {
  return (
    <div className='carrusel carousel slide'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src='https://fastly.picsum.photos/id/1031/200/300.jpg?hmac=HVS-5o6kRugo6EcoZhPEsxm8Jnl7-J5tuEc20pN029c'
            className='d-block w-100'
            alt=''
          />
        </div>
        <div className='carousel-item'>
          <img src='...' className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src='...' className='d-block w-100' alt='...' />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExample'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExample'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default Carousel;
