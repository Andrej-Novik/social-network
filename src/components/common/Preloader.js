import loader from "../../assets/img/loader.gif"
import styles from "./common.module.scss"

let Preloader = (props) => {
	return (
		<img className={styles.loader} src={ loader } alt=""/>
	)
}

export default Preloader