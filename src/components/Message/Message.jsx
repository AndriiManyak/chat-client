import React, {useEffect, useRef} from 'react';
import styles from './Message.module.scss';
import cn from "classnames";

// eslint-disable-next-line react/prop-types
const Message = ({type, author, time, text}) => {
    const messageRef = useRef();

    useEffect(() => {
        if (messageRef.current) messageRef.current.scrollIntoView({behavior: 'smooth'});
    });

    return (
        <div
            className={cn(
                styles.message,
                {
                    [styles.sent]: type === 'sent',
                    [styles.received]: type === 'received',
                }
            )}
            ref={messageRef}
        >
            <div className={styles.header}>
                {/* eslint-disable-next-line react/prop-types */}
                <p className={styles.userName}>{author.name}</p>
                {/* eslint-disable-next-line react/prop-types */}
                <p className={styles.time}>{time}</p>
            </div>

            <p className={styles.text}>
                {text}
            </p>
        </div>
    );
};

export default Message;
