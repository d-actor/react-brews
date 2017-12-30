import axios from 'axios';
import { setFlash } from './flash';

const setBeers = (beers) => {
  return { type: 'SET_BEERS', beers }
}

export const fetchBeers = () => {
  return dispatch => {
    axios.get(`/api/all_beers`)
      .then( res => {
        dispatch(setBeers(res.data))
        console.log(res.data);
      })
      .catch( err => {
        dispatch(setFlash('Error fetching beers.'))
    });
  }
}