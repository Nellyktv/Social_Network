import styles from './Post.module.scss';



export default function Post(props) {

// console.log(props.message)

    return (

        <div>
            <img src='https://kovi.ru/wp-content/uploads/2022/02/attack-on-titan-season-4-part-2-poster.jpg' alt='ava' className={styles.avatar}></img>
            <div>{props.message}</div>
            <div>
                <span>like{props.likesCount}</span>
            </div>
        </div>

    );
}