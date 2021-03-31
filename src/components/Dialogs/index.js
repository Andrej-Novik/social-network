import Dialog from "./Dialog"
import Message from "./Message"
import styles from "./styles.module.scss"
import MessageForm from "./MessageForm"

const Dialogs = (props) => {
	let dialogsList = props.dialogsPage.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>);
	let messagesList = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} />);

	let addNewMessage = (value) => {
		props.sendMessage(value.newMessage)
	}
	return (
		<div className={styles.dialogs}>
			<div className={styles.peaple}>
				{ dialogsList }
			</div>
			<div className={styles.messages}>
				<div>
					{messagesList}
				</div>
				<MessageForm onSubmit={ addNewMessage}/>
			</div>
		</div>
	)
}

export default Dialogs