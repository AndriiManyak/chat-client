import {
    ADD_CONTACTS,
    ADD_MESSAGE,
    ADD_MESSAGES,
    SELECT_CONTACT,
    SET_CONTACT_TYPING,
    SET_USER
} from "../actions/actionConsts";

const initialState = {
    messages: [],
    contacts: [],
    selectedContact: null,
    user: {},
    isContactTyping: false,
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACTS: {
            return {
                ...state,
                contacts: action.payload
            };
        }
        case ADD_MESSAGES: {
            return {
                ...state,
                messages: action.payload,
            };
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        }
        case SET_USER: {
            return {
                ...state,
                user: action.payload,
            };
        }
        case SELECT_CONTACT: {
            return  {
                ...state,
                selectedContact: action.payload,
            };
        }
        case SET_CONTACT_TYPING: {
            return  {
                ...state,
                isContactTyping: action.payload,
            };
        }
        default: return state;
    }
};

export default chatReducer;
