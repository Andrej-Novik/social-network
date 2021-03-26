import { connect } from "react-redux"
import { followCreator, setUsersCreator, unfollowCreator, setCurrentPageCreator, setUsersTotalCountCreator, toggleIsFetchingCreator } from "../../redux/usersReducers"
import Users from "."
import * as axios from "axios"
import React from "react"
import Preloader from "../common/Preloader"

class UsersContainer extends React.Component{

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
		})
	}

	onPageChahge = (page) => {
		this.props.setCurrentPage(page)
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return (
			<div>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChahge={this.onPageChahge}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followCreator(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowCreator(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersCreator(users))
		},
		setCurrentPage: (page) => {
			dispatch(setCurrentPageCreator(page))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountCreator(totalCount))
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingCreator(isFetching))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)