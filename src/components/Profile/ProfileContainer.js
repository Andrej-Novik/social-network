import React from "react"
import Profile from "."
import { connect } from "react-redux"
import  { getUsersProfile} from "../../redux/profileReducer"
import { withRouter } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/AuthRedirect"
import { compose } from "redux"


class ProfileContainer extends React.Component{

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId=2;
		}
		this.props.getUsersProfile(userId)
	}

	render() {
		return(
			<Profile {...this.props} profile={ this.props.profile }/>
		)	
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})

export default compose(
	connect(mapStateToProps, { getUsersProfile }),
	withRouter,
	//withAuthRedirect
)(ProfileContainer)