/* eslint-disable react/no-unescaped-entities */
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          src='https://www.nationalgeographic.com.es/medio/2023/06/12/cultivo-interior-de-marihuana-para-uso-medicinal_1dfa859f_230612092439_1280x853.jpg'
          className='image'
          alt='...'
        />
        <Carousel.Caption>
          <h3 className='bg-dark text-light'>Nuestros Cultivos</h3>
          <p className='bg-dark text-light'>
            El cuidado adecuado de nuestros cultivos de marihuana es esencial
            para obtener flores de calidad. Ajustar la iluminación y nutrientes
            contribuye a un desarrollo óptimo, mientras que prestar atención a
            las propiedades organolépticas asegura una experiencia inolvidable
            al consumirlas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          src='https://media.gq.com.mx/photos/62fa8efcf84edeef239b62a6/16:9/w_1920,c_limit/tailandia%20cannabis-1242125231.jpg'
          className='image'
          alt='...'
        />

        <Carousel.Caption>
          <h3 className='bg-dark text-light'>Secado y Curado</h3>
          <p className='bg-dark text-light'>
            El secado y curado son pasos esenciales en el proceso de cultivo de
            marihuana. Después de cosechar, las flores se secan para controlar
            la humedad. Luego, el curado en contenedores herméticos mejora la
            calidad, textura, aroma y sabor, garantizando una experiencia de
            consumo inigualable.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='https://media.gq.com.mx/photos/627d6e159d9057c19561f76f/16:9/w_1920,c_limit/cannabis-1332336413.jpg'
          className='image'
          alt='...'
        />
        <Carousel.Caption>
          <h3 className='bg-dark text-light'>
            "Marihuana Medicinal: Beneficios Terapéuticos en Pocas Palabras"
          </h3>
          <p className='bg-dark text-light'>
            La marihuana medicinal, rica en cannabinoides como el THC y el CBD,
            ha demostrado propiedades analgésicas, antiinflamatorias y
            ansiolíticas. Su legalización en diversos lugares se ha centrado en
            ofrecer alivio para condiciones médicas como dolor crónico, náuseas
            y enfermedades neurológicas, brindando opciones terapéuticas
            prometedoras y complementarias.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
