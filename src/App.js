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
        const userInfoFromLocalStorage = localStorage.getItem('userInfo');
        let userInfo;

        if(userInfoFromLocalStorage) {
            userInfo = JSON.parse(userInfoFromLocalStorage);
        }

        console.log('before socket creation', userInfo);
        const socket = socketCreation(userInfo);

        socket.emit('join_messenger', userInfo);

        socket.on('receive_list_of_contacts', contacts => {
            console.log(contacts);
        });

        socket.on('receive_created_user_info', userInfo => {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        });
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
