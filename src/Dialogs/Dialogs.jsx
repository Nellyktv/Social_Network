import DialogNames from './DialogNames';
import Message from './Messages';
import styles from './Dialogs.module.css';


export default function Dialogs(props) {

    const dialogsElements = props.dialogsData.map(dialog => <DialogNames name={dialog.name} id={dialog.id} />)
    const messagesElements = props.messagesData.map(msg => <Message messages={msg.message} />)

    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const onSendMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div>{messagesElements}</div>
            <div>
                <div> <textarea onChange={onSendMessageChange} value={props.newMessageBody} autoFocus className={styles.textarea} placeholder='Enter your message' ></textarea> </div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    );
}
