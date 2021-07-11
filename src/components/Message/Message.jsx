import React, {useEffect, useRef} from 'react';
import styles from './Message.module.scss';
import cn from "classnames";
import PropTypes from 'proptypes';
import {UserShape} from "../../shapes/UserShape";
import parseTime from "../../utils/parseTime";

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
                <p className={styles.userName}>{author.name}</p>
                <p className={styles.time}>{parseTime(time)}</p>
            </div>

            <p className={styles.text}>
                {text}
            </p>

            {
                type === 'sent' && <div className={styles.seenLabel}>Seen 4:24pm</div>
            }
        </div>
    );
};

Message.propTypes = {
    type: PropTypes.string.isRequired,
    author: UserShape,
    time: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    text: PropTypes.string.isRequired,
};

export default Message;
