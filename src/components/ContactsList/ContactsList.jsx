import React from 'react';
import Contact from "../Contact";

const ContactsList = () => {
    return (
        <ul className="contactsList">
            <li className="contactItem">
                <Contact />
            </li>
        </ul>
    );
};

export default ContactsList;
