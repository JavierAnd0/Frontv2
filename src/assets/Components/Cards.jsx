import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import '../../css/Cards.css';
import person1 from '../img/person1.jpg';
import person2 from '../img/person2.jpg';
import person3 from '../img/person3.jpg'; 

// Datos de las tarjetas para simplificar y hacer el código más reutilizable
const cardData = [
  {
    image: person1,
    header: 'Matthew',
   
  },
  {
    image: person2,
    header: 'Matthew',
    
  },
  {
    image: person3,
    header: 'Matthew',
    
  },
];

const CardExampleCard = () => (
  <div className="responsive-card-group">
    <Card.Group stackable itemsPerRow={3}>
      {cardData.map((card, index) => (
        <Card key={index} className="responsive-card">
          <Image src={card.image} wrapped ui={false} />
          <Card.Content className='responsive-content'>
            <Card.Header>{card.header}</Card.Header>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);

export default CardExampleCard;
