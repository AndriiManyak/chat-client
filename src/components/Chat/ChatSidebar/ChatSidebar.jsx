import React from 'react';
import ContactsList from "../../ContactsList";
import ContactsController from "../../ContactsController";
import {sidebar} from '../Chat.module.scss';

const ChatSidebar = () => {
    return (
        <aside className={sidebar}>
            <ContactsController/>
            <ContactsList/>
        </aside>
    );
};

export default ChatSidebar;
