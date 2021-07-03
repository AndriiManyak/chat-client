import React from 'react';
import MessagesList from "../MessagesList";
import MessageForm from "../MessageForm";
import styles from './MessagesController.module.scss';

const MessagesController = () => {
    return (
        <div className={styles.controller}>
            <MessagesList/>
            <MessageForm/>
        </div>
    );
};

export default MessagesController;
