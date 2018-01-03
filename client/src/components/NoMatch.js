import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import beerIcon from '../images/beerIcon.png';
import noMatch from '../images/noMatch.jpg';

class NoMatch extends Component {
  render() {
    return(
      <Segment basic style={styles.fullHeight}>
        <Segment basic textAlign='center'>
          <Image style={styles.centered} size='tiny' src={beerIcon} alt='DevPoint Studios Logo' />
        </Segment>
        <Image centered size='big' src={noMatch} />
        <Header as='h1' textAlign='center' inverted>
          404 Bruh, Time For A Beer Run!
          <br />
          <Link to='/'>Go Home</Link>
        </Header>
      </Segment>
    );
  }
}

const styles = {
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#96CDCD'
  },
  fullHeight: {
    height: '100vh',
  },
}

export default NoMatch;
