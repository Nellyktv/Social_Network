
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
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
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;