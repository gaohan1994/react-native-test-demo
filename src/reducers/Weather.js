import * as ActionTypes from '../constants/ActionTypes'
const initialState = [];

const Weather = (state = initialState, action) => {
    switch (action.type) {

    case ActionTypes.RECEIVE_WEATHER :
        return action.data;

    default:
        return state
    }
}

export default Weather