import styles from "./styles.module.scss"
import { NavLink } from "react-router-dom"

const Dialog = (props) => {
	let path = "/dialogs/" + props.id
	
	return (
		<div className={styles.dialog}>
			<NavLink to={path} activeClassName={styles.activeDialog}>{props.name}</NavLink>
		</div>
	)
}

export default Dialog