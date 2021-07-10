import React from 'react';
import styles from './ContactSelected.module.scss';
import {useSelector} from "react-redux";
import {getSelectedContact} from "../../redux/rootReducer";

const ContactSelected = () => {
    const selectedContact = useSelector(getSelectedContact);

    return (
        <div className={styles.contact}>
            <img
                src={selectedContact.image}
                alt={selectedContact.name}
                className={styles.image}
            />

            <div className={styles.information}>
                <p className={styles.name}>{selectedContact.name}</p>
                <p className={styles.description}>
                    {selectedContact.description}
                </p>
            </div>
        </div>
    );
};

export default ContactSelected;
