import io from 'socket.io-client';
const CONNECTION_PORT = 'localhost:3001/';


const createSocket = (handshakeQueryData) => io(CONNECTION_PORT, {
    query : handshakeQueryData,
});

export default createSocket;
