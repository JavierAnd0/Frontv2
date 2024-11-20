import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Productos from '../Components/Productos';

const ProductosPage = () => {
  const products = [
    { name: 'Oficio tamaño carta en pasta', price: '$16.000', description: 'Oficio tamaño carta', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHazQ-GSzY1IGWjLKDbs0HZmZtWhruKHXAIw&s' },
    { name: 'Cuaderno norma "Escandalosos"', price: '$13.000', description: 'Cuaderno norma 100 hojas', imageUrl: 'https://elchiquitindelospreciosbajos.com/wp-content/uploads/2021/12/cuaderno-norma-cuadriculado-100-h-escandalosos-Cod.-7702111573291-min-1.jpg' },
    { name: 'Marcadores norma gigantes', price: '$25.000', description: 'Marcadores norma gigantes x12', imageUrl: 'https://todoenartes.co/17154-large_default/marcadores-lavables-gigantes-x-10-norma-.jpg' },
    { name: 'Bolso totto azul', price: '$95.000', description: 'Bolso totto azul con estampado', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_805076-MCO76112419257_042024-O.webp' },
    { name: 'Vajilla corona azul marina', price: '$120.000', description: 'Vajilla corona azul marina', imageUrl: 'https://carulla.vtexassets.com/arquivos/ids/13870565/vajilla-corona-cala-4-puestos-16-piezas.jpg?v=638337801975300000' },
    { name: 'Vajilla corona wind ', price: '$220.000', description: 'Vajilla corona color wind', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4kJZ3HHMiUcmzoIUHIAHEYlCxOvHHIQH-A&s' },
  
  ];

  return (
    <>
<Navbar />
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