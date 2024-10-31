import React from "react";
import { Segment, Container, Grid, List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { px } from "framer-motion";
import Form from "./Form";

const Footer = () => {
    return (
      <Segment inverted vertical style={{ padding: '0.5em 0em', marginTop: '5em', backgroundColor: '#f69100' }}>
        <Container textAlign='center'>
        <Grid columns={3} divided inverted stackable style={{ marginTop: '0em' }}>
            <Grid.Row>
              <Grid.Column>
                <List.Item as={Link} to="/sobre-nosotros" style={{ color: 'white' }}>Sobre nosotros</List.Item>
              </Grid.Column>
              <Grid.Column>
                <List.Item as={Link} to= '/' style={{ color: 'white', fontSize: '1em', textDecoration: 'none' }}>Cachaerria don Juan</List.Item>
              </Grid.Column>
              <Grid.Column>
                <List.Item as={Link} to="/legal" style={{ color: 'white' }}>Avisos legales</List.Item>
              </Grid.Column>
            </Grid.Row>
          </Grid>  
          <Grid columns={1} divided inverted stackable>
            <Grid.Row>
              <Grid.Column>
                <List horizontal inverted style={{ justifyContent: 'space-around' }}>
                  <List.Item as='a' href="#" className="icon-twitter" style={{ margin: '0 em', marginTop: '1em' }}>
                    <Icon name='twitter' link size='big' />
                  </List.Item>
                  <List.Item as='a' href="#" className="icon-facebook" style={{ margin: '0 em', marginTop: '1em'  }}>
                    <Icon name='facebook' link size='big' />
                  </List.Item>
                  <List.Item as='a' href="#" className="icon-instagram" style={{ margin: '0 em', marginTop: '1em'  }}>
                    <Icon name='instagram' link size='big' />
                  </List.Item>
                  <List.Item as='a' href="#" className="icon-youtube" style={{ margin: '0 em', marginTop: '1em'  }}>
                    <Icon name='youtube' link size='big' />
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  };
  
  export default Footer;