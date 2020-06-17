import React, {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from 'react-router-dom';
import ButtonForm from './ButtonForm';
import FormModal from './FormModal';
import './styles/AnimalDetail.css';

export default(props)=>{




  let { id } = useParams();


  let [animal, setAnimal] = useState(null);
  useEffect(

    ()=>{

     fetch('http://localhost:8888/animales/' + id ).then( response => response.json()
     
     ).then( data => {
      setAnimal(data);
      console.log(data);
     })
     }, []
     )
     //para hacer dinamico ese ID importo useParams, lo exporto desde REACT router dom
   

    const [ showFormModal, setShowFormModal ] = useState(false)
    
    const handleHideFormModal =()=>{
      setShowFormModal(false);
    }

  const onShowFormModal =()=>{
    setShowFormModal(true);
  }


    return(


animal &&
<>


<Row className="d-flex justify-content-center p-4">

  <Col md={4} className="d-flex justify-content-center ">
            <img src={animal.imagen} className="img-fluid"/>
            
  </Col>


  <Col md={4} className="text-center p-3">
        <h1 className="Nombre">{animal.nombre}</h1>
        <h2 className="descripcion">{animal.descripcion}</h2>

        <ButtonForm
    handleShowFormModal={onShowFormModal}/>
    

  </Col>

  
</Row>

<FormModal show={showFormModal} 
           handleHide={handleHideFormModal}

           id ={props.aniId}
           
           user={props.userId}
           
           />

 </>          
  )
}