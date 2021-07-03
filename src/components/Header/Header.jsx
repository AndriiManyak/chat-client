import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className="container">Chat bots 2.0</h1>
        </header>
    );
};

export default Header;
