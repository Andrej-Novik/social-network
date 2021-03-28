import styles from "./styles.module.scss"
import Preloader from "../../common/Preloader"

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div className={styles.info}>
			<img src={props.profile.photos.large} alt="" />
			<br />
			ava + description
		</div>
	)
}

export default ProfileInfo