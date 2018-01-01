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
import noImage from '../images/noImage.png';

class Breweries extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchBreweries());
  }

  // add n/a if/else on this and beers stats
  breweryStats = (brewery) => {
    return(
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} style={{ textAlign: 'center' }}>
           Est. { brewery.established? brewery.established : 'N/A' }
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
                <Grid.Column width={16}>
                  <Image src={ brewery.images? brewery.images.medium : noImage } />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Card.Meta>
              <span>
                {brewery.website}
              </span>
            </Card.Meta>
            <Card.Description style={styles.description}>
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

const styles = {
  description: {
    height: '200px',
    overflow: 'auto',
  }
}

const mapStateToProps = (state) => {
  return{
    breweries: state.breweries,
  }
}

export default connect(mapStateToProps)(Breweries);

