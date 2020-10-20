import React from 'react';

import adop from '../adop3.jfif';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default()=>
<>
<h1 className="text-center p-3"><strong>Requisitos de adopción</strong></h1> 

  <Container >
    <p  className="text-center p-3">Adoptar es un acto de responsabilidad y compromiso por lo que es importante que estes capacitado para hacerlo. Un perro puede vivir entre 14 y 18 años y durante todo ese tiempo dependerá de vos.

Algunas cuestiones para tener en cuenta son el espacio disponible de tu casa, el tiempo que tengas para brindarle compañía, actividad física y cuidado. También los costos asociados a su alimentación, atención veterinaria y estadía durante tus vacaciones.

Para asegurarte una convivencia feliz tu elección debe estar orientada al estilo de vida que llevas y el tiempo real que le podes dedicar.</p>


<h1 className="text-center p-3">Aquí te damos algunos tips pero recordá que lo más importante es adoptar con <strong>conciencia </strong>y con el <strong>corazón</strong>.</h1>


<ul className="text-left my-2">
<li><strong>Un cachorro:</strong> (45 días-12 meses) es precioso pero, requiere de mucho tiempo y esfuerzo. Come 4 veces al día, puede llorar por las noches y en las ausencias de los dueños. Mastica objetos, hace pis y caca en cualquier lado, requiere educación y paciencia, es un bebe durante un año. No hay garantías con respecto al tamaño definitivo. En caso de haber niños chicos en el hogar, hay que marcar la diferencia entre mascota y juguete. Sin embargo es muy satisfactorio ir viendo el crecimiento y desarrollo de un cachorrito hasta convertirse en adulto.</li>

<li><strong>Un joven:</strong> (1 año-5 años) es juguetón pero más adulto. Son más hábiles para centrarse en la educación. Generalmente ya está con la vacunación completa, lo que no hay riesgo de contraer alguna enfermedad. Están esterilizados. Ya se puede sacarlo a pasear y bañarlo. Come dos veces al día. Ya tiene el tamaño definitivo, no cambiara de aspecto.</li>

<li><strong>Un adulto: </strong>(5 años-9años) no genera problemas por quedarse algunas horas solo. Es probable que duerma toda lo noche. Se habitúa fácilmente a su nueva familia. Aceptan su sitio dentro de la jerarquía del hogar, se adaptan a órdenes básicas, si es que no las tienen adquiridas de antes. Se muestran gratificantes y toman mucho cariño a su nueva familia y casa.</li>

<li><strong>Un abuelo:</strong> (10 años-día de su muerte) nos dejan muchísimo tiempo para nosotros. No requieren tanto trabajo. Son muy calmos y sedentarios. Aunque el tiempo de compañía es seguramente menor, también se merecen un hogar. Podemos darle durante los años que le quedan una vida digna y agradable. Estarán súper agradecidos, esperaron su hogar mucho tiempo.
</li>

</ul>
<Link to={"/formulario"}>
<Button variant="primary"  block size="lg">
    Postularme para adoptar
  </Button>
  </Link>

</Container>





<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 p-5"
      src={adop}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
</>