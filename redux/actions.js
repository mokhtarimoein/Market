import * as types from './types'
import { get } from '../services/RequestMaker'
import BaseURL from '../services/BaseURL'


export const getMainRequest = () => ({
    type: types.GET_MAIN_REQUEST
})

export const getMainSuccess = (json) => ({
    type: types.GET_MAIN_SUCCESS,
    payload: json
})

export const getMainFailure = (error) => ({
    type: types.GET_MAIN_FAILURE,
    payload: error
})

export const getMainData = () => {
    return async dispatch => {

        dispatch(getMainRequest())

        try {
            const response = await get(BaseURL.MAIN)
            dispatch(getMainSuccess(response))
        } catch (error) {
            dispatch(getMainFailure(`ERROR: ${_.replace(error, '"', '')}`))
        }
    }
}
