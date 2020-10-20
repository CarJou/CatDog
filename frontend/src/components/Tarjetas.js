import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import iconoNoFavorito from '../no_favorito.png';
import iconoFavorito from '../fav.png';
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './styles/Tarjetas.css';



export default (props)=>{

  const handleEditClick = ()=>{
     props.onEditClick( props.id ); 
  }

const handleDeleteClick = ()=>{
  props.onDeleteClick( props.id );
}

const handleFavClick = ()=>{
  props.onChangeFavStatus();
}

  return(

<>

    <Col md={4} lg={3} xl={3} className="mb-4 d-flex align-items-stretch justify-content-center">

  <Card>

  <Card.Body >
{ props.type === 'animales' && props.user &&
        <img style={{cursor: "pointer", textAling: "right" }}
        className="Icono"
        src={ props.isFav ? iconoFavorito : iconoNoFavorito}
        onClick={handleFavClick}
        />

}

  <Link to={"/animales/" + props.id} className="nav-link p-0">

  <Card.Title style={{fontSize:"2rem" }} className="mb-2 text-center">
            {props.titulo}

</Card.Title>

       <img src= {props.imagen}
    className="card-img-top">
   </img>

    </Link>

    <Card.Text style={{fontSize:"1rem" }} className="mb-2 text-center p-2">{props.descripcion}

      </Card.Text>

    </Card.Body>

<Card.Footer className="text-center">
                </Card.Footer>

    {
                props.type === 'mispublicaciones' &&

                <Row className="my-2 text-center" >
                    <Col>
                        <Button variant="btn btn-outline-success"
                        onClick={handleEditClick}>

                            <FontAwesomeIcon  icon={faEdit} /> Editar
                        </Button>

                        <Button variant="btn btn-outline-danger"
                        onClick={handleDeleteClick}>
                            <FontAwesomeIcon icon={faTrash} /> Eliminar
                        </Button>
                    </Col>
                </Row>
            }



  </Card>

</Col>

</>
)}