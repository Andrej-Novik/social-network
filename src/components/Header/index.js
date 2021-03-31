import styles from "./styles.module.scss"
import logo from "../../assets/img/logo.png"
import { NavLink } from "react-router-dom"

const Header = (props) => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<img src={logo} alt="logo" />
					<h1>WebDad</h1>
				</div>
				<div className={styles.login}>
					{
						props.isAuth
							? <div>{props.login} <button onClick={props.logout}>log out</button></div>
							: <NavLink to="/login" className={styles.login}>login</NavLink>
					}
				</div>
			</div>
		</header>
	)
}

export default Header