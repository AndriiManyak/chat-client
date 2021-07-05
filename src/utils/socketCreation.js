import io from 'socket.io-client';
const CONNECTION_PORT = 'localhost:3001/';


const socketCreation = (userInfo) => io(CONNECTION_PORT, {
    query : userInfo,
});

export default socketCreation;
