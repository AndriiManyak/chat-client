import React from 'react';
import Message from "../Message";
import styles from './MessagesList.module.scss';
import {useSelector} from "react-redux";
import defineTypeOfMessage from "../../utils/defineTypeOfMessage";
import {getCurrentUser, getMessages} from "../../redux/rootReducer";

const MessagesList = () => {
    const messages = useSelector(getMessages);
    const currentUser = useSelector(getCurrentUser);

    return (
        <div className={styles.list}>
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
