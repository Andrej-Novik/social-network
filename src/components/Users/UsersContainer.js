import { connect } from "react-redux"
import { follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress } from "../../redux/usersReducers"
import Users from "."
import React from "react"
import Preloader from "../common/Preloader"
import { usersAPI} from "../../api/api"

class UsersContainer extends React.Component{

	componentDidMount() {
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
				//this.props.setUsersTotalCount(data.totalCount)
		})
	}

	onPageChahge = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
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
					toggleFollowingProgress={this.props.toggleFollowingProgress}
					followingInProgress={this.props.followingInProgress}
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
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setUsersTotalCount,
	toggleIsFetching,
	toggleFollowingProgress
}) (UsersContainer)