import React from 'react';


function Header(props){

    console.log(props.nombre + ' ' + props.apellido);

return(
    
    <div>
        <p>Encabezado de página</p>
        <p>{props.nombre} {props.apellido}</p>
    </div>

)

}

export default Header;