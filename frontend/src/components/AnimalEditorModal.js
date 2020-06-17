import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import add from '../add.png';

const AnimalEditorModal = (props)=>{
//console.log('userId:', props.user)
//variables de estado para el form
 const [animalName, setAnimalName] = useState('');
 const [animalDescripcion, setAnimalDescripcion] = useState('');
 const [animalImage, setAnimalImage] = useState('');
 const [previewAnimalImage, setPreviewAnimalImage] = useState('');

const handleAnimalNameChange = event =>{
    setAnimalName( event.target.value );
}


const handleAnimalDescripcionChange = event =>{
    setAnimalDescripcion(event.target.value);
}


const handleAnimalImageChange = event =>{
    setAnimalImage( event.target.files [0] );
    setPreviewAnimalImage( URL.createObjectURL(event.target.files[0]) );
}

const handleSave = ()=>{

    const formData = new FormData();
    formData.append('animalName', animalName);
    formData.append('animalDescripcion', animalDescripcion);
    formData.append('animalImage', animalImage);
    formData.append('userId', props.user.id);
    


    let url = 'http://localhost:8888/animales';
    let method = 'POST';

    if (props.idAnimal){
        url += '/' + props.idAnimal;
        method = 'PUT';
    }


    fetch(url, {
        method: method,
        body: formData,
        credentials: 'include'
    }
    ).then( response => response.json() )
    .then(data => {

        if ( data.status === 'ok'){
            props.onAnimalSaved(data.message)
        }
        else{
            Swal.fir({
                text: data.message,
                icon: 'error'
            })
               
        }

    }).catch( error => {
        console.log('Error');
    })
}


useEffect(
    ()=>{
        if (props.idAnimal){
            
            fetch(`http://localhost:8888/animales/` + props.idAnimal).then(
                response => response.json()
            ).then(
                data =>{
                    setAnimalName(data.nombre);
                    setAnimalDescripcion(data.descripcion);
                    setAnimalImage('');
                    setPreviewAnimalImage(data.imagen);

                }
            
            )

        }else{
          setAnimalName('');
          setAnimalDescripcion('');
          setAnimalImage('');
          setPreviewAnimalImage('');
        }    
    }, [props.idAnimal]
)

//sexo no esta conectado a la base

    return(
  <Modal show={props.show} onHide={props.handleHide}>

      <Modal.Header closeButton>
          <Modal.Title>Nueva publicación</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center">
          <Form>
              <Form.Group>


                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text"
                                value={animalName}
                                onChange={handleAnimalNameChange}/>


              </Form.Group>

              <Form.Group>
                  <Form.Label >Descripción</Form.Label>
                  <Form.Control 
                                type="text"
                                value={animalDescripcion}
                                onChange={handleAnimalDescripcionChange}
                                
                                 />
              </Form.Group>
            
            <Form.Group>
               <Form.Label className="d-flex">Sexo</Form.Label>
               <select>
              <option value="Macho">Macho</option>
             <option value="Hembra">Hembra</option>
            
            </select>

            </Form.Group>
            
     

              <Form.Group className="d-flex justify-content-center">

                  { previewAnimalImage &&
                  <img style={ { height : "25vh" } }  src={ previewAnimalImage }/>
             }
             
              </Form.Group>




              <Form.Group>
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control type="file"
                                 onChange={handleAnimalImageChange}/>
              </Form.Group>


          </Form>
      </Modal.Body>

      <Modal.Footer>
          <Button variant="secondary">
              Cancelar
          </Button>

          <Button variant="primary"
                  onClick={handleSave}>
              Guardar
          </Button>
      </Modal.Footer>
  </Modal> 
   )
}
export default AnimalEditorModal;