import styles from "./styles.module.scss"
import * as axios from "axios"
import userPhoto from "../../assets/img/user.png"
import React from "react"

class Users extends React.Component{

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
		})
	}

	onPageChahge = (page) => {
		this.props.setCurrentPage(page)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
			.then(response => {
			this.props.setUsers(response.data.items)
		})
	}

	render() {

		let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

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
									className={this.props.currentPage === page && styles.selected}
									onClick={(e) => { this.onPageChahge(page) }}
									key={page.id}
								>
									{ page }
								</span>
							)
						})
					}
				</div>
				{
					this.props.users.map(user =>
						<div className={styles.user} key={user.id}>
							<div>
								<img src={ user.photos.small != null ? user.photos.small : userPhoto } alt=""/>
							</div>
							{user.followed
								? <button onClick={ () => {this.props.unfollow(user.id)} }>Unfollow</button>
								: <button onClick={ () => {this.props.follow(user.id)} }>Follow</button>
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
}

export default Users