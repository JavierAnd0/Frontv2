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
        <Image centered a='/' size='mini' src={Logo} />
        </Link>
        <List horizontal inverted divided link size='small' style={{ fontSize: '1.2em' }}> {/* Aumenta el tamaño del texto */}          <List.Item as='a' href='#' style={{ color: '#FFFFFF' }}> {/* Color de texto blanco */}
            Site Map
          </List.Item>
          <List.Item as='a' href='#' style={{ color: '#FFFFFF' }}> {/* Color de texto blanco */}
            Contact Us
          </List.Item>
          <List.Item as='a' href='#' style={{ color: '#FFFFFF' }}> {/* Color de texto blanco */}
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#' style={{ color: '#FFFFFF' }}> {/* Color de texto blanco */}
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
