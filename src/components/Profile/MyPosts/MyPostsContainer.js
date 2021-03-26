import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer"
import MyPosts from "."
import { connect } from "react-redux"


let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = updateNewPostTextCreator(text)
			dispatch(action)
		 },
		 addPost: () => {
			dispatch(addPostCreator())
		}
	}
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer