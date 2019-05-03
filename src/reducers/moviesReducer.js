export default function movies(state = [], action) {
  switch (action.type) {
    case 'MOVIES_RECEIVED':
      return []
    default:
      return state
  }
}