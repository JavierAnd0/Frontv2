import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Menu, Icon, Container, Grid, Sidebar, Button } from 'semantic-ui-react';
import Logo from "../img/LogoCacharreria.png";
import 'semantic-ui-css/semantic.min.css';
import '../../css/Navbar.css';

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <Container fluid style={{ width: '100%', padding: '0' }}>
      <Grid columns={2}>
        {/* Desktop Menu */}
        <Grid.Row only="computer" columns={1}>
          <Grid.Column>
            <Segment 
              as={Menu} 
              inverted 
              color="orange" 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1em 2em', 
                boxShadow: '0 4px 8px rgba()',
                borderRadius: '0'
              }}
            >
              <Link to="/">
                <Image src={Logo} size="mini" rounded style={{ marginRight: '1em' }} />
              </Link>
              <Menu.Item>
                <Link to="/productos" className="navbar-link">Productos</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/sobre-nosotros" className="navbar-link">Nosotros</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/contactanos" className="navbar-link">Contactanos</Link>
              </Menu.Item>
              <Menu.Item position="right">
                <Link to="/login" className="navbar-link">
                  <Icon name="address card outline" /> Acceder
                </Link>
              </Menu.Item>
              <Menu.Item >
                <Link to="/Sign in" className="navbar-link">
                  <Icon name="address book" /> Iniciar Sesion
                </Link>
              </Menu.Item>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        {/* Mobile and Tablet Menu */}
        <Grid.Row columns={1} only="mobile tablet">
          <Grid.Column>
            <Segment 
              inverted 
              color="orange" 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%',
              }}
            >
              <Link to="/">
                <Image src={Logo} size="mini" rounded />
              </Link>
              <Button icon onClick={() => setSidebarVisible(true)} circular inverted color="orange">
                <Icon name="sidebar" />
              </Button>
            </Segment>
          </Grid.Column>

          <Sidebar 
            as={Menu} 
            animation="overlay" 
            direction="right" 
            icon="labeled" 
            inverted 
            //color = "orange" opcional para cambiar el color del menu lateral
            vertical 
            visible={sidebarVisible} 
            onHide={() => setSidebarVisible(false)}
          >
            <Menu.Item as="a" onClick={() => setSidebarVisible(false)}>
              <Icon name="close" />
            </Menu.Item>
            <Menu.Item>
              <Link to="/" onClick={() => setSidebarVisible(false)} className="navbar-link">
                <Icon name="home" /> Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/productos" onClick={() => setSidebarVisible(false)} className="navbar-link">
                <Icon name="boxes" /> Productos
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/sobre-nosotros" onClick={() => setSidebarVisible(false)} className="navbar-link">
                <Icon name="info circle" /> Nosotros
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/contactanos" onClick={() => setSidebarVisible(false)} className="navbar-link">
                <Icon name="phone" /> Contactanos
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login" onClick={() => setSidebarVisible(false)} className="navbar-link">
                <Icon name="user" /> Acceder
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/" onClick={() => setSidebarVisible(false)} className="navbar-link">
                <Icon name="user" /> Registrarse
              </Link>
            </Menu.Item>
          </Sidebar>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Navbar;
