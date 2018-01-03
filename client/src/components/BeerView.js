import React from 'react';
import { connect } from 'react-redux';
import {
  Divider,
  Header,
  Image,
  Container,
  Table,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BeerView = ({ beer = {} }) => (
  <Container>
    <Link to ='/beers'>All Beers</Link>
  </Container>
)

export default connect()(BeerView);