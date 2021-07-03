import React, {useState} from 'react';
import styles from './MessageForm.module.scss';

const MessageForm = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        setMessage('');
    };

    const handleChange = event => {
        setMessage(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form} >
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
