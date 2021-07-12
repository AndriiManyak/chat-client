import React from 'react';
import MessagesController from "../../MessagesController";
import ContactSelected from "../../ContactSelected";
import {body} from '../Chat.module.scss';
import {useSelector} from "react-redux";
import {getSelectedContact} from "../../../redux/rootReducer";

const ChatBody = () => {
    const selectedContact = useSelector(getSelectedContact);

    return (
        <section className={body}>
            {
                selectedContact && (
                    <>
                        <ContactSelected selectedContact={selectedContact}/>
                        <MessagesController/>
                    </>
                )
            }
        </section>
    );
};

export default ChatBody;
