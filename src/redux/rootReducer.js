import {combineReducers} from 'redux';
import chatReducer from "./reducers/chatReducer";

export const getCurrentUser = state => state.chatReducer.user;
export const getSelectedContact = state => state.chatReducer.selectedContact;
export const getContacts = state => state.chatReducer.contacts;
export const getMessages = state => state.chatReducer.messages;

const rootReducer = combineReducers({
    chatReducer,
});

export default rootReducer;
