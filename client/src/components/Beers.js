import React from 'react'
import {
  Header,
  Segment,
  Container,
  Card,
  Image,
} from 'semantic-ui-react';

class Beers extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchBeers());
  }

  displayBeers = () => {
    return this.props.beers.map( beer => {
      return(

      )
    })
  }

  render() {
    return(
      <Container>
        <Segment basic>
          <Header as='h1' inverted>Beer. It's Good For You.</Header>
          <
        </Segment>
      </Container>
    )
  }
}

export default Beers;