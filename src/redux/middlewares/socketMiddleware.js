import createSocket from "../../utils/createSocket";
import {
    CONNECT_SOCKET, JOIN_CHAT,
    SEND_MESSAGE
} from "../actions/actionConsts";

import socketEvents from "./socketEvents";
import {addMessage, selectContact} from "../actions/chatActions";

const socketMiddleware = () => {
    let socket = null;

    return store => next => action => {
        switch (action.type) {
            case CONNECT_SOCKET: {
                socket = createSocket(action.payload);

                for (const socketEvent of socketEvents) {
                    socket.on(socketEvent.event, socketEvent.handler(store));
                }

                break;
            }
            case SEND_MESSAGE: {
                socket.emit(SEND_MESSAGE, action.payload);
                store.dispatch(addMessage(action.payload));

                break;
            }
            case JOIN_CHAT: {
                socket.emit(JOIN_CHAT, action.payload);
                store.dispatch(selectContact(action.payload));

                break;
            }
            default:
                return next(action);
        }
    };
};

export default socketMiddleware();
