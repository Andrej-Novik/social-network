import { connect } from "react-redux"
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../redux/usersReducers"
import Users from "."
import React from "react"
import Preloader from "../common/Preloader"
import { withAuthRedirect } from "../../hoc/AuthRedirect"
import { compose } from "redux"

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChahge = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)	
		this.props.setCurrentPage(pageNumber)
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

export default compose(
	connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),
	withAuthRedirect
)(UsersContainer)