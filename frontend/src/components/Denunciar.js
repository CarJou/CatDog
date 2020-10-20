import React from 'react';
import pexel from '../pexel1.jpeg';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';

export default()=>
<>
 <h1 className="text-center p-3"><strong>Denuncia el maltrato</strong></h1> 
<Container>
 <p className="text-center">
 Si presencias un abuso a un animal -que por su propia condición, son indefensos y dependientes– denúncialo.
No permitas que esa situación continúe sin hacer algo por él.</p>
 <p className="text-center">
</p>

 <p className="text-center p-4"><strong>EN CASO DE MALTRATO Y CRUELDAD CONTRA ANIMALES
DEBES TENER PRESENTE:</strong></p>
<p className="text-center">
    <li>Es un delito penado por el Código Penal.</li>
<li> Es un delito que tiene Acción Pública, es decir que puede ser denunciado por cualquier persona.</li>
<li> El hecho se puede denunciar ante la Policía o fiscalía. </li></p>



<p className= "text-center p-3"><strong>PASOS Y REQUISITOS NECESARIOS PARA CONCRETAR UNA DENUNCIA:</strong>
</p>

<p className= "text-center"><strong>1.</strong> Las denuncias son personales, debe efectuarlas la persona que presencia el hecho y que es testigo del hecho
</p>

<p className= "text-center"><strong>2.</strong> El/la denunciante debe ser mayor de edad, (18 años), y acreditar su identidad con Documento Nacional de Identidad, Libreta de Enrolamiento o Cívica. Si es extranjero y no posee DNI, por medio de su Cédula de Identidad.</p>

<p className= "text-center"><strong>3.</strong> La denuncia puede hacerse verbalmente o por escrito, ante las autoridades del lugar en que ocurrió el hecho. En caso de realizarse por escrito deberá ser firmada ante el funcionario que la recibe.</p>

<p className= "text-center"> <strong>4.</strong> La denuncia no exige mayores formalidades. Basta con describir los hechos considerados delictuosos, el lugar y tiempo en el que ocurren o han ocurrido y, si se lo conoce, el nombre, apodo, señas, y/o domicilio del culpable y cualquier otro dato de interés que pueda facilitar la investigación. </p>

<p className= "text-center"><strong>5.</strong>  La denuncia debe formularse ante la Comisaría de la zona o la Fiscalía. LA POLICÍA TIENE LA OBLIGACIÓN DE TOMAR LA DENUNCIA: Ante una negativa por parte del funcionario que lo/a atiende Ud. debe insistir que quiere hacer una denuncia penal por infracción a la ley 14.346 Es su derecho pedir una COPIA FIRMADA DE DICHA DENUNCIA.
Es importante poder aportar fotografías, video del estado de los animales como así también algún testigo del hecho para acompañar con la denuncia.</p>

</Container>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pexel}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
</>

