import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {

    _state: {


        profilePage: {
            dialogsData: [{
                id: 1,
                name: 'Ира'
            },

            {
                id: 2,
                name: 'Настя'
            },

            {
                id: 3,
                name: 'Оля'
            }],

            postsData: [{
                id: 1,
                message: 'Hi,how are you',
                likesCount: 12
            },

            {
                id: 2,
                message: 'It"s my first post',
                likesCount: 5
            }],

            newPostText: 'Котики'

        },


        messagesPage: {
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

        },

        sideBar: {},

    },

    getState() {
        return this._state;
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);

    }
}


export default store;

window.store = store;