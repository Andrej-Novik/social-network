import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo"
import styles from "./styles.module.scss"

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer />
		 </div>
	)
}

export default Profile