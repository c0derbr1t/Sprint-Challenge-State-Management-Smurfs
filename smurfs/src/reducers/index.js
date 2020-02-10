// Reducer index.js
const initialState= {
    isLoading: false,
    addLoading: false,
    smurfs: null,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_SMURFS_START":
            return {
                ...state,
                isLoading: true
            };
        case "FETCHING_SMURFS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case "FETCHING_SMURFS_FAILED":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case "ADDING_SMURF_START":
            return {
                ...state,
                addLoading: true,
            }
        case "ADDING_SMURF_SUCCESS":
            // debugger;
            return {
                ...state,
                addLoading: false,
                smurfs: action.payload
            }
        default:
            return state;
    }
};