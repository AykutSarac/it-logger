import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    TECHS_ERROR,
    SET_LOADING
} from '../actions/types'

export const getTechs = () => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response
        })
    }
}

export const addTech = (tech) => async (dispatch) => {
    try {
        
        await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        dispatch({
            type: ADD_TECH,
            payload: tech
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response
        })
    }
}

export const deleteTech = (id) => async (dispatch) => {
    try {

        await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response
        })
    }
}

// Set loading true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}