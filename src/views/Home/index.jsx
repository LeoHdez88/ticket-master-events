import Image from 'react-bootstrap/Image';
import ImageOne from '../../utils/Carrusel/logo_Boletas_1.png';
import ImageTwo from '../../utils/Carrusel/logo_Boletas_2.png';
import Imagethree from '../../utils/Carrusel/logo_Boletas_3.png';

const Home = () => {
    return (
        <div className="card-group">
          <div className="card">
            <Image
                    alt="Logo"
                    src={ImageTwo}
                    className='card-img-top'
                    />
            <div className="card-body">
              <h5 className="card-title">Conciertos en Vivo</h5>
              <p className="card-text">Únete a nosotros para una noche inolvidable de música en vivo. Experimenta la energía de tus artistas favoritos y crea recuerdos que durarán toda la vida.</p>
              <p className="card-text"><small className="text-body-secondary">¡Asegura tu lugar ahora!</small></p>
            </div>
          </div>
          <div className="card">
            <Image
                      alt="Logo"
                      src={ImageOne}
                      className='card-img-top'
                      style={{marginTop:"50px"}}
                      />
            <div className="card-body">
              <h5 className="card-title">Bienvenidos</h5>
              <p className="card-text">Descubre una experiencia inolvidable con Boletas.ink, tu puerta de entrada al emocionante mundo de eventos en vivo.</p>
              <p className="card-text"><small className="text-body-secondary">Nuestra plataforma utiliza la potente API de Ticketmaster para ofrecerte acceso exclusivo a los mejores espectáculos, conciertos y eventos. ¡Explora, elige tus boletos y prepárate para vivir momentos memorables!</small></p>
            </div>
          </div>
          <div className="card">
            <Image
                  alt="Logo"
                  src={Imagethree}
                  className='card-img-top'
                  />
            <div className="card-body">
              <h5 className="card-title">Evento Especial</h5>
              <p className="card-text">Descubre emocionantes eventos para toda la familia. Desde conciertos y festivales hasta conferencias y actividades culturales, tenemos algo para todos los gustos.</p>
              <p className="card-text"><small className="text-body-secondary">¡Explora nuestro calendario de eventos y encuentra tu próxima experiencia inolvidable!</small></p>
            </div>
          </div>
      </div>
      );

};


export default Home;