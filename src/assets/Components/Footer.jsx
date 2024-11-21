import React from 'react';

import {
  Container,
  Divider,
  Image,
  List,
  Segment,
  Icon,
  Grid
} from 'semantic-ui-react';
import Logo from "../img/LogoCacharreria.png";
import { Link } from 'react-router-dom';

const FixedMenuLayout = () => (
  <Segment 
    inverted 
    vertical 
    style={{ 
      margin: '5em 0em 0em', 
      padding: '2em 0em', 
      backgroundColor: '#FF851B',
    }}
  >
    <Container>
      <Divider inverted section />
      <Grid divided inverted stackable columns={3} textAlign="center">
        
        {/* Sección del logo */}
        <Grid.Column>
          <Link to="/">
            <Image centered src={Logo} style={{ width: '100px', height: 'auto' }} />
          </Link>
        </Grid.Column>

        {/* Sección de redes sociales */}
        <Grid.Column style={{ marginTop: '2em' }}>
          <List horizontal inverted link size='big'>
            <List.Item as='a' href='https://www.facebook.com' target="_blank">
              <Icon 
                name='facebook' 
                size='big' 
                style={{ color: '#FFFFFF', transition: 'color 0.3s' }} 
                onMouseEnter={(e) => e.target.style.color = '#3B5998'}
                onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              />
            </List.Item>
            <List.Item as='a' href='https://www.twitter.com' target="_blank">
              <Icon 
                name='twitter' 
                size='big' 
                style={{ color: '#FFFFFF', transition: 'color 0.3s' }} 
                onMouseEnter={(e) => e.target.style.color = '#1DA1F2'}
                onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              />
            </List.Item>
            <List.Item as='a' href='https://www.instagram.com' target="_blank">
              <Icon 
                name='instagram' 
                size='big' 
                style={{
                  color: '#FFFFFF', 
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)';
                  e.target.style.webkitBackgroundClip = 'text';
                  e.target.style.backgroundClip = 'text';
                  e.target.style.color = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#FFFFFF';
                  e.target.style.background = 'none';
                }}
              />
            </List.Item>
            <List.Item as='a' href='https://www.linkedin.com' target="_blank">
              <Icon 
                name='linkedin' 
                size='big' 
                style={{ color: '#FFFFFF', transition: 'color 0.3s' }} 
                onMouseEnter={(e) => e.target.style.color = '#0077B5'}
                onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              />
            </List.Item>
          </List>
        </Grid.Column>

        {/* Sección de información */}
        <Grid.Column>
            <List link size='small' style={{ fontSize: '1.1em', color: '#FFFFFF' }}>
            <List.Item
                as={Link}
                to='/'
                style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  transition: 'color 0.3s',
                  display: 'block',
                  padding: '5px 0'
                }}
              >
                Inicio
              </List.Item>
              <List.Item
                as={Link}
                to='/api'
                style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  transition: 'color 0.3s',
                  display: 'block',
                  padding: '5px 0'
                }}
              >
                Ubicación
              </List.Item>
              <List.Item
                as={Link}
                to='/productos'
                style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  transition: 'color 0.3s',
                  display: 'block',
                  padding: '5px 0'
                }}
              >
                Productos
              </List.Item>
              
              <List.Item
                as={Link}
                to='/registro'
                style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  transition: 'color 0.3s',
                  display: 'block',
                  padding: '5px 0'
                }}
              >
                Registro
              </List.Item>
            </List>
          </Grid.Column>

      </Grid>
    </Container>
  </Segment>
);

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', padding: '20px 0', color: '#FFFFFF' }}>
      <Grid container>
        {/* Sección de redes sociales */}
        <Grid.Column>
          <List horizontal>
            <List.Item>
              <Icon
                name='linkedin'
                size='big'
                style={{ color: '#FFFFFF', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#0077B5'}
                onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              />
            </List.Item>
            {/* Agrega más íconos de redes sociales aquí */}
          </List>
        </Grid.Column>

        {/* Sección de información */}
        <Grid.Column>
          <List link size='small' style={{ fontSize: '1.1em', color: '#FFFFFF' }}>
            <List.Item
              as='a'
              href='/api'
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                transition: 'color 0.3s',
                display: 'block',
                padding: '5px 0'
              }}
            >
              Ubicación
            </List.Item>
            <List.Item
              as='a'
              href='/api'
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                transition: 'color 0.3s',
                display: 'block',
                padding: '5px 0'
              }}
            >
              Contáctanos
            </List.Item>
            <List.Item
              as='a'
              href='/terminos-y-condiciones'
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                transition: 'color 0.3s',
                display: 'block',
                padding: '5px 0'
              }}
            >
              Términos y condiciones
            </List.Item>
            <List.Item
              as='a'
              href='/politica-de-privacidad'
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                transition: 'color 0.3s',
                display: 'block',
                padding: '5px 0'
              }}
            >
              Política de privacidad
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </footer>
  );
};

export default FixedMenuLayout;
export { Footer };
