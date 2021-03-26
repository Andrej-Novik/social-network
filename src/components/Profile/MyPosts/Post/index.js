import styles from "./styles.module.scss"

const Post = (props) => {
	return (
		<div className={styles.post}>
			<div className={styles.ava}></div>
			<span>{props.post}</span>
			<span className={styles.likes}>{ props.likes } likes</span>
		</div>
	)
}

export default Post