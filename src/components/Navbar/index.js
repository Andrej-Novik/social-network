import styles from "./styles.module.scss"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.link}>
				<NavLink exact to="" activeClassName={styles.activeLink}>Profile</NavLink>
			</div>
			<div className={styles.link}>
				<NavLink exact to="dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
			</div>
			<div className={styles.link}>
				<NavLink exact to="friends" activeClassName={styles.activeLink}>Friends</NavLink>
			</div>
			<div className={styles.link}>
				<NavLink exact to="news" activeClassName={styles.activeLink}>News</NavLink>
			</div>
			<div className={styles.link}>
				<NavLink exact to="music" activeClassName={styles.activeLink}>Music</NavLink>
			</div>
			<div className={styles.link}>
				<NavLink exact to="settings" activeClassName={styles.activeLink}>Settings</NavLink>
			</div>
		</nav>
	)
}

export default Navbar