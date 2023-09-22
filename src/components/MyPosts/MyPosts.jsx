import styles from './MyPosts.module.scss';
import Post from './Post';
import Profile from '../Profile/Profile';


export default function MyPosts() {
  return (
    <>
    <div className={styles.Post}>
      <div>ava+description</div>
      <div>My posts</div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>
      </div>
      <Post likes='10' message='Hi,how are you' />
      <Post likes='15' message="It's my first post" />

    </div>
    </>
  );
}
