import styles from "./styles.module.scss"
import logo from "../../assets/img/logo.png"

const Header = () => {
	return (
		<header className={styles.header}>
		<img src={logo} alt="logo"/>
	 </header>
	)
}

export default Header