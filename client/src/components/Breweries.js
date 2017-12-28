import React from 'react';
import {
  Header,
  Segment,
  Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

class Breweries extends React.Component {
  
  render() {
    return(
      <Container>
        <Segment basic>
          <Header as='h1' inverted>Breweries.</Header>
        </Segment>
      </Container>
    )
  }
}

export default connect()(Breweries);

