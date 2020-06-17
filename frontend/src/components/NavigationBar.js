import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
/*import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';*/
import logo from '../logo.png';
import LoginModal from './LoginModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'





const NavigationBar = (props) => {

  // variable 'estado', guardo true/false que es lo que quiero pasar al modal. Inicialmente es falso. False queda dentro de showloginmodal. Set cambia el valor y permite ponerlo en true o false. Si cambia un valor vuelve a renderizar.
  const [showLoginModal, setShowLoginModal] = useState(false);

    const handleHideLoginModal = () =>{
        setShowLoginModal(false);
    }

    const handleShowLoginModal = () =>{
        setShowLoginModal(true);
    }


  

  return(

    <> 

    <Navbar  sticky = "top"  style={ {backgroundColor : "#edc0ed" } } expand="lg" >


  
      <Link to={"/"} className="navbar-brand">
      <img style={ {height : '3rem', marginRight : '0.8rem'} } src={logo}></img>
      <Navbar.Text><strong>CatDog</strong></Navbar.Text>
  
</Link>



     
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">

   <Nav className="ml-auto">
      
   
   { !props.user 
                            ?
                                <Button 
                                    variant="primary"
                                    onClick={ handleShowLoginModal }

                                
                                > 
                                <FontAwesomeIcon  icon={faUserCircle} pull = " left "/>
                                    Iniciar sesión
                                </Button>
                            :
                                <> <Link to="/favoritos" className="nav-link">
                                      Favoritos
                                       </Link>

                                       
                                   <Link to="/mispublicaciones" className="nav-link">
                                       Mis publicaciones
                                       </Link>
                                         

                                   
                                       <NavDropdown alignRight title={props.user.nombre} >
                                        


                                        <NavDropdown.Item>Mi cuenta</NavDropdown.Item>
                                         <NavDropdown.Divider />


                                        


                                    
 
                                        <NavDropdown.Item onClick={props.handleLogout}>
                                        <FontAwesomeIcon  icon={faSignOutAlt} pull = " left "/>
                                            Cerrar sesión</NavDropdown.Item>
                                    </NavDropdown> 
                                </>
                        }

                    </Nav>

                </Navbar.Collapse>

            </Navbar>

            <LoginModal show={showLoginModal}
                        handleHide={handleHideLoginModal}
                        handleLoginSuccess={props.handleLoginSuccess}
                        />
        </>
    )

}

export default NavigationBar;