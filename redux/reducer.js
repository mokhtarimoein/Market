import * as types from './types'

const initialState = {
    isBusy: false,
    data: null,
    errorMessage: null
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MAIN_REQUEST:
            return { ...state, isBusy: true }
        case types.GET_MAIN_SUCCESS:
            return { ...state, isBusy: false, data: action.payload, errorMessage: null }
        case types.GET_MAIN_FAILURE:
            return { ...state, isBusy: false, errorMessage: action.payload }
        default:
            return state
    }
}