import { connect } from "react-redux"
import Users from "."
import { followCreator, setUsersCreator, unfollowCreator, setCurrentPageCreator, setUsersTotalCountCreator  } from "../../redux/usersReducers"



let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)