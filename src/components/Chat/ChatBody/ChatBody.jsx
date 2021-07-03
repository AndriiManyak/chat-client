import React from 'react';
import MessagesController from "../../MessagesController";
import ContactSelected from "../../ContactSelected";
import {body} from '../Chat.module.scss';

const ChatBody = () => {
    return (
        <section className={body}>
            <ContactSelected/>
            <MessagesController/>
        </section>
    );
};

export default ChatBody;
