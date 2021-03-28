import React from "react"
import Profile from "."
import { connect } from "react-redux"
import  { getUsersProfile} from "../../redux/profileReducer"
import { withRouter } from "react-router-dom"
import { Redirect } from "react-router"


class ProfileContainer extends React.Component{

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId=2;
		}
		this.props.getUsersProfile(userId)
	}

	render() {
		if (!this.props.isAuth) {
			return <Redirect to="/login" />
    }
    
		return(
			<Profile {...this.props} profile={ this.props.profile }/>
		)	
	}
}
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent)