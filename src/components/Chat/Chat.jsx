import React from 'react';
import ChatBody from "./ChatBody";
import ChatSidebar from "./ChatSidebar";
import './Chat.scss';

const Chat = () => {
    return (
        <section className="chat container">
            <ChatBody/>
            <ChatSidebar/>
        </section>
    );
};

export default Chat;
