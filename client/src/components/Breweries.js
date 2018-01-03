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
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import noImage from '../images/noImage.png';
import axios from 'axios';

class Breweries extends React.Component {
  state = { page: 1, hasMore: true };
  
  componentDidMount() {
    this.props.dispatch(fetchBreweries());
  }

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
            <Link to ={`/brewery/${brewery.id}`}>
              View Details
            </Link>
          </Card.Content>
          <Card.Content extra>
            { this.breweryStats(brewery)}
          </Card.Content>
        </Card>
      )
    })
  }

  loadFunc = () => {
    axios.get(`/api/all_breweries?page=${this.state.page + 1 }`)
      .then( res => {
        this.props.dispatch({ type: 'MORE_BREWERS', breweries: res.data.entries })
        this.setState({ page: this.state.page + 1, hasMore: res.data.has_more })
      })
      .catch( err => {
        console.log(err)
    });
  }

  render() {
    const { page, hasMore } = this.state;

    return(
      <Container>
        <Segment basic>
          <Header textAlign='center' as='h1' inverted>Breweries.</Header>
          <InfiniteScroll
              pageStart={page} 
              loadMore={this.loadFunc}
              hasMore={hasMore}
              loader={<div className="loader">Loading ...</div>}
              useWindow={false}
          >
            <Card.Group stackable itemsPerRow={3}>
              { this.displayBreweries() }
            </Card.Group>
          </InfiniteScroll>
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

