import styles from "./styles.module.scss"

const Message = (props) => {
	return (
		<div className={styles.message}>
			{props.message}
		</div>
	)
}

export default Message