import io from 'socket.io-client';
const CONNECTION_PORT = process.env.NODE_ENV === 'production' ? 'https://immense-eyrie-03835.herokuapp.com/': 'localhost:5000/';

const createSocket = (handshakeQueryData) => io(CONNECTION_PORT, {
    query : handshakeQueryData,
});

export default createSocket;
