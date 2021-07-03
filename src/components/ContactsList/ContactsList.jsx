import React from 'react';
import Contact from "../Contact";

const ContactsList = () => {
    return (
        <div className="contacts">
            <div className="controller">
                <div className="allContacts">all</div>
                <div className="onlineContacts">online</div>
            </div>

            <ul className="contactsList">
                <li className="contactItem">
                    <Contact />
                </li>
            </ul>
        </div>
    );
};

export default ContactsList;
