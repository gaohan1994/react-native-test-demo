import * as types from '../constants/ActionTypes'

const initialState = {
  obj: {},
  arr: [],
}

const Song = (state = initialState.obj, action) => {
  switch (action.type) {

  case types.CHECK_SONG:
    return action.data

  default:
    return state
  }
}
export default Song