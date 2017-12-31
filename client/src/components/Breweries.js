import React from 'react';
import {
  Header,
  Segment,
  Container,
  Card,
  Grid,
  Image,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchBreweries } from '../actions/breweries';

class Breweries extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchBreweries());
  }

  breweryStats = (brewery) => {
    return(
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} style={{ textAlign: 'center' }}>
            Est. {brewery.established}
          </Grid.Column>
          <Grid.Column width={8} style={{ textAlign: 'center' }}>
            Type: {brewery.brand_classification}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  displayBreweries = () => {
    return this.props.breweries.map( brewery => {
      return(
        <Card>
          <Card.Content>
            <Card.Header>
              {brewery.name}
              <hr />
            </Card.Header>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image src={ brewery.squareMedium } />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Card.Meta>
              <span>
                {brewery.website}
              </span>
            </Card.Meta>
            <Card.Description>
              {brewery.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            { this.breweryStats(brewery)}
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    return(
      <Container>
        <Segment basic>
          <Header as='h1' inverted>Breweries.</Header>
          <Card.Group stackable itemsPerRow={3}>
            { this.displayBreweries() }
          </Card.Group>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    breweries: state.breweries,
  }
}

export default connect(mapStateToProps)(Breweries);

