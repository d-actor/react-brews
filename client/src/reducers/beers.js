const beers = (state = [], action) => {
  switch(action.type) {
    case 'SET_BEERS':
      return action.beers
    case 'MORE_BEER':
      return [...state, ...action.beers]
    default:
      return state;
  }
}

export default beers;