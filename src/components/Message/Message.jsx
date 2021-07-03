import React from 'react';
import styles from './Message.module.scss';
import cn from "classnames";

const Message = ({type}) => {
    return (
        <div
            className={cn(
                styles.message,
                {
                    [styles.sent]: type === 'sent',
                    [styles.received]: type === 'received',
                }
            )}
        >
            <div className={styles.header}>
                <p className={styles.userName}>Reverse bot</p>
                <p className={styles.time}>14:03</p>
            </div>

            <p className={styles.text}>
                message text
            </p>
        </div>
    );
};

export default Message;
