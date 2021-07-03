import React from 'react';
import ContactsList from "../../ContactsList";
import ContactsController from "../../ContactsController";
import ContactsSearch from "../../ContactsSearch";
import styles from '../Chat.module.scss';

const ChatSidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarTop}>
                <ContactsController/>
                <ContactsList/>
            </div>

            <ContactsSearch/>
        </aside>
    );
};

export default ChatSidebar;
