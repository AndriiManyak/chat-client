import React from 'react';
import styles from './ContactsSearch.module.scss';

// eslint-disable-next-line react/prop-types
const ContactsSearch = ({searchField, setSearchField}) => {
    const handleChange = event => {
        setSearchField(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                name="search"
                className={styles.input}
                value={searchField}
                onChange={handleChange}
                placeholder="Search..."
                autoComplete="off"
            />
        </form>
    );
};

export default ContactsSearch;
