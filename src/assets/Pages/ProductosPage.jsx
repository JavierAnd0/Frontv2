import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Header2 from '../Components/Header';
import Footer from '../Components/Footer';
import Productos from '../Components/Productos';

const ProductosPage = () => {
  const products = [
    { name: 'Producto 1', price: '$10', description: 'Descripción del producto 1', imageUrl: 'https://www.ceupe.com/images/easyblog_articles/3461/b2ap3_amp_productos-en-carrito-de-compra.jpg' },
    { name: 'Producto 2', price: '$20', description: 'Descripción del producto 2', imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2473679695/display_1500/stock-photo-natural-organic-honey-in-glass-jar-honey-dipper-and-honeycombs-are-near-natural-food-background-2473679695.jpg' },
    { name: 'Producto 2', price: '$20', description: 'Descripción del producto 2', imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2473679695/display_1500/stock-photo-natural-organic-honey-in-glass-jar-honey-dipper-and-honeycombs-are-near-natural-food-background-2473679695.jpg' },
    { name: 'Producto 2', price: '$20', description: 'Descripción del producto 2', imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2473679695/display_1500/stock-photo-natural-organic-honey-in-glass-jar-honey-dipper-and-honeycombs-are-near-natural-food-background-2473679695.jpg' },
    { name: 'Producto 2', price: '$20', description: 'Descripción del producto 2', imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2473679695/display_1500/stock-photo-natural-organic-honey-in-glass-jar-honey-dipper-and-honeycombs-are-near-natural-food-background-2473679695.jpg' },
  ];

  return (
    <>
      <Header2 />

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