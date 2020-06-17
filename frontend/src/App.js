import React, {useState} from 'react';
import NavigationBar from './components/NavigationBar';
/*import ProductSearch from './components/ProductSearch';*/
import Listado from './components/Listado';
import Slider from './components/Slider'
import Jumbotron from './components/Jumbotron'
import AnimalDetail from './components/AnimalDetail';
import Nav from './components/Nav';
import Requisitos from './components/Requisitos';
import Castrar from './components/Castrar';
import Denunciar from './components/Denunciar';
import Titulo from './components/Titulo';
import FormModal from './components/FormModal';
import Img from './components/Img';


import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  
} from 'react-router-dom';



function App() {
  
  const [usuario, setUsuario] = useState(null);

  const onLoginSuccess = (loggedUser) =>{
    setUsuario(loggedUser);
  }

  
const onLogout = ()=>{
     
    let url = 'http://localhost:8888/auth';
    fetch(url, {
      method : 'DELETE',
      credentials : 'include'
    }
    ).then(response => response.json() )
   .then( data => {
          setUsuario(null);
   }) 
}
return (

  <Router>
    
     <NavigationBar user={usuario}
                    handleLoginSuccess = {onLoginSuccess} 
                    handleLogout = {onLogout} />
     
     
    <Switch>
   
   <Route exact path="/" 
          children={
       <>
      <Slider />
       <Jumbotron/>
       <Nav/>
       <Titulo/>
      <Listado type="animales"
                user={usuario}/>
      <Img/>

      
      </>
                }
  />


<Route exact path="/requisitos"
children={

  <Requisitos/>

}
   


/>


<Route exact path="/castrar"
  children={
    <Castrar/>
  }
/>

<Route exact path="/denunciar"
       children={
         <Denunciar/>
       }
       />



  <Route exact path="/animales/:id" 
         children={ 
           
         <AnimalDetail /> 
        }
 
 
/>

{ usuario &&

<>
<Route exact path="/mispublicaciones"
               children={
                 <Listado type="mispublicaciones"
                                   user={usuario}/>
               }
        />


        <Route exact path="/favoritos"
        children={
          <Listado type="favoritos"
                            user={usuario}/>
        }
        />

        
<Route exact path="/formularios"
   children={
       <AnimalDetail type="formularios"
                     user={usuario}/>
   }
/>
       

</>
      }

<Redirect to={ { pathname: '/' } } />


      </Switch>

    </Router>

 
  );
}

export default App; 
