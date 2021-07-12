import {addContacts, addMessage, addMessages, setContactIsTyping, setUser} from "../actions/chatActions";
import {
    RECEIVE_CONTACTS,
    RECEIVE_MESSAGE,
    RECEIVE_MESSAGES,
    RECEIVE_TYPING_MESSAGE,
    RECEIVE_USER
} from "../actions/actionConsts";


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

const onTypingMessageReceive = store => {
    let typingTimeout;

    return () => {
        store.dispatch(setContactIsTyping(true));

        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        typingTimeout = setTimeout(() => {
            store.dispatch(setContactIsTyping(false));
        }, 5000);
    };
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
    {
        event: RECEIVE_TYPING_MESSAGE,
        handler: onTypingMessageReceive,
    }
];

export default socketEvents;
