import * as ActionTypes from '../constants/ActionTypes'
const initialState = 'home'

export default (state = initialState, action) => {
  switch (action.type) {

  case ActionTypes.CHANGE_TOOLBAR:
  console.log(action)
    return action.data;

  default:
    return state
  }
}
