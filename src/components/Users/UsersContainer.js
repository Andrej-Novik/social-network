import { connect } from "react-redux"
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../redux/usersReducers"
import Users from "."
import React from "react"
import Preloader from "../common/Preloader"
import { compose } from "redux"
import { getPagaSize, getStateUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/usersSelectors"

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
		users: getStateUsers(state),
		pageSize: getPagaSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}
export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })(UsersContainer)