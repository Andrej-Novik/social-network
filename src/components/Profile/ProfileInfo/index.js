import styles from "./styles.module.scss"
import Preloader from "../../common/Preloader"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={styles.info}>
			<img src={props.profile.photos.large} alt="" className={styles.photo} />
			{
				props.profile.photos.large
				?
					<ProfileStatus status={ props.status} updateStatus={props.updateStatus}/>	
				:
					<div className={styles.noPhoto}>
						<ProfileStatus status={ props.status} updateStatus={props.updateStatus}/>
					</div>
			}
			
		</div>
	)
}

export default ProfileInfo