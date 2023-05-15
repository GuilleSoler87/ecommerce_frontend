import React from 'react';
import { Carousel } from 'antd';
import Naruto from "../../assets/narutoBan.png";
import MyHero from "../../assets/myHeroBan.png";
import OnePiece from "../../assets/onePieceBan.png";
import DemonSla from "../../assets/DemonSlayerBan.png";

const contentStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const ImageCarousel = () => {
  return (
    <div className='carousel-container'>
      <Carousel autoplay>
        <div>
          <img style={contentStyle} src={Naruto} alt="Imagen 1" />
        </div>
        <div>
          <img style={contentStyle} src={MyHero} alt="Imagen 2" />
        </div>
        <div>
          <img style={contentStyle} src={OnePiece} alt="Imagen 3" />
        </div>
        <div>
          <img style={contentStyle} src={DemonSla} alt="Imagen 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
