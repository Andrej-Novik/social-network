import styles from "./styles.module.scss"
import logo from "../../assets/img/logo.png"
import { NavLink } from "react-router-dom"

const Header = (props) => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="logo" />
			<div className={styles.login}>
				{
					props.isAuth
						? props.login
						: <NavLink to="/login" className={styles.link}>login</NavLink>
				}
			</div>
	 </header>
	)
}

export default Header