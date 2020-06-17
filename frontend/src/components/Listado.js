import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Tarjeta from './Tarjetas';
import NavBarMisPublicaciones from './NavBarMisPublicaciones';
import AnimalEditorModal from './AnimalEditorModal';
import Swal from 'sweetalert2';

const Listado = (props)=>{
//animales se vincula con server del back
  const [ animales, setAnimales ]= useState([])
 
  const [showAnimalEditorModal, setShowAnimalEditorModal] = useState(false);

  const[ selectedAnimal, setSelectedAnimal ]= useState(null);


  const handleHideAnimalEditorModal = ()=>{
      setSelectedAnimal(null);
    setShowAnimalEditorModal(false)
  }

  

const onShowAnimalEditorModal = ()=>{
    setSelectedAnimal(null);
    setShowAnimalEditorModal(true);
}

const handleAnimalSaved = (message)=>{
    setShowAnimalEditorModal(false);
    cargarListado();

    Swal.fire(
        {
        text: message,
        icon: 'success'
    }
    )
}

const handleChangeFavStatus = (isFav, aniId, userId)=>{
    if ( isFav ){
        alert('Quitar de favoritos')
    }else{
        alert('Agregar favorito')
    }
}
 

const cargarListado = ()=>{

    let endpoint = 'animales';
 
    if ( props.user && props.type === 'mispublicaciones' ){
      endpoint = 'animales/user/' + props.user.id;
  }
  
   
        fetch(`http://localhost:8888/${endpoint}`).then(
            response => response.json()
        ).then(
            data => {
                setAnimales(data)
            }
        )

}



useEffect( cargarListado, [props.user] );

//la props y id lo manda la tarjeta
const handleEditClick = (idAnimal)=>{
    setSelectedAnimal(idAnimal);
    setShowAnimalEditorModal(true);

}



const handleDeleteClick = (idAnimal) =>{
        
    Swal.fire({
        title: '¿Seguro que quieres eliminar esta publicación?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
    }).then( result =>{
        if ( result.value ){
            
            fetch(`http://localhost:8888/animales/${idAnimal}`,
                {
                    method: 'DELETE',
                    credentials: 'include'
                }
            ).then(
                response => response.json()
            ).then(
                data =>{
                    if ( data.status === 'ok' ){
                        Swal.fire({
                            text: data.message,
                            icon: 'success'
                        });

                        cargarListado();
                    }
                    else{
                        Swal.fire({
                            text : data.message,
                            icon: 'error'
                        })
                    }
                }
            )

        }
    })

}

    return(

        <>


  { props.type === 'mispublicaciones' &&
  <NavBarMisPublicaciones handleShowAnimalEditorModal={onShowAnimalEditorModal}/>
  }


        <Row className="m-3">
            

        {
            animales.map( animal =>{
                return(

                <Tarjeta titulo= {animal.nombre}
                           imagen= {animal.imagen}
                           descripcion= {animal.descripcion}
                           id={animal.id}
                           type={props.type} 
                           onEditClick={handleEditClick}
                           onDeleteClick={handleDeleteClick}
                           user={props.user}
                           isFav={true}
                           onChangeFavStatus={handleChangeFavStatus}
                           />
                )
            })
        }

           

        </Row>

        <AnimalEditorModal show={showAnimalEditorModal}
                              user={props.user}
                        handleHide={handleHideAnimalEditorModal}
                        onAnimalSaved={handleAnimalSaved}
                        idAnimal={selectedAnimal}
                        />

        </>
    );
}

export default Listado;