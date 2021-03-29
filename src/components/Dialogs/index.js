import { Redirect } from "react-router"
import Dialog from "./Dialog"
import Message from "./Message"
import styles from "./styles.module.scss"

const Dialogs = (props) => {

  let state = props.dialogsPage

  let dialogsList = state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>);
  let messagesList = state.messages.map(message => <Message message={message.message} key={message.id} />);
  let newMessageText = state.newMessageText

	let sendMassage = () => {
		if (newMessageText) {
			props.sendMessage()
	  }
  }
	let changeMessage = (e) => {
		let message = e.target.value
    props.updateNewMessageText(message)
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
        <div>
          <textarea placeholder="Enter your message" value={newMessageText} onChange={ changeMessage }/>
          <br />
          <button onClick={ sendMassage }>Send</button>
        </div>
			</div>
		</div>
	)
}


export default Dialogs