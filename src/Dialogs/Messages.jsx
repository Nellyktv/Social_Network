import styles from './Dialogs.module.css';




export default function Message(props) {
    
    return (
        <>
            <div className={styles.messages}>
                <div className={styles.message}>{props.messages}</div>
            </div>
        </>
    )
}