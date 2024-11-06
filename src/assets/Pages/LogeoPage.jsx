import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo from '../img/LogoCacharreria.png'; // Asegúrate de que la ruta sea correcta
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const LogeoPage = () => {
  return (
    <>
    <Navbar />
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment raised style={{ padding: '2em', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Header as="h2" color="orange" textAlign="center">
              <Image src={logo} /> Iniciar Sesión
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
              ¿Olvidaste tu contraseña? <a href="#" style={{ color: 'orange' }}>Recupérala aquí</a>
            </Message>
            <Message>
              ¿No estás registrado? <a href="/registro" style={{ color: 'orange' }}>Regístrate aquí</a>
            </Message>
          </Segment>
        </Grid.Column>
      </Grid>
      <Footer />
    </>
  );
};

export default LogeoPage;