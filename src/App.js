import React, {useEffect} from 'react';
import './App.scss';
import socketCreation from "./utils/socketCreation";

const App = () => {
    useEffect(() => {
        connectToRoom();
    }, []);

    const connectToRoom = () => {
        const socket = socketCreation();
        socket.emit('join_room', 'chat');
        console.log('joined');
    };

    return (
        <div className="App">
        </div>
    );
};

export default App;
