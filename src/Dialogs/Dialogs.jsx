import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import React from 'react';


const DialogItem = (props) => {
    return (
        <>
            <div className={styles.item}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </>
    )

}


const Message = (props) =>{
    return(
        <>
    <div className={styles.messages}>
    <div className={styles.message}>{props.message}</div>
    </div>
    </>
)
}

export default function Dialogs(props) {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <DialogItem name='Ира' id='1' />
                <DialogItem name='Настя' id='2' />
                <DialogItem name='Оля' id='3' />
            </div>
            <Message message='Hi'/>
            <Message message='How is your it-kamasutra?'/>
            <Message message='Yo'/>
        </div>
    );
}
