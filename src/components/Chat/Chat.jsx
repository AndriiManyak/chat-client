import React from 'react';
import ChatBody from "./ChatBody";
import ChatSidebar from "./ChatSidebar";
import {chat} from './Chat.module.scss';

const Chat = () => {
    return (
        <section className={chat}>
            <ChatBody/>
            <ChatSidebar/>
        </section>
    );
};

export default Chat;
