const add = (state = {
  value: 0
}, action) => {
  console.log(2, action)
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        value: state.value + action.value
      }
    case 'DELETE':
      return {
        ...state,
        value: state.value - action.value
      }

    default:
      return state
  }
}
export default add