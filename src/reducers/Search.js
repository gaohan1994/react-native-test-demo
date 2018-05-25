import * as types from '../constants/ActionTypes'

const initialState = {
  obj: {},
  arr: [],
}

const Search = (state = initialState.obj, action) => {
  switch (action.type) {

  case types.RECEIVE_SEARCHDATA:
    return action.data

  default:
    return state
  }
}

export default Search;

// export const getById = (state, id) => state.Search.musics.find(item => item.id == id);
export const getById = (state, id) => (state.Search.musics.find(item => item.id === id) || 0) ;

