import React from 'react';
import adop from '../adop1.jpg';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';

export default()=>
<>  
     
    

<h1 className="text-center p-3"><strong>¿Por qué es importante castrar?</strong></h1>

  <Container >
    <p  className="text-center p-3">Castrar es la única opción real para evitar que sigan naciendo animales destinados a sufrir. Nuevos nacimientos significan nuevos abandonos.</p>


<p className="text-center">Existe un gran número de animales de compañía que son abandonados por sus dueños cada año. Miles de ellos deambulan por las calles padeciendo hambre, enfermedades, accidentes y siendo víctimas de maltrato. Entonces, ¿para qué traer más perros y gatos al mundo cuando hay miles sufriendo en las calles?</p>
<h2 className="text-center p-3" ><strong>LA CASTRACIÓN ES LA ÚNICA Y MEJOR MANERA DE MANTENER CONTROLADA LA POBLACIÓN ANIMAL, ADEMÁS DE AYUDAR A EVITAR PROBLEMAS DE SALUD A TU MASCOTA</strong>
 </h2>

<p className="text-center p-3" >Es responsabilidad del Estado realizar campañas de castración gratuitas, masivas, sistemáticas y extensivas en el tiempo pero también es necesaria la participación responsable de cada ciudadano.

</p> 

<h2 className="text-center p-3" ><strong>Ventajas de la esterilización en hembras:</strong></h2>

<ul className="text-left">
   
<li>Eliminación del celo, con lo que dejan de manchar en casa y de atraer a los machos, desapareciendo además la ansiedad del animal y los maullidos y quejidos de las gatas que provoca este periodo.</li>

<li>Elimina los embarazos psicológicos que se presentan en algunas hembras después del celo.</li>

<li>
Evita las infecciones uterinas (piómetras) y los quistes ováricos, además de reducir la incidencia de tumores de mama.
</li>

</ul>

<h2 className="text-center p-3" ><strong>Ventajas de la esterilización en machos:</strong></h2>


<ul className="text-left ">
   
<li> Elimina el deseo sexual del animal, por lo que dejará de montar a otros animales o personas y no se mostrará ansioso y frustrado cuando detecten a una hembra en celo, evitando también en muchos casos las ganas de escapar y deambular fuera de casa, mejorando en definitiva la calidad de vida de nuestro animal.</li>

<li>Se reduce o elimina la agresividad hacia otros machos y, especialmente en el caso de los gatos, el marcar con orina la casa.</li>
<li>Influye positivamente en las afecciones de próstata y otras enfermedades (algunas afecciones de la piel, etc.)
</li>
</ul>



<h2 className="text-center p-3" ><strong>Ventajas para usted:</strong></h2>

<ul className="text-left">
   
<li>Evitara crías no deseadas, mordeduras, peleas, fugas, maullidos nocturnos, rociado de orina, problemas con los vecinos.</li>
<li>Sus animales serán más sanos, vivirán más años y serán más guardianes.</li>

</ul>

<h2 className="text-center p-3" ><strong>Ventajas para la sociedad:</strong></h2>
<ul className="text-left">
   
<li>Menos cantidad de animales en la vía pública.</li>
<li>Menos animales abandonados por lo tanto menos maltrato y sufrimiento.</li>
</ul>

</Container>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={adop}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>

</>