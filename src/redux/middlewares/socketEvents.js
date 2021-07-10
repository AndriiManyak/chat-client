import {addContacts, addMessage, addMessages, setUser} from "../actions/chatActions";
import {RECEIVE_CONTACTS, RECEIVE_MESSAGE, RECEIVE_MESSAGES, RECEIVE_USER} from "../actionConsts";


const onContactsReceive = store => contacts => {
    store.dispatch(addContacts(contacts));
};

const onMessageReceive = store => message => {
    store.dispatch(addMessage(message));
};

const onMessagesReceive = store => messages => {
    store.dispatch(addMessages(messages));
};

const onUserReceive = store => user => {
    store.dispatch(setUser(user));
    localStorage.setItem('userInfo', JSON.stringify(user));
};

const socketEvents = [
    {
        event: RECEIVE_CONTACTS,
        handler: onContactsReceive,
    },
    {
        event: RECEIVE_USER,
        handler: onUserReceive,
    },
    {
        event: RECEIVE_MESSAGE,
        handler: onMessageReceive,
    },
    {
        event: RECEIVE_MESSAGES,
        handler: onMessagesReceive,
    },
];

export default socketEvents;
