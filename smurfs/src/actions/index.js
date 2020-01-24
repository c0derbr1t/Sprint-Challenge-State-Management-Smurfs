// Actions index.js
import axios from 'axios';

export const fetchSmurfs = () => dispatch => {
        dispatch({ type: "FETCHING_SMURFS_START" });
        console.log("button clicked");
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res);
                dispatch({ type: "FETCHING_SMURFS_SUCCESS", payload: res.data })
            })
            .catch(err => {
                dispatch({ type: "FETCHING_SMURFS_FAILED", payload: err })
            })
    }

export const addSmurf = data => dispatch => {
        dispatch({ type: "ADDING_SMURF_START" });
        axios
            .post('http://localhost:3333/smurfs', data)
        .then(res => {
            dispatch({ type: "ADDING_SMURF_SUCCESS", payload: res.data })
            console.log("Post Response: ", res);
        })
        .catch(err => {
            // console.log(err);
            throw new Error(err);
        })
    };

export const errorSmurfs = error => {
    return {
        type: "FETCHING_SMURFS_FAILED",
        payload: error
    };
};