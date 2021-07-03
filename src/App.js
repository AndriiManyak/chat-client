import React, {useEffect} from 'react';
import './App.scss';
import socketCreation from "./utils/socketCreation";
import Header from "./components/Header";
import Chat from "./components/Chat";

const App = () => {
    useEffect(() => {
        connectToRoom();
    }, []);

    const connectToRoom = () => {
        const socket = socketCreation();
        socket.emit('join_room', 'chat');
    };

    return (
        <div className="App">
            <Header/>
            <Chat/>
        </div>
    );
};

export default App;
