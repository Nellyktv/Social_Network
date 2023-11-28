import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';


export default function MyPosts(props) {
  let newPostText = props.store.getState().profilePage.newPostText;


  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
    
  }

  const onPostChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewPostTextActionCreator(text));
    console.log(text,11111111111111111111)
  }

  return (
    <>
      <div className={styles.Post}>
        <div>ava+description</div>
        <div>My posts</div>
        <div>
          <textarea autoFocus value={newPostText} onChange={onPostChange} ></textarea>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
          {props.store.getState().profilePage.postsData.map(p =>
            <Post
              likesCount={p.likesCount}
              message={p.message}
            />)}
        </div>
      </div>
    </>
  );
}
