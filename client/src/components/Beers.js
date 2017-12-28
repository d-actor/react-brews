import React from 'react';
import {
  Header,
  Segment,
  Container,
  Card,
  Grid,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class Beers extends React.Component {
  state = { beers: [], page: 1 }

  // no redux 
  // componentDidMount() {
  //   this.allIPAs();
  // }

  // allIPAs = () => {
  //   axios.get('api/all_beers')
  //     .then( res => res.json() )
  //     .then( beers => this.setState({ beers }) )
  // }
  

  componentWillMount() {
    this.fetchBeers(this.props);
  }

  fetchBeers = (props) => {
    axios.get('/api/all_beers?page=1')
      .then( res => {
        console.log(res.data)
      })
      .catch( err => {
        console.log(err)
    });
  }

  beerStats = (beer) => {
    return(
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} style={{ textAlign: 'center'}}>
            ABV: {beer.abv}
          </Grid.Column>
          <Grid.Column width={8} style={{ textAlign: 'center'}}>
            IBUs: {beer.ibu}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  displayBeers = () => {
    const { beers } = this.state;
    return beers.map( beer => {
      return(
        <Card>
          <Card.Content>
            <Card.Header>
              {beer.nameDisplay}
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