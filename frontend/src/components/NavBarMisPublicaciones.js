import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import add from '../add.png';

export default props =>

  <Row className="my-3 ml-4 text-center">
      <Col>
      <Button onClick={props.handleShowAnimalEditorModal} className="text-center">
          <img src={add}></img>
          Publicar
      </Button>
          </Col>
  </Row>