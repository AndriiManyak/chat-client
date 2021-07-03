import React from 'react';
import ContactsList from "../../ContactsList";
import ContactsController from "../../ContactsController";

const ChatSidebar = () => {
    return (
        <aside className="sidebar">
            <ContactsController/>
            <ContactsList/>
        </aside>
    );
};

export default ChatSidebar;
