import {
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL
} from '../actions/index';

export const initialState = {
    name: "",
    age: "",
    height: "",
    id: null,
    smurf: {},
    villagers: []
}

export const smurfReducer = (state = initialState, action) => {
    console.log("In smurfReducer", state);
    switch(action.type) {
        case ADD_SMURF_SUCCESS: {
            console.log("Successfully added Smurf", state);
            return {
                ...state,
                smurf: action.payload
            }
        }
        
        default: return state;
    }
}