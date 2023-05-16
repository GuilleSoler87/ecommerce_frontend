import React from 'react';
import "./Contact.scss";
import Map from '../../assets/map.png';
import { WhatsAppOutlined, HomeOutlined, SendOutlined, PhoneOutlined } from '@ant-design/icons';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="map_container">
        <div className='container_dir'>
          <div>
            <img src={Map} alt="direccion" className="map_image" />
          </div>
          <div className='container_content'>
            <div className="info_container">
              <h2>HORARIO OFICINAS WEB</h2>
              <p>
                <b>Lunes a Viernes:</b> 9:00h a 19:00h.
              </p>
              <p><b>Teléfono y WhatsApp:</b> 666 111 000 <WhatsAppOutlined /></p>
              <p><b>Correo:</b> <SendOutlined /> info@animazon.com</p>
              <p>¡Importante! Comprueba que has escrito correctamente tu correo electrónico.</p>
              <p>
                Si no, nos será imposible contactar contigo y responder a tus dudas.
                <br />
                Si la contestación a tu correo electrónico se demora más de 48 horas laborables, por favor llámanos por teléfono o vuelve a enviar tu consulta, puede que no hayamos recibido correctamente tu correo electrónico.
              </p>
              <h3>TIENDAS FÍSICAS EN VALENCIA:</h3>
              <p>
                <p><b>Dirección:</b> <HomeOutlined /> Edificio Lanzadera, La Marina de, Carrer del Moll de la Duana, s/n, 46024 Valencia </p>
                <b>Lunes a Jueves:</b> 10:00 a 14:00 y de 16:00 a 20:30
                <br />
                <b>Viernes y Sábado:</b> 10:00 a 14:00 y de 16:00 a 21:00
              </p>
              <p><b>Teléfono tienda física:</b> 96 611 19 99 <PhoneOutlined /></p>
              <p><b>Whatsapp:</b> 600.111.000 <WhatsAppOutlined /></p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;

