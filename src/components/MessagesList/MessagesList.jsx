import React from 'react';
import Message from "../Message";
import styles from './MessagesList.module.scss';

const MessagesList = () => {
    return (
        <div className={styles.list}>
            <Message type={'received'}/>
            <Message type={'sent'}/>
            <Message type={'sent'}/>
            <Message type={'sent'}/>
            <Message type={'sent'}/>
            <Message type={'sent'}/>

        </div>
    );
};

export default MessagesList;
