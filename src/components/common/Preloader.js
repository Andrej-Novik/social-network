import loader from "../../assets/img/loader.gif"
import "../../assets/styles.scss"

let Preloader = (props) => {
	return (
		<img className="loader" src={ loader } alt=""/>
	)
}

export default Preloader