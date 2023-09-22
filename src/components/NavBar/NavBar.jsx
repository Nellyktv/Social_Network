import { NavLink } from 'react-router-dom';
import styles from'./NavBar.module.scss';

export default function NavBar() {
    return (
<nav className={styles.navigation}>
          <div><NavLink to='/profile' className={styles.link_nav} activeClassName={styles.active}>Profile</NavLink></div>
          <div><NavLink to ='/dialogs' className={styles.link_nav}>Messages</NavLink></div>
          <div><NavLink to='/news' className={styles.link_nav}>News</NavLink></div>
          <div><NavLink to='/music' className={styles.link_nav}>Music</NavLink></div>
          <div><NavLink to='/settings' className={styles.link_nav}>Settings</NavLink></div>
        </nav>
    );
  }
  
