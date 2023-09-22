import styles from './Profile.module.scss';
import MyPosts from '../MyPosts/MyPosts';
import Dialogs from '../../Dialogs/Dialogs';
import Content from '../Content/Content';

export default function Profile() {
  return (
    <>
      <MyPosts />
      <Content />
    </>
  );
}
