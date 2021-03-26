import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
} from '../actions/types';

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

const logReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload]
            }

        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload)
            }

        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            }

        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }

        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case LOGS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }

        default:
            return state;
    }
}

export default logReducer;