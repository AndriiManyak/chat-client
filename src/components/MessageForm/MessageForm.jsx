import React, {useEffect, useState} from 'react';
import styles from './MessageForm.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, sentTypingMessage} from "../../redux/actions/socketActions";
import {getCurrentUser, getIsContactTyping, getSelectedContact} from "../../redux/rootReducer";
import {v4} from "uuid";

const MessageForm = () => {
    const currentUser = useSelector(getCurrentUser);
    const selectedContact = useSelector(getSelectedContact);
    const isContactTyping = useSelector(getIsContactTyping);

    const [message, setMessage] = useState('');
    const [isCurrentUserTyping, setIsCurrentUserTyping] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        if(message.trim()) {
            const newMessage = {
                id: v4(),
                author: currentUser,
                receiver: selectedContact,
                text: message,
                time: new Date(),
            };

            dispatch(sendMessage(newMessage));
        }

        setMessage('');
    };

    useEffect(() => {
        if (!isCurrentUserTyping && message.length > 0) {
            setIsCurrentUserTyping(true);
            dispatch(sentTypingMessage());

            setTimeout(() => {
                setIsCurrentUserTyping(false);
            }, 5000);
        }
    }, [message]);

    const handleChange = event => {
        setMessage(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form} >
            {
                isContactTyping && <div className={styles.typingLabel}>{selectedContact.name} is typing...</div>
            }

            <input
                className={styles.messageInput}
                type="text"
                name="message"
                value={message}
                onChange={handleChange}
                placeholder="Start chatting!"
                autoComplete="off"
            />

            <button type="submit" className={styles.submitButton}>Send message</button>
        </form>
    );
};

export default MessageForm;
