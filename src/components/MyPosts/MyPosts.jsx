import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post';



export default function MyPosts(props) {

  const addPost = () => {
    props.addPost();
  }

  const onPostChange = (e) => {
    const text = e.target.value;
    props.updateNewPostText(text);;
  }

  return (
    <>
      <div className={styles.Post}>
        <div>ava+description</div>
        <div>My posts</div>
        <div>
          <textarea autoFocus value={props.newPostText} onChange={onPostChange} ></textarea>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
          {props.postsData.map(p =>
            <Post
              likesCount={p.likesCount}
              message={p.message}
            />)}
        </div>
      </div>
    </>
  );
}
