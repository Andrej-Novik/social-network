import Post from "./Post"
import styles from "./styles.module.scss"
import React from "react"
import AddPostForm from "./AddPostsForm"

const MyPosts = (props) => {
	let postsList = props.posts.map(post =>
		<Post post={post.text} likes={post.likes} key={post.id} />
	)
	let addNewMPost = (value) => {
		props.addPost(value.newPost)
	}
	return (
		<div>
			<h3>Posts</h3>
			<AddPostForm onSubmit={ addNewMPost }/>
			<div className={styles.posts}>
				{ postsList }
			</div>
		</div>
	)
}

export default MyPosts