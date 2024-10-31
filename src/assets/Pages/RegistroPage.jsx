import React from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import Header2 from '../Components/Header';
import Footer from '../Components/Footer';
import logo from '../img/LogoCacharreria.png'; // Asegúrate de que la ruta sea correcta

const RegistroPage = () => {
  return (
    <>
      <Header2 />
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment raised style={{ padding: '2em', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Header as="h1" color="orange" textAlign="center">
              <Image src={logo} style={{ marginRight: '10px' }} /> Regístrate
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input fluid icon="user" iconPosition="left" placeholder="Nombre" />
                <Form.Input fluid icon="phone" iconPosition="left" placeholder="Teléfono" />
                <Form.Input fluid icon="mail" iconPosition="left" placeholder="Correo electrónico" />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Contraseña"
                  type="password"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Repetir Contraseña"
                  type="password"
                />
                <Button color="orange" fluid size="large">
                  Registrarse
                </Button>
              </Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
      <Footer />
    </>
  );
};

export default RegistroPage;