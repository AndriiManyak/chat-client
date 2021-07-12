import {
    ADD_CONTACTS,
    ADD_MESSAGE,
    ADD_MESSAGES,
    SELECT_CONTACT, SET_CONTACT_TYPING,
    SET_USER
} from "./actionConsts";


export const setUser = user => ({
    type: SET_USER,
    payload: user,
});

export const addContacts = contacts => ({
    type: ADD_CONTACTS,
    payload: contacts,
});

export const addMessage = message => ({
    type: ADD_MESSAGE,
    payload: message,
});

export const addMessages = messages => ({
    type: ADD_MESSAGES,
    payload: messages,
});

export const selectContact = contact => ({
    type: SELECT_CONTACT,
    payload: contact,
});

export const setContactIsTyping = isTyping => ({
    type: SET_CONTACT_TYPING,
    payload: isTyping,
});
