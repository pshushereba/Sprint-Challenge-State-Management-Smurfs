import axios from 'axios';

export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAIL = "GET_SMURF_FAIL";

export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const getSmurfs = () => (dispatch) => {
    return axios.get('http://localhost:3333/smurfs')
            .then((res) =>
                dispatch({type: GET_SMURF_SUCCESS, payload: res.data.data}))
            .catch((err) => dispatch({type: GET_SMURF_FAIL, payload: err}));
}

export const addSmurf = (smurf) => (dispatch) => {
    return axios.post(`http://localhost:3333/smurfs`, {
        name: smurf.name,
        height: smurf.height,
        age: smurf.age
    })
        .then((res) => dispatch({type: ADD_SMURF_SUCCESS, payload: res}))
        .catch((err) => dispatch({type: ADD_SMURF_FAIL, payload: err}));
        {
    }
}
