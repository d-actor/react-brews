import axios from 'axios';
import { setFlash } from './flash';

const setBeers = (beers) => {
  return { type: 'SET_BEERS', beers: beers }
}

export const fetchBeers = (page = 1) => {
  const currentPage = `?page=${page}&per_page=12`
  return dispatch => {
    axios.get(`/api/all_beers${currentPage}`)
      .then( res => {
        dispatch(setBeers(res.data.entries))
        page += 1
        console.log(res.data)
      })
      .catch( err => {
        dispatch(setFlash('Error fetching beers.'))
        console.log(err)
    });
  }
}