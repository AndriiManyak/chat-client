import React from 'react';
import ChatBody from "./ChatBody";
import ChatSidebar from "./ChatSidebar";
import cn from "classnames";
import {chat} from './Chat.module.scss';

const Chat = () => {
    return (
        <section className={cn(chat, 'container')}>
            <ChatBody/>
            <ChatSidebar/>
        </section>
    );
};

export default Chat;
