import {CREATE_SOCKET} from "../actionConsts";

const initialState = {
    socket: null,
};

const socketReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SOCKET: {
            return {
                ...state,
                socket: action.payload,
            };
        }
        default: return state;
    }
};

export default socketReducer;
