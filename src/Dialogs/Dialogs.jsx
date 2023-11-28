import DialogNames from './DialogNames';
import Message from './Messages';
import styles from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogs-reducer';





export default function Dialogs(props) {


const state = props.store.getState();

    const dialogsElements = state.profilePage.dialogsData.map( dialog => <DialogNames name={dialog.name} id={dialog.id} />)
    const messagesElements = state.messagesPage.messagesData.map(msg => <Message messages={msg.message}/>)

    const newMessageBody = state.messagesPage.newMessageBody;
    

    const onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator());
        
    }

    const onSendMessageChange = (e) =>{
        const body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
        // console.log(body,'body')

    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>

                {dialogsElements}
            </div>
            
            <div>{messagesElements}</div>
            <div>
               <div> <textarea onChange={onSendMessageChange} value={newMessageBody} autoFocus className={styles.textarea} placeholder='Enter your message' ></textarea> </div> 
               <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    );
}
