import Post from "./Post"
import styles from "./styles.module.scss"
import React from "react"

const MyPosts = (props) => {
	let postsList = props.posts.map(post =>
		<Post post={post.text} likes={post.likes} key={post.id} />
	)
	let newPostText = props.newPostText

	let newPost = React.createRef()

	let onAddPost = () => {
		if (newPostText) {
			props.addPost()	
		}
	}

	let onPostChange = () => {
		let text = newPost.current.value
		props.updateNewPostText(text)
	}

	return (
		<div>
			<h3>Posts</h3>
			<div className={ styles.addPosts }>
				<textarea
					onChange={onPostChange}
					ref={newPost}
					value={newPostText} />
				<br />
				<button onClick={ onAddPost }>Add post</button>
			</div>
			<div className={styles.posts}>
				{ postsList }
			</div>
		</div>
	)
}

export default MyPosts