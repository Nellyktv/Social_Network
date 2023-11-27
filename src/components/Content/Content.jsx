import styles from './Content.module.scss';
import ProfileImg from '../Profile/ProfileImg';

export default function Content() {
  return (
    <div className={styles.content}>
      <ProfileImg src='https://w.forfun.com/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg' alt='content' className={styles.content} />

      {/* <input type='text' className={styles.inpText} placeholder='write message...'></input> */}
    </div>
  );
}
