const AboutUs = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <img
              src='imagen_dispensario.jpg'
              className='card-img-top w-100'
              alt='Dispensario Medicinal de Cannabis'
            />
            <div className='card-body'>
              <h5 className='card-title'>Nombre del Dispensario</h5>
              <p className='card-text'>
                Descripción del dispensario y servicios ofrecidos.
              </p>
              <a href='#' className='btn btn-primary'>
                Más información
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          {/* Agrega más tarjetas según sea necesario */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
