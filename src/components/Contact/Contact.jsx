/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Contact.module.scss';
import cn from "classnames";
import {useDispatch} from "react-redux";
import {joinChat} from "../../redux/actions/socketActions";

const Contact = ({contact}) => {
    const dispatch = useDispatch();

    const selectChat = contact => {
        dispatch(joinChat(contact));
    };

    return (
        <div className={styles.contact} onClick={() => selectChat(contact)}>
            <div className={cn(
                styles.imageWrapper,
                {
                    [styles.online]: contact.isOnline,
                },
            )}
            >
                <img
                    src={contact.image}
                    alt={contact.name}
                    className={styles.image}
                />
            </div>


            <div className={styles.information}>
                <p className={styles.name}>{contact.name}</p>
                <p className={styles.description}>
                    {contact.description}
                </p>
            </div>
        </div>
    );
};

export default Contact;
