import React, {useEffect} from 'react';
import './App.module.scss';
import Header from "./components/Header";
import Chat from "./components/Chat";
import cn from "classnames";
import styles from './App.module.scss';
import {useDispatch} from "react-redux";
import {connectSocket} from "./redux/actions/socketActions";
import {setUser} from "./redux/actions/chatActions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        connectToMessenger();
    }, []);

    const connectToMessenger = () => {
        const userInfoFromLocalStorage = localStorage.getItem('userInfo');
        let userInfo;

        if(userInfoFromLocalStorage) {
            userInfo = JSON.parse(userInfoFromLocalStorage);
        }

        dispatch(setUser(userInfo));
        dispatch(connectSocket(userInfo));
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
