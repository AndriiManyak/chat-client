import React, {useEffect, useRef} from 'react';
import Message from "../Message";
import styles from './MessagesList.module.scss';
import {useSelector} from "react-redux";
import defineTypeOfMessage from "../../utils/defineTypeOfMessage";
import {getCurrentUser, getMessages} from "../../redux/rootReducer";

const MessagesList = () => {
    const list = useRef();
    const messages = useSelector(getMessages);
    const currentUser = useSelector(getCurrentUser);

    useEffect(() => {
        if (list.current) {
            list.current.scrollTop = list.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className={styles.list} ref={list}>
            {
                messages.map(message => (
                    <Message
                        key={message.id}
                        type={defineTypeOfMessage(message.author.id, currentUser.id)}
                        {...message}
                    />
                ))
            }
        </div>
    );
};

export default MessagesList;
