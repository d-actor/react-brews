import React from 'react';
import {
  Header,
  Segment,
  Container,
  Card,
  Grid,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/beers';

class Beers extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchBeers());
  }

  beerStats = (beer) => {
    return(
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} style={{ textAlign: 'center'}}>
            ABV: {beer.abv} %
          </Grid.Column>
          <Grid.Column width={8} style={{ textAlign: 'center'}}>
            IBUs: {beer.ibu}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  displayBeers = () => {
    return this.props.beers.map( beer => {
      return(
        <Card>
          <Card.Content>
            <Card.Header>
              {beer.name}
              <hr />
              {beer.style.name}
            </Card.Header>
            <Card.Description>
              {beer.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            { this.beerStats(beer)}
          </Card.Content>  
        </Card>
      )
    })
  }

  render() {
    return(
      <Container>
        <Segment basic>
          <Header as='h1' inverted>Beer. It's Good For You.</Header>
          <Card.Group stackable itemsPerRow={3}>
            { this.displayBeers() }
          </Card.Group>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    beers: state.beers,
  }
}

export default connect(mapStateToProps)(Beers);