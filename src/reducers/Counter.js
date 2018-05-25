const initialState = {
}

const Counter = (state = initialState, action) => {
  switch (action.type) {

  case 'typeName':
    return { ...state }

  default:
    return state
  }
}

export default Counter