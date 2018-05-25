import * as ActionTypes from '../constants/ActionTypes'

export const Receive_Weather = (data) => ({
    type: ActionTypes.RECEIVE_WEATHER,
    data: data,
})

export const Change_Toolbar = (data) => ({
    type: ActionTypes.CHANGE_TOOLBAR,
    data: data,
})

export const Receive_SearchData = (data) => ({
    type: ActionTypes.RECEIVE_SEARCHDATA,
    data: data,
})

export const Check_Song = (data) => ({
    type: ActionTypes.CHECK_SONG,
    data: data,
})