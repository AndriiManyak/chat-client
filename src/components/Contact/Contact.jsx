import React from 'react';
import botImage from '../../assets/bot_1.jpg';
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <img
                src={botImage}
                alt={""}
                className={styles.image}
            />

            <div className={styles.information}>
                <p className={styles.name}>name</p>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam eu consectetur tortor. Nulla facilisi. Nullam.
                </p>
            </div>
        </div>
    );
};

export default Contact;
