// import styles from './Profile.module.scss';
import MyPosts from '../MyPosts/MyPosts';
import Content from '../Content/Content';
import Post from '../MyPosts/Post';




export default function Profile(props) {


  return (
    <>
      <MyPosts  postsData={props.postsData} dispatch={props.dispatch} newPostText={props.newPostText}  />
      {/* {props.postsData.map(p =>
            <Post
              likesCount={p.likesCount}
              message={p.message}
            />)} */}
      <Content />
    </>
  );
}
