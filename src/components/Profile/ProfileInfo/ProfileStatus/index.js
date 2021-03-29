import React from "react"
import styles from "./styles.module.scss"

class ProfileStatus extends React.Component {

	state = {
		editMode: false
	}

	activateEditMode() {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode() {
		this.setState({
			editMode: false
		})
	}
	

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
				}
				{this.state.editMode &&
					<input onBlur={ this.deactivateEditMode.bind(this) } autoFocus={true} value={this.props.status} />
				}
			</div>
		)
	}
	
}

export default ProfileStatus