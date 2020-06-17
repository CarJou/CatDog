import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'

const FormModal = (props)=>{

const [formName, setFormName] = useState('');
const [formEdad, setFormEdad] = useState('');
const [formZona, setFormZona] = useState('');
const [formDirec, setFormDirec] = useState('');
const [formTrab, setFormTrab] = useState('');
const [formMail, setFormMail] = useState('');
const [formCel, setFormCel] = useState('');
const [formTel, setFormTel] = useState('');
const [formRed, setFormRed] = useState('');


const handleFormNameChange = event =>{
    setFormName( event.target.value );
}

const handleFormEdadChange = event =>{
    setFormEdad( event.target.value );
}

const handleFormZonaChange = event =>{
    setFormZona( event.target.value );
}

const handleFormDirecChange = event =>{
    setFormDirec( event.target.value );
}

const handleFormTrabChange = event =>{
    setFormTrab( event.target.value );
}

const handleFormMailChange = event =>{
    setFormMail( event.target.value );
}

const handleFormCelChange = event =>{
    setFormCel( event.target.value );
}

const handleFormTelChange = event =>{
    setFormTel( event.target.value );
}

const handleFormRedChange = event =>{
    setFormRed( event.target.value );
}


const handleSend = (props)=>{
    const formData = new FormData();

    formData.append('formName', formName);
    formData.append('formEdad', formEdad);
    formData.append('formZona', formZona);
    formData.append('formDirec', formDirec);
    formData.append('formTrab', formTrab);
    formData.append('formMail', formMail);
    formData.append('formCel', formCel);
    formData.append('formTel', formTel);
    formData.append('formRed', formRed);
    formData.append('userId', props.userId);
    formData.append('aniId', props.aniId);

    fetch(`http://localhost:8888/formularios`,   {
        method: 'POST',
        body: formData,
        credentials: 'include'
    })
    .then( response => response.json() )
    .then(data =>{
        console.log(data);
    })
    .catch( error =>{
        console.log('Error');
    })
}


return(
<>  
   <Modal show={props.show} onHide={props.handleHide}>
   
<Modal.Header closeButton>
       <Modal.Title>Formulario de contacto</Modal.Title>
</Modal.Header>
    
    <Modal.Body>
    <Form>
        <Form.Group>
           
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control type="text"
                           value={formName}
                           onChange={handleFormNameChange} />
            </Form.Group>
        
        
        <Form.Group>
            <Form.Label>Edad</Form.Label>
            <Form.Control type="number"
                          value={formEdad} 
                          onChange={handleFormEdadChange}/>
        </Form.Group>


        <Form.Group>
            <Form.Label>Zona de Residencia (Localidad/Barrio) </Form.Label>
            <Form.Control type="text"
                          value={formZona}
                          onChange={handleFormZonaChange} />
        </Form.Group>

        <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text"
                          value={formDirec}
                          onChange={handleFormDirecChange}
                          />
        </Form.Group>

        <Form.Group>
            <Form.Label>Ocupación</Form.Label>
            <Form.Control type="text"
                           value={formTrab}
                           onChange={handleFormTrabChange}/>
        </Form.Group>

        <Form.Group>
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="text"
                          value={formMail}
                          onChange={handleFormMailChange}/>
        </Form.Group>

        

        <Form.Group>
            <Form.Label>Celular</Form.Label>
            <Form.Control type="text"
                          value={formCel}
                          onChange={handleFormCelChange}
                          />
        </Form.Group>

        <Form.Group>
            <Form.Label>Teléfono alternativo</Form.Label>
            <Form.Control type="text"
                        value={formTel}
                        onChange={handleFormTelChange}
                        />
        </Form.Group>

    </Form>

    <Form.Group>
            <Form.Label>Usuario en Facebook u otra red social</Form.Label>
            <Form.Control type="text"
                          value={formRed}
                           onChange={handleFormRedChange}
                           />
        </Form.Group>

         


</Modal.Body>

<Modal.Footer>
    <Button variant="secondary"> Cancelar
    </Button>


    <Button variant="success"
             onClick={handleSend}>
                 Enviar
         </Button>
          
          </Modal.Footer>
</Modal>
    
    </>

)}
export default FormModal;