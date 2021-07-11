import io from 'socket.io-client';
const CONNECTION_PORT = 'https://immense-eyrie-03835.herokuapp.com/';

const createSocket = (handshakeQueryData) => io(CONNECTION_PORT, {
    query : handshakeQueryData,
});

export default createSocket;
