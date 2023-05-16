import React from 'react';
import ImageCarousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import "./Home.scss";
import Descuentos from "../../assets/descuentos.png";
import Devoluciones from "../../assets/devoluciones.png";
import Envios from "../../assets/envios.png";
import Gourmet from "../../assets/gourmet.png";
import Puntos from "../../assets/puntos.png";
import Regalos from "../../assets/regalos.png";

const Home = () => {
  return (
    <div className='first_home'>
      <div className='main_home_cont'>
        <div className='home_container'>
          <span className='white_point'>.</span>
          <div className="carousel_home">
            <ImageCarousel />
          </div>
        </div>
      </div>
      <div className="beneficts_home">

        <div className='blocks_container_home'>
          <div className='image_container_home'>
            <img src={Envios} alt="envios" />
          </div>
          <div>
            <div className='text_container_home'>
              <div className='block_text'>
                <h2>ENVÍOS GRATIS</h2>
                <p>Olvídate de los gastos de envío, da el salto a Socio Animazon y tendrás envíos gratis durante 365 días en todas tus compras.</p>
                <p>Sin ser socio, para compras superiores a <b>50€</b>.</p>
                <p> Ventaja disponible para España peninsular.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='blocks_container_home2'>
          <div className='block_text2'>
            <div className='text_container_home2'>
              <h2>REGALO EN TUS PEDIDOS</h2>
              <p>En cada pedido, elige y regálate un capricho, ¡Corre de nuestra cuenta!</p>
            </div>
          </div>
          <div className='image_container_home2'>
            <img src={Regalos} alt="regalos" />
          </div>
        </div>

        <div className='blocks_container_home'>
          <div className='image_container_home'>
            <img src={Descuentos} alt="descuentos" />
          </div>
          <div className='text_container_home'>
            <div className='block_text'>
              <h2>OFERTAS Y DESCUENTOS MENSUALES</h2>
              <p>Todos los meses hay ofertas poderosas e irresistibles para socios de ANIMAZON en figuras y merchandising.</p>
            </div>
          </div>
        </div>

        <div className='blocks_container_home2'>
          <div className='text_container_home2'>
            <div className='block_text2'>
              <h2>DESCUENTO DEL 10% EN NUESTRA SECCIÓN GOURMET</h2>
              <p>Hazte con nuestros productos de alimentación GOURMET con un 10% de descuento permanente para soci@s. Bebidas, dulces y snacks de Japón y Korea para que tomar un tiento no sea nada aburrido. ¡¿A qué esperas para darte un capricho?!</p>
            </div>
          </div>
          <div className='image_container_home3'>
            <img src={Gourmet} alt="gourmet" />
          </div>
        </div>

        <div className='blocks_container_home'>
          <div className='image_container_home4'>
            <img src={Puntos} alt="puntos" />
          </div>
          <div className='block_text'>
            <div className='text_container_home4'>
              <h2>MULTIPLICA TUS PUNTOS X3</h2>
              <p>En cada compra se multiplicarán x3 los puntos que obtengas. Acumula más puntos y conviértelos en descuentos para próximos pedidos o canjéalos en premios.</p>
            </div>
          </div>
        </div>

        <div className='blocks_container_home5'>
          <div className='block_text2'>
            <div className='text_container_home2'>
              <h2>30 DÍAS PARA CAMBIOS Y DEVOLUCIONES</h2>
              <p>Si surge algún inconveniente o cambias de opinión, tendrás 30 días para hacer los cambios y devoluciones.</p>
            </div>
          </div>
          <div className='image_container_home5'>
            <img src={Devoluciones} alt="devoluciones" />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Home;
