import {
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL,
    GET_SMURF_SUCCESS,
    GET_SMURF_FAIL
} from '../actions/index';

export const initialState = {
    villagers: []
}

export const smurfReducer = (state = initialState, action) => {
    console.log("In smurfReducer", state);
    switch(action.type) {
        case ADD_SMURF_SUCCESS: {
            console.log("Successfully added Smurf", state);
            return {
                ...state,
                villagers: action.payload
            }
        }

        case GET_SMURF_SUCCESS: {
            return {
                ...state,
                villagers: action.payload
            }
        }
        
        default: return state;
    }
}