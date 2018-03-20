
const defaultState = []

export default function posts(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_DATA_RETRIEVED": {
      return {...state, posts: action.payload}
      break;
    }
    case "FETCH_DATA_REJECTED": {
      return {...state}
      break;
    }
    default:
      return state
  }
}
