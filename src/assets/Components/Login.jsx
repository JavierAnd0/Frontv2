import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo from '../img/LogoCacharreria.png';
import { Link } from 'react-router-dom';
import Fondologin from '../img/Fondologin.jpg';

const LogeoPage = () => {
  return (
    <Grid textAlign="center" style={{ height: '100vh', backgroundColor: '#f0f0f0' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <div style={{ backgroundImage: `url(${Fondologin})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '3em', borderRadius: '5px', width: '100%', height: 'auto', maxWidth: '450px', margin: '0 auto' }}>
          <Segment raised style={{ padding: '2em', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #ccc' }}>
            <Header as="h2" color="orange" textAlign="center">
              <Link to="/">
                <Image src={logo} size='tiny' centered />
              </Link>
              Iniciar Sesión
            </Header>
            <Form size="large">

              <Segment stacked>
                <Form.Input fluid icon="user" iconPosition="left" placeholder="Correo electrónico" />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Contraseña"
                  type="password"
                />
                <Button color="orange" fluid size="large">
                  Iniciar Sesión
                </Button>
              </Segment>
            </Form>
            <Message>
            ¿Olvidaste tu contraseña?<br /><a href="#" style={{ color: 'orange' }}>Recupérala aquí</a>
            </Message>
            <Message>
              ¿No estás registrado?<br /> <a href="/registro" style={{ color: 'orange' }}>Regístrate aquí</a>
            </Message>
          </Segment>
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default LogeoPage;