import React from 'react';
import styles from './ContactsController.module.scss';
import cn from 'classnames';

// eslint-disable-next-line react/prop-types
const ContactsController = ({activeTab, setActiveTab}) => {
    return (
        <div className={styles.controller}>
            <div
                className={cn(
                    styles.tab,
                    {
                        [styles.active]: activeTab === 'online',
                    },
                )}
                onClick={() => setActiveTab('online')}
            >
                online
            </div>

            <div
                className={cn(
                    styles.tab,
                    {
                        [styles.active]: activeTab === 'all',
                    },
                )}
                onClick={() => setActiveTab('all')}
            >
                all
            </div>
        </div>
    );
};

export default ContactsController;
