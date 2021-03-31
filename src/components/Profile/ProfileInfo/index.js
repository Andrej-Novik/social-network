import styles from "./styles.module.scss"
import Preloader from "../../common/Preloader"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={styles.info}>
			<img src={props.profile.photos.large} alt="ptoto" />
			<br />
			<ProfileStatus status={ props.status} updateStatus={props.updateStatus}/>
		</div>
	)
}

export default ProfileInfo