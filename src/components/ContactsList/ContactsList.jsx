import React, {useMemo} from 'react';
import Contact from "../Contact";
import {useSelector} from "react-redux";
import {getContacts, getCurrentUser} from "../../redux/rootReducer";
import styles from './ContactsList.module.scss';
import PropTypes from 'proptypes';

const ContactsList = ({activeTab, searchField, toggleSidebar}) => {
    const contacts = useSelector(getContacts);
    const currentUser = useSelector(getCurrentUser);

    const filteredContacts = useMemo(() => {
        let filterResult = contacts;

        if (activeTab === 'online') {
            filterResult = filterResult.filter(contact => contact.isOnline);
        }

        return filterResult
            .filter(contact => contact.id !== currentUser.id)
            .filter(contact => contact.name.toLowerCase().includes(searchField.toLowerCase()));
    }, [contacts, activeTab, searchField]);

    return (
        <ul className={styles.list}>
            {

                filteredContacts.map(contact => (
                    <li
                        key={contact.id}
                        className={styles.item}
                        onClick={toggleSidebar}
                    >
                        <Contact contact={contact}/>
                    </li>
                ))
            }
        </ul>
    );
};

ContactsList.propTypes = {
    activeTab: PropTypes.string.isRequired,
    searchField: PropTypes.string.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default ContactsList;
