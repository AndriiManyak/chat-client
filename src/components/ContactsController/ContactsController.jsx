import React from 'react';
import styles from './ContactsController.module.scss';
import cn from 'classnames';
import PropTypes from 'proptypes';

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

ContactsController.propTypes = {
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
};

export default ContactsController;
