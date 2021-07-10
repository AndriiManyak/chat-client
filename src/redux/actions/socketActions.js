import {
    CONNECT_SOCKET,
    JOIN_CHAT,
    SEND_MESSAGE
} from "../actionConsts";

export const connectSocket = handshakeQueryData => ({
    type: CONNECT_SOCKET,
    payload: handshakeQueryData,
});

export const sendMessage = text => ({
    type: SEND_MESSAGE,
    payload: text,
});

export const joinChat = userToConnect => ({
   type: JOIN_CHAT,
   payload: userToConnect,
});
