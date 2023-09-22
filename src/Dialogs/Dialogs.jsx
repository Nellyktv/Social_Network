import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import React from 'react';

export default function Dialogs(props) {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <div className={styles.item}>
                    <NavLink to='/dialogs/1'>Ира</NavLink>
                    </div>
                <div className={styles.item}>
                <NavLink to='/dialogs/2'>Настя</NavLink>
                    </div>
                <div className={styles.item}>
                <NavLink to='/dialogs/3'>Оля</NavLink>
                    </div>         
            </div>
            <div className={styles.messages}>
            <div className={styles.message}>Hi</div>
            <div className={styles.message}>How is your it-kamasutra?</div>
            <div className={styles.message}>Yo</div>
            </div>
        </div>
    );
}
