import React from "react"
import styles from "./styles.module.scss"

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}
	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status)
	}
	statusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}
	render() {
		return (
			<div>
				{!this.state.editMode &&
					<span className={styles.status} onDoubleClick={this.activateEditMode}>{this.props.status || "----------"}</span>
				}
				{this.state.editMode &&
					<input className={styles.input} onChange={this.statusChange} onBlur={ this.deactivateEditMode } autoFocus={true} value={this.state.status} />
				}
			</div>
		)
	}
}

export default ProfileStatus