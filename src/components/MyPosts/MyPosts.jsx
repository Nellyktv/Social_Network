import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';







export default function MyPosts(props) {
console.log(props,99999999);


  let newPostElement = React.createRef();

  // const addAllForPost = () =>{
  //   addPostVal();
  //   props.addPost();

  // }

  const addPost = () => {
    
props.dispatch(addPostActionCreator);
  }


// const addPostActionCreator = () => {

//   return {
//     type: 'ADD-POST'
//   }
// }


  const onPostChange = () => {   
    let text = newPostElement.current.value;
    // // props.updateNewPost(text);
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

 

  return (
    <>
      <div className={styles.Post}>
        <div>ava+description</div>
        <div>My posts</div>
        <div>
          <textarea ref={newPostElement} autoFocus onChange={onPostChange} ></textarea>
          <button  onClick={addPost}>Add post</button>
          <button>Remove</button>
         {props.postsData.map(p =>
            <Post
            key={p.message}
              likesCount={p.likesCount}
              message={p.message}
            />)}

        </div>
        <div>
        </div>

      </div>
    </>
  );
}
