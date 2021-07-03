import React, {useEffect} from 'react';
import './App.module.scss';
import socketCreation from "./utils/socketCreation";
import Header from "./components/Header";
import Chat from "./components/Chat";
import cn from "classnames";
import styles from './App.module.scss';

const App = () => {
    useEffect(() => {
        connectToRoom();
    }, []);

    const connectToRoom = () => {
        const socket = socketCreation();
        socket.emit('join_room', 'chat');
    };

    return (
        <div className={styles.app}>
            <Header/>
            <main className={cn(styles.main, 'container')}>
                <Chat/>
            </main>
        </div>
    );
};

export default App;
