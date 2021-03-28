import styles from "./styles.module.scss"
import userPhoto from "../../assets/img/user.png"
import { NavLink } from "react-router-dom"
import * as axios from "axios"

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
						<NavLink to={"/profile/" + user.id}>
							<img src={ user.photos.small != null ? user.photos.small : userPhoto } alt=""/>
						</NavLink>
						{user.followed
							? <button onClick={() => {

								axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
									withCredentials: true,
									headers: {
										"API-KEY" : "a6e30923-46fd-47a5-9c72-35d46849af67"
									}
								})
									.then(response => {
										if (response.data.resultCode === 0) {
											props.unfollow(user.id)
										}
									})

							}}>Unfollow</button>
							: <button onClick={() => {

								axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
									withCredentials: true,
									headers: {
										"API-KEY" : "a6e30923-46fd-47a5-9c72-35d46849af67"
									}
								})
									.then(response => {
										if (response.data.resultCode === 0) {
											props.follow(user.id)
										}
									})

							}}>Follow</button>
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