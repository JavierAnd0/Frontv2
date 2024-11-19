import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Productos from '../Components/Productos';
import CarouselPro from '../Components/CarouselPro';
import Martillo from '../img/martillo.jpg';
import Alicate from '../img/Alicate.jpg';
import Destornillador from '../img/Destornillador.jpg';
import Tornillo from '../img/Tornillo.jpeg';
import Pegante from '../img/Pegante.jpg';
import Metro from '../img/Metro.jpg';
import LlavePVC from '../img/LlavePVC.jpeg';
import Codo from '../img/Codo.jpeg';
import Sellante from '../img/Sellante.jpeg';
import Extension from '../img/Extension.jpeg';
import Foco from '../img/Foco.jpg';
import Cinta from '../img/Cinta.jpg';


const ProductosPage = () => {
  const products = [
    { name: 'Martillo de 16 oz', price: '$35,000', description: 'Martillo con mango de fibra y cabeza de acero templado, ideal para trabajos de carpintería y construcción.', imageUrl: Martillo },
    { name: 'Juego de destornilladores 6 piezas', price: '$45,000', description: 'Set de destornilladores de punta plana y cruz, fabricados en acero al cromo vanadio para mayor durabilidad.', imageUrl: Destornillador },
    { name: 'Alicates universales 8 pulgadas', price: '$30,000', description: 'Alicates con mango ergonómico y recubrimiento antideslizante, adecuados para trabajos eléctricos y mecánicos.', imageUrl: Alicate },
    { name: 'Tornillos para madera (paquete de 100)', price: '$$15,000', description: 'Tornillos de acero galvanizado con cabeza estrella, ideales para proyectos de carpintería.', imageUrl: Tornillo },
    { name: 'Pegante epóxico de dos componentes (40 g)', price: '$20,000', description: 'Adhesivo de alta resistencia para unir metal, cerámica, madera o plástico.', imageUrl: Pegante },
    { name: 'Cinta métrica de 5 metros', price: '$18,000', description: 'Cinta métrica retráctil con carcasa de plástico resistente y medida en centímetros y pulgadas.', imageUrl: Metro },
    { name: 'Llave de paso 1/2 pulgada', price: '$10,000', description: 'Llave de paso de PVC resistente, diseñada para sistemas de agua fría y caliente.', imageUrl: LlavePVC },
    { name: 'Codo de PVC 90 grados (1/2 pulgada)', price: '$5,000', description: 'Accesorio para redireccionar tuberías, fabricado en PVC duradero.', imageUrl: Codo },
    { name: 'Sellante de tuberías 50 g', price: '$12,000', description: 'Pasta sellante a prueba de fugas para uniones de tuberías en instalaciones hidráulicas.', imageUrl: Sellante },
    { name: 'Extensión eléctrica 3 metros', price: '$25,000', description: 'Extensión con tres entradas y protector contra sobrecargas, ideal para uso doméstico.', imageUrl: Extension },
    { name: 'Foco LED 9W', price: '$10,000', description: 'Bombillo LED de luz blanca, con bajo consumo energético y vida útil de 15,000 horas.', imageUrl: Foco },
    { name: 'Cinta aislante 10 m', price: '$8,000', description: 'Cinta aislante de PVC para uso eléctrico, resistente a altas temperaturas.', imageUrl: Cinta },
];

  return (
    <>
<Navbar />
      
<div style={{ borderBottom: '1px solid #ccc', margin: '20px 0' }} />
      <CarouselPro />
      <Header as="h1" textAlign="center" style={{ marginTop: '20px' }}>
        Productos Disponibles
      </Header>
      <Grid container columns={3} stackable>
        {products.map((product, index) => (
          <Grid.Column key={index} style={{ marginTop: '20px' }}>
            <Productos
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          </Grid.Column>
        ))}
      </Grid>
      <Footer />
    </>
  );
};

export default ProductosPage;