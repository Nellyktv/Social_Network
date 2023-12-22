import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../StoreContext';


export default function MyPostsContainer() {

  return (
    <StoreContext.Consumer>{
      (store) => {
        const state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        const onPostChange = (text) => {
          const action = store.dispatch(updateNewPostTextActionCreator(text));
          store.dispatch(action);
        }

        return <MyPosts newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.postsData} />
      }
    }
    </StoreContext.Consumer>

  );
}