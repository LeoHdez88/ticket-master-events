
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
      </div>
      );

};


export default Home;