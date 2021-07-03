import React from 'react';
import './MessagesController.scss';
import MessagesList from "../MessagesList";
import MessageForm from "../MessageForm";

const MessagesController = () => {
    return (
        <div className="messagesController">
            <MessagesList/>
            <MessageForm/>
        </div>
    );
};

export default MessagesController;
