
import ImageOne from '../../utils/Carrusel/logo_Boletas_1.png';
import ImageTwo from '../../utils/Carrusel/logo_Boletas_2.png';
import Imagethree from '../../utils/Carrusel/logo_Boletas_3.png';
import Cards from '../../components/Card/Cards';


const Home = () => {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
          <Cards 
          images={ImageTwo}
          title="Conciertos en Vivo"
          textP="Únete a nosotros para una noche inolvidable de música en vivo. Experimenta la energía de tus artistas favoritos y crea recuerdos que durarán toda la vida."
          textS="¡Asegura tu lugar ahora!"
          />
          <Cards 
          images={ImageOne}
          title="Bienvenidos"
          textP="Descubre una experiencia inolvidable con Boletas.ink, tu puerta de entrada al emocionante mundo de eventos en vivo."
          textS="Nuestra plataforma utiliza la potente API de Ticketmaster para ofrecerte acceso exclusivo a los mejores espectáculos, conciertos y eventos. ¡Explora, elige tus boletos y prepárate para vivir momentos memorables!"
          />
          <Cards 
          images={Imagethree}
          title="Evento Especial"
          textP="Descubre emocionantes eventos para toda la familia. Desde conciertos y festivales hasta conferencias y actividades culturales, tenemos algo para todos los gustos."
          textS="¡Explora nuestro calendario de eventos y encuentra tu próxima experiencia inolvidable!"
          />
        {/* <div className="col">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
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
        </div>
        <div className="col">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <Image
                      alt="Logo"
                      src={ImageOne}
                      className='card-img-top'
                      style={{marginTop:"50px"}}
                      />
            <div className="card-body">
              <br/>
              <h5 className="card-title">Bienvenidos</h5>
              <p className="card-text">Descubre una experiencia inolvidable con Boletas.ink, tu puerta de entrada al emocionante mundo de eventos en vivo.</p>
              <p className="card-text"><small className="text-body-secondary">Nuestra plataforma utiliza la potente API de Ticketmaster para ofrecerte acceso exclusivo a los mejores espectáculos, conciertos y eventos. ¡Explora, elige tus boletos y prepárate para vivir momentos memorables!</small></p>
              <br/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
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
        </div> */}
      </div>
      );

};


export default Home;