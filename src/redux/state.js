
let rerenderEntireTree = () =>{

  console.log('State changed');
}

  let state = {


  profilePage:{
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

      postsData:[{
        id: 1,
        message: 'Hi,how are you',
        likesCount:12
      },
      
      {
        id: 2,
        message: 'It"s my first post',
        likesCount:5
      }],

      newPostText: 'Котики'

  },
  

messagesPage:{
    messagesData:[{
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
  }]
   
    }

  }


  window.state = state;

export const addPost = () =>{

  const newPost = {
    id:5,
    message:state.profilePage.newPostText,
    likesCount:0
  }

state.profilePage.postsData.push(newPost);
state.profilePage.newPostText = '';
rerenderEntireTree();
}


export const updateNewPost = (newText) =>{


state.profilePage.newPostText = newText;


rerenderEntireTree(state);

}

export const subscribe = (observer) => {

  rerenderEntireTree = observer;
}


  export default state;