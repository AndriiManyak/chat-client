import React, {useState} from 'react';
import styles from './ContactsController.module.scss';
import cn from 'classnames';

const ContactsController = () => {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <div className={styles.controller}>
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
        </div>
    );
};

export default ContactsController;
