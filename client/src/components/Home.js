import React, { Component } from 'react';
import { 
  Header, 
  Segment, 
  Divider, 
  Grid, 
  Image, 
  Container,
} from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import beerIcon from '../images/beerIcon.png';
import beerStock from '../images/beer.jpg';
import noImage from '../images/noImage.png';

class Home extends Component {
  state = { beerSpotlight: '', breweries: [], brewerySpotlight: '' };

  componentDidMount() {
    axios.get('/api/random_beer')
      .then(res => {
        this.setState({ beerSpotlight: res.data })
        console.log(res.data)
      })
      .catch( error => {
        console.log(error.response);
    });
    axios.get(`api/all_breweries?page=151`)
      .then(res => {
        this.setState({ breweries: res.data.entries })
        console.log(res.data)
      })
      .catch( error => {
        console.log(error.response);
    });
  }

  render() {
    const { beerSpotlight, breweries } = this.state;

    return(
      <Segment basic>
        <Segment basic textAlign='center'>
          <Image style={styles.centered} size='tiny' src={beerIcon} alt='DevPoint Studios Logo' />
          <Header as='h1' style={styles.header}>Beer</Header>
          <Header as='h3' style={styles.header}>Without beer, life would be a mistake.</Header>
          <Header as='h5' style={styles.header}>-Friederich Nietzsche</Header>
        </Segment>
        <Grid>
          <Container>
          <Grid.Column computer={12} tablet={12} mobile={16}>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  Beer Spotlight:
              </Header>
              <Divider />
              <Grid.Row>
                <Header as='h3' style={styles.header} textAlign='center'>{beerSpotlight.name}</Header>
              </Grid.Row>
              <Grid.Row>
                {beerSpotlight.description}
                <hr />
                Organic? - {beerSpotlight.is_organic}
              </Grid.Row>
                <Image src={ beerSpotlight.labels? beerSpotlight.labels.medium : beerStock } />
              <Grid.Row>
                <Grid.Column width={8} style={{ textAlign: 'center'}}>
                  ABV: { beerSpotlight.abv? beerSpotlight.abv : 'N/A'} 
                  %
                </Grid.Column>
                <Grid.Column width={8} style={{ textAlign: 'center'}}>
                  IBUs: {beerSpotlight.ibu? beerSpotlight.ibu : 'N/A'}
                </Grid.Column>
              </Grid.Row>
            </Segment>
          </Grid.Column>
          </Container>
          {/* <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  Random Breweries
              </Header>
              <Divider />
              <Grid.Row>
                <Header as='h3' style={styles.header} textAlign='center'>{brewery.name}</Header>
              </Grid.Row>
            </Segment>
          </Grid.Column> */}
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh'
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#96CDCD'
  }
}

export default Home;
