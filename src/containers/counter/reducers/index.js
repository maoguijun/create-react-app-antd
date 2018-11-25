const CounterInitialState = {
  value: 0,
  stars: 0
}
const Counter = (state = CounterInitialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        value: state.value + action.value
      }
    case 'DELETE':
      return {
        ...state,
        value: state.value - action.value
      }
    case 'STAR':
      return {
        ...state,
        stars: action.value.stars
      }
    default:
      return state
  }
}
export default Counter