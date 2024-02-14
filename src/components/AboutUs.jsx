import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>SativGarden</h5>
              <p className='card-text'>
                SativGarden es un Club Cannábico Medicinal y una Organización
                Sin Fines de Lucro, registrada legalmente en el Servicio de
                Registro Civil en Septiembre de 2010 y en el Servicio de
                Impuestos Internos. Obtuvimos nuestra legalización judicial por
                la Corte de Apelaciones de Santiago en Mayo de 2015 (R.I.T.
                xxx-xxxx, Poder Judicial de Chile). Dedicados a producir y
                distribuir Cannabis medicinal con altísimos estándares de
                calidad entre nuestros pacientes.
              </p>
              <Link to='/contacto'>
                <button>Más sobre nosotros</button>
              </Link>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'>
            {/* Contenido para la segunda sección */}
            <div className='card-body'>
              <h5 className='card-title'>
                Bienvenido a Nuestro Dispensario y Servicios
              </h5>
              <p className='card-text'>
                En Nuestro Dispensario, nos complace brindar acceso exclusivo a
                nuestra comunidad de miembros activos. Aquí, podrás explorar
                nuestra amplia gama de productos y realizar cómodamente tus
                pedidos en línea. Nos encontramos ubicados en la comuna de
                Providencia, ofreciendo también la conveniencia del servicio de
                despacho a domicilio en un plazo de 24 horas hábiles. Te
                invitamos a sumergirte en la experiencia de nuestro dispensario
                y descubrir productos de calidad que se adaptan a tus
                necesidades. ¡Únete a nuestra comunidad y disfruta de los
                beneficios de un cuidado cannábico excepcional!
              </p>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Requisitos para ser miembro:</h5>
              <p className='card-text'>
                <ul>
                  <li>Receta Médica Cannábica</li>
                  <li>Certificado de Antecedente</li>
                  <li>Cédula de Identidad (ambos lados)</li>

                  <li>Receta Médica Cannábica</li>
                </ul>
                <h5>Proceso de Inscripción:</h5>
                <ul>
                  <li>Reúne los documentos mencionados.</li>
                  <li>
                    Envía tus documentos por e-mail{" "}
                    <a href='mailto:contacto@sativgarden.cl'>
                      incripcion@sativgarden.cl
                    </a>
                  </li>
                </ul>

                <h5>Más Información:</h5>
                <ul>
                  <li>
                    Para obtener detalles adicionales o si tienes alguna
                    pregunta, no dudes en contactarnos por correo electrónico:
                  </li>
                  <li>
                    Correo Electrónico:{" "}
                    <a href='mailto:contacto@sativgarden.cl'>
                      contacto@sativgarden.cl
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
