import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import '../../css/Cards.css';

const cardData = [
  {
    image: '/images/avatar/large/matthew.png',
    header: 'Matthew',
    meta: 'Joined in 2015',
    description: 'Matthew is a musician living in Nashville.',
    friends: 22,
  },
  {
    image: '/images/avatar/large/matthew.png',
    header: 'Matthew',
    meta: 'Joined in 2015',
    description: 'Matthew is a musician living in Nashville.',
    friends: 22,
  },
  {
    image: '/images/avatar/large/matthew.png',
    header: 'Matthew',
    meta: 'Joined in 2015',
    description: 'Matthew is a musician living in Nashville.',
    friends: 22,
  },
];

const CardExampleCard = () => (
  <div className="responsive-card-group">
    <Card.Group stackable itemsPerRow={3}>
      {cardData.map((card, index) => (
        <Card key={index}>
          <Image src={card.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{card.header}</Card.Header>
            <Card.Meta>
              <span className="date">{card.meta}</span>
            </Card.Meta>
            <Card.Description>{card.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              {card.friends} Friends
            </a>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);

export default CardExampleCard;
