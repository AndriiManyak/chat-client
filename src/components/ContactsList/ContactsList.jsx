import React, {useMemo} from 'react';
import Contact from "../Contact";
import {useSelector} from "react-redux";
import {getContacts, getCurrentUser} from "../../redux/rootReducer";
import styles from './ContactsList.module.scss';

// eslint-disable-next-line react/prop-types
const ContactsList = ({activeTab, searchField}) => {
    const contacts = useSelector(getContacts);
    const currentUser = useSelector(getCurrentUser);

    const filteredContacts = useMemo(() => {
        let filterResult = contacts;

        if (activeTab === 'online') {
            filterResult = filterResult.filter(contact => contact.isOnline);
        }

        return filterResult
            .filter(contact => contact.id !== currentUser.id)
            .filter(contact => contact.name.includes(searchField));
    }, [contacts, activeTab, searchField]);

    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                {
                    filteredContacts.map(contact => (
                        <Contact key={contact.id} contact={contact}/>
                    ))
                }
            </li>
        </ul>
    );
};

export default ContactsList;
