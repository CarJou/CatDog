import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";


export default () =>

<Jumbotron fluid style={ {backgroundColor : "#edc0ed",  } }   >
  <Container className="text-center" >
    <h1 style={{fontSize: "3em"}}><strong>¡Bienvenidos a CatDog!</strong></h1>
    <p> 
La primer web desarrollada para que puedas publicar animales en adopción o conocer tu próximo compañero/a de aventuras desde la comodidad de tu casa. Sigamos formando vínculos felices!


    </p>
  </Container>
</Jumbotron>
