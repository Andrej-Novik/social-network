import React, { useEffect, useState } from "react"
import styles from "./styles.module.scss"

const ProfileStatus = (props) => {
	
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateMode = () => {
		setEditMode(true)
	}
	const deactivateMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}
	const statusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div>
			{!editMode &&
				<span onDoubleClick={activateMode} className={styles.status} >{props.status || "----------"}</span>
			}
			{editMode &&
				<input onBlur={deactivateMode} onChange={statusChange} className={styles.input} value={status}  autoFocus={true}  />
			}
		</div>
	)
}

export default ProfileStatus