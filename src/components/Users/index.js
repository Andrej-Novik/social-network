import styles from "./styles.module.scss"
import userPhoto from "../../assets/img/user.png"

let Users = (props) => {

	let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

	let pages = []
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
	}


	return (
		<div>
			<div className={styles.menu}>
				{
					pages.map(page => {
						return (
							<span
								className={props.currentPage === page && styles.selected}
								onClick={(e) => { props.onPageChahge(page) }}
								key={page.id}
							>
								{ page }
							</span>
						)
					})
				}
			</div>
			{
				props.users.map(user =>
					<div className={styles.user} key={user.id}>
						<div>
							<img src={ user.photos.small != null ? user.photos.small : userPhoto } alt=""/>
						</div>
						{user.followed
							? <button onClick={ () => {props.unfollow(user.id)} }>Unfollow</button>
							: <button onClick={ () => {props.follow(user.id)} }>Follow</button>
						}
						<div className={styles.userInfo}>
							<div className={styles.name}>
								{user.name}
								<div>{ user.status }</div>
							</div>
							<div className={styles.location}>
								{"user.location.city"}
								<div>{ "user.location.country" }</div>
							</div>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default Users