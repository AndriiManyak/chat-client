import React from 'react';
import styles from './ContactsSearch.module.scss';
import PropTypes from 'proptypes';

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

ContactsSearch.propTypes = {
    searchField: PropTypes.string.isRequired,
    setSearchField: PropTypes.func.isRequired,
};

export default ContactsSearch;
