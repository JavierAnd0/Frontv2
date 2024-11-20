import React from 'react';
import { Grid, Card, Image} from 'semantic-ui-react';
import '../../css/Team.css'; // Para agregar CSS personalizado si es necesario
import Persona1 from '../img/person1.jpg';
import Persona2 from '../img/person2.jpg';
import Persona3 from '../img/person3.jpg';
import Persona4 from '../img/person4.jpg';


const Team = () => {
    return (
      <div className="team-container" style={{ padding: "20px" }}>
        <Grid columns={4} doubling stackable>
          <Grid.Column>
            <Card>
              <Image src={Persona1} wrapped ui={false} alt="Carlos Sánchez" />
              <Card.Content>
                <Card.Header>Carlos Sánchez</Card.Header>
                <Card.Meta>Jefe de Almacén</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
  
          <Grid.Column>
            <Card>
              <Image src={Persona2} wrapped ui={false} alt="Javier Rodríguez" />
              <Card.Content>
                <Card.Header>Javier Rodríguez</Card.Header>
                <Card.Meta>Encargado de Ventas</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
  
          <Grid.Column>
            <Card>
              <Image src={Persona3} wrapped ui={false} alt="Miguel Fernández" />
              <Card.Content>
                <Card.Header>Miguel Fernández</Card.Header>
                <Card.Meta>Asistente de Inventario</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
  
          <Grid.Column>
            <Card>
              <Image src={Persona4} wrapped ui={false} alt="Lucía Morales" />
              <Card.Content>
                <Card.Header>Lucía Morales</Card.Header>
                <Card.Meta>Atención al Cliente</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  };
  
  export default Team;