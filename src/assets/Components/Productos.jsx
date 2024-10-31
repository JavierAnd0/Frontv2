import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react';

const Productos = ({ name, price, description, imageUrl }) => {
  return (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>

      <Card.Meta>{price}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button color="orange" >Comprar</Button>
    </Card.Content>
  </Card>
  )
}

export default Productos
