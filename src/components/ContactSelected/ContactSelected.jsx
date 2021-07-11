import React from 'react';
import styles from './ContactSelected.module.scss';
import {UserShape} from "../../shapes/UserShape";

const ContactSelected = ({selectedContact}) => {
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

ContactSelected.propTypes = {
    selectedContact: UserShape,
};

export default ContactSelected;
