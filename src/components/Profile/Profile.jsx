// import styles from './Profile.module.scss';
import MyPosts from '../MyPosts/MyPosts';
import Content from '../Content/Content';
import Post from '../MyPosts/Post';




export default function Profile(props) {

  return (
    <>
      <MyPosts store={props.store} />
      <Content />
    </>
  );
}
