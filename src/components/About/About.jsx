import React from 'react';
import Alejandro from "../../assets/AlejandroB.png";
import Laura from "../../assets/AndreaC.png";
import Andrea from "../../assets/LauraP.png";
import "./About.scss";
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div className="page_container">
      <div className="content_container">
        <div className="company_presentation_wrapper">
          <div className="company_presentation">
            <h2 className='title_about'>Bienvenidos a nuestra tienda online ANIMAZON</h2>
            <p>En nuestra tienda, nos apasiona el mundo del anime, el manga y todo lo relacionado con el arte y los dibujos japoneses. Nos hemos dedicado a reunir una amplia selección de productos auténticos y de alta calidad para que los fanáticos como tú puedan encontrar todo lo que desean en un solo lugar.</p>
            <p>Somos un equipo de tres personas fundadoras, cada una de ellas con su propia pasión por el anime y el manga. Juntos, hemos unido nuestras fuerzas y conocimientos para crear una experiencia de compra única para nuestros clientes. Nuestro objetivo es brindarte no solo productos excepcionales, sino también un servicio excepcional.</p>
            <p>Nos enorgullece ofrecerte una amplia variedad de artículos, desde figuras de colección y merchandising exclusivo hasta ropa, accesorios y mucho más. Trabajamos arduamente para mantenernos actualizados con las últimas tendencias y lanzamientos para que siempre encuentres algo emocionante y relevante en nuestra tienda.</p>
            <p>Además de nuestra pasión por el anime y el manga, nos esforzamos por proporcionar una experiencia de compra satisfactoria. Queremos que te sientas como en casa en nuestro sitio web y que disfrutes navegando por nuestros productos. Si tienes alguna pregunta o necesitas ayuda, nuestro equipo de atención al cliente estará encantado de asistirte en todo momento.</p>
            <p>En nuestra tienda, valoramos la comunidad de fanáticos del anime y el manga. Queremos crear un espacio en línea donde puedas conectarte con otros entusiastas, compartir tus experiencias y descubrir nuevas series y artistas. Estamos comprometidos en brindarte contenido adicional, como reseñas, recomendaciones y noticias, para mantenerte informado y entretenido.</p>
            <p>Gracias por visitar nuestra tienda online. Nos complace poder ofrecerte una amplia gama de productos que esperamos que te encanten tanto como a nosotros. Estamos emocionados de embarcarnos en este viaje contigo y esperamos poder servirte en todas tus necesidades relacionadas con el mundo del anime y el manga.</p>
            <p className='welcome_about'>¡Bienvenido a nuestra comunidad!</p>
          </div>
          <div className="team_images">
            <div className="person_image">
              <img src={Laura} alt="Person 1" />
              <h4 className='name_about'>Laura Plaza</h4>
              <p>Marketing y mercado</p>
            </div>
            <div className="person_image">
              <img src={Alejandro} alt="Person 2" />
              <h4 className='name_about'>Alejandro Bernalte</h4>
              <p>CEO fundador</p>
            </div>
            <div className="person_image">
              <img src={Andrea} alt="Person 3" />
              <h4 className='name_about'>Andrea Castellano</h4>
              <p>Relaciones internacionales</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default About;