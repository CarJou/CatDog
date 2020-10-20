import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import corte from '../molly.gif'

const Slider = () => {

    return(
         <Carousel>
               <Carousel.Item>
             <img
              className="w-50 float-right"
             src= {corte}

             />

      </Carousel.Item>

    </Carousel>
)
}
export default Slider;