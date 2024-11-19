import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DescriptionBannerTeam from '../Components/StateTeam';
import Team from '../Components/Team';
import DescriptionBannerCompany from '../Components/StateCompany';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';

import bannerState from '../img/banner1.jpg';
const bannerView = [bannerState];

import bannerCompany from '../img/Fondopasillo.png';
const bannerView2 = [bannerCompany];

const SobreNosotrosPage = () => {
  return (
    <>
    <Navbar/>
    <Header as="h1" textAlign="center"
      style={{ marginTop: '40px', marginBottom: '20px', color: '#FF6600', 
        fontSize: '2.5em', fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', 
        letterSpacing: '1px', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px' 
      }}> Sobre Nuestro Equipo
    </Header>
    <DescriptionBannerTeam banner={bannerView} />
    <Header as="h1" textAlign="left"
      style={{ marginTop: '40px', marginBottom: '20px', color: '#FF6600', 
        fontSize: '2.5em', fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', 
        letterSpacing: '1px', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px' 
      }}> Nuestro Equipo
    </Header>
    <Team />
    <Header as="h1" textAlign="center"
      style={{ marginTop: '40px', marginBottom: '20px', color: '#FF6600', 
        fontSize: '2.5em', fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', 
        letterSpacing: '1px', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px' 
      }}> Sobre Nuestra Empresa
    </Header>
    <DescriptionBannerCompany banner={bannerView2} />
    <Container fluid style={{ backgroundColor: '#fff', padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Header
          as="h1"
          style={{
            fontSize: '2.5rem',
            color: '#ff6600',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          Nuestra Historia
        </Header>
      </div>
      <Grid centered stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Segment basic textAlign="justify" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              <p textAlig="justify">
                The Home Depot es una empresa minorista que se dedica al mejoramiento del hogar y nació gracias a la idea de
                sus fundadores, Bernie Marcus y Arthur Blank. Ambos compartían una visión revolucionaria: ofrecer una experiencia única para que los consumidores no solo compraran productos, sino también aprendieran a usarlos para mejorar sus hogares.
              </p>
              <p textAlig="justify">
                La primera tienda abrió sus puertas en 1979 en Atlanta, Georgia. Fue un momento histórico, ya que rompió con los esquemas tradicionales del mercado al introducir el concepto de <b>"Hágalo usted mismo"</b>, permitiendo a los clientes asumir el control de sus propios proyectos de mejora del hogar.
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic textAlign="justify" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              <p textAlig="justify">
                Con el paso del tiempo, The Home Depot creció exponencialmente, transformándose en un referente global en el sector del bricolaje y el mejoramiento del hogar. Su filosofía se basa en la innovación, el servicio al cliente y el compromiso con la comunidad.
              </p>
              <p textAlig="justify"> 
                Además, la compañía se ha destacado por su enfoque en la sostenibilidad, promoviendo prácticas responsables tanto en sus operaciones como en los productos que ofrece, inspirando a millones de clientes a construir un futuro más ecológico y eficiente.
              </p>
              <p textAlig="justify">
                Hoy en día, The Home Depot cuenta con miles de tiendas alrededor del mundo y sigue siendo líder en su industria, manteniendo intactos los valores que la vieron nacer.
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Footer />
    </>
  )
}

export default SobreNosotrosPage