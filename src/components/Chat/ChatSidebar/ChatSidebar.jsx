import React, {useState} from 'react';
import ContactsList from "../../ContactsList";
import ContactsController from "../../ContactsController";
import ContactsSearch from "../../ContactsSearch";
import styles from '../Chat.module.scss';
import cn from "classnames";
import arrowLeft from '../../../assets/left_arrow.svg';

const ChatSidebar = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarActive(prevState => !prevState);
    };

    return (
        <aside
            className={cn(
                styles.sidebar,
                {
                    [styles.active]: isSidebarActive,
                },
            )}
        >
            <div className={styles.sidebarTop}>
                <div className={styles.sidebarToggleButton} onClick={toggleSidebar}>
                    <img
                        src={arrowLeft}
                        alt="arrow"
                        className={styles.sidebarToggleArrow}
                    />
                </div>
                <ContactsController/>
                <ContactsList/>
            </div>

            <ContactsSearch/>
        </aside>
    );
};

export default ChatSidebar;
