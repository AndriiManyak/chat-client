import io from 'socket.io-client';
const CONNECTION_PORT = 'localhost:3001/';
const socketOptions = {
    extraHeaders: {
    }
};

const socketCreation = () => io(CONNECTION_PORT, socketOptions);

export default socketCreation;
