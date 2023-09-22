import styles from './Post.module.scss';


export default function Post(props) {

    return (

        <div>
            <img src='https://foni.club/uploads/posts/2023-03/thumbs/1677658659_foni-club-p-asuna-yuki-art-6.jpg' alt='ava' className={styles.avatar}></img>
            post 1
            <div>
                <span>like{props.likes}</span>
            </div>
        </div>

    );
}