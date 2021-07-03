import React, {useState} from 'react';
import styles from './ContactsSearch.module.scss';

const ContactsSearch = () => {
    const [searchField, setSearchField] = useState('');

    const handleChange = event => {
        setSearchField(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        setSearchField('');
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
