import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    TECHS_ERROR,
    SET_LOADING
} from '../actions/types'

const initialState = {
    techs: null,
    error: null,
    loading: false
}

const techReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }

        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload]
            }

        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload)
            }

        case TECHS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}

export default techReducer;