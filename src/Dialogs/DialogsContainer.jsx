
import { connect } from 'react-redux';
import StoreContext from '../StoreContext';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';



const mapStateToProps = (state) =>{
return {
    dialogsData: state.profilePage.dialogsData
    
}
}


const mapDispatchToProps = (dispatch) => {
    return{ 
    updateNewMessageBody: () =>{
        dispatch(sendMessageCreator());
    },
    sendMessage: (body) => {
        dispatch(updateNewMessageBodyCreator(body))
    }
    }
    }


const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs);
