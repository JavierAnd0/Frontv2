import React from 'react';
import {
  Container,
  Divider,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';
import Logo from "../img/LogoCacharreria.png";
import { Link } from 'react-router-dom';

const FixedMenuLayout = () => (
  <div>
    <Segment 
      inverted 
      vertical 
      style={{ 
        margin: '5em 0em 0em', 
        padding: '1em 0em', 
        backgroundColor: '#FF851B', 
      }}
    >
      <Container textAlign='center'>
        <Divider inverted section />
        <Link to="/">
          <Image centered src={Logo} style={{ width: '150px', height: 'auto' }} />
        </Link>
        <List horizontal inverted divided link size='small' style={{ fontSize: '1.2em' }}>
          <List.Item as='a' href='#' style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
            Ubicacion
          </List.Item>
          <List.Item as='a' href='#' style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
            Contactanos
          </List.Item>
          <List.Item as='a' href='#' style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
            Terminos y condiciones
          </List.Item>
          <List.Item as='a' href='#' style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
            Politica de privacidad
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
