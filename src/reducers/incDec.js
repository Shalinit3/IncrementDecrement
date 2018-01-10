const defaultState = [{
  value: 0
}]

const incDec = (state = defaultState, action) => {
  const value = state[state.length - 1].value
  switch (action.type) {
    case 'Increment': return [
      ...state,
      {
        value: value + 1
      }
    ]
    case 'Decrement': if (value > 0) {
      return [
        ...state,
        {
          value: value - 1
        }
      ]
    } else {
      return [
        ...state
      ]
    }
    default: return [
      ...state
    ]
  }
}

export default incDec