import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.Header}>
      <img className={styles.logo} src='https://ichef.bbci.co.uk/news/640/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg' alt='Котик' />
    </header>
  );
}


