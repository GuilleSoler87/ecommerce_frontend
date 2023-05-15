import React from 'react'
import ImageCarousel from '../Carousel/Carousel'
import Footer from '../Footer/Footer'
import "./Home.scss"



const Home = () => {
  return (
    <div className='home_container'>
      <span className='white_point'>.</span>
      <div className= "carousel_home">
        <ImageCarousel/>
      </div>
      <div>


        



      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home