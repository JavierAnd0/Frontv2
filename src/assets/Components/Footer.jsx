import React from 'react';
import {
  Container,
  Divider,
  Image,
  List,
  Segment,
  Icon
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
          <List.Item as='a' href='https://www.facebook.com' target="_blank">
            <Icon name='facebook' size='big' style={{ color: '#FFFFFF' }} />
          </List.Item>
          <List.Item as='a' href='https://www.twitter.com' target="_blank">
            <Icon name='twitter' size='big' style={{ color: '#FFFFFF' }} />
          </List.Item>
          <List.Item as='a' href='https://www.instagram.com' target="_blank">
            <Icon name='instagram' size='big' style={{ color: '#FFFFFF' }} />
          </List.Item>
          <List.Item as='a' href='https://www.linkedin.com' target="_blank">
            <Icon name='linkedin' size='big' style={{ color: '#FFFFFF' }} />
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;

