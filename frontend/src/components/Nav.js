import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import police from '../police.png';
import Animals from '../animals.png';
import dog from '../dog.png';
import {Link} from 'react-router-dom';

export default ()=>

<Container fluid style={{backgroundColor: "rgb(237, 192, 237)"}} expand="lg" className="p-0">
  <Row >


    <Col xs={4} md={4} className="Linkk text-center">

       <Image src={Animals} rounded className="img-fluid"/>
      <Link to={"/requisitos"}><p>Requisitos de adopción </p></Link>
    </Col>
    
    <Col xs={4} md={4} className="text-center">
      <Image src={dog} rounded className="img-fluid"/>
      <Link to={"/castrar"}><p>¿Por qué es importante castrar?</p></Link>
    </Col>
    
      <Col xs={4} md={4} className="text-center" >
      <Image src={police} rounded className="img-fluid"/>
      <Link to={"/Denunciar"}><p>Denunciá el maltrato</p></Link>
    </Col>
  </Row>

</Container>

