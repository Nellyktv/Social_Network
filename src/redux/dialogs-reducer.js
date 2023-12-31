const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messagesData: [{
        id: 1,
        message: 'Hi'
    },

    {
        id: 2,
        message: 'How is your it-kamasutra?'
    },

    {
        id: 3,
        message: 'Yo'
    }],
    newMessageBody: ""

}



const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case UPDATE_NEW_MESSAGE_BODY:
            
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            const body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push(
                {
                    id: 7,
                    message: body
                }
            )

            return state;
        default:
            return state;


    }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;