import React from 'react';
import MessagesController from "../../MessagesController";
import ContactSelected from "../../ContactSelected";

const ChatBody = () => {
    return (
        <section className="body">
            <ContactSelected/>
            <MessagesController/>
        </section>
    );
};

export default ChatBody;
