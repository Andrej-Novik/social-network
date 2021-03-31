import ProfileContainer from './components/Profile/ProfileContainer';
import Navbar from './components/Navbar';
import styles from "./App.module.scss"
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login';

const App = () => {
	return (
		<div className={styles.wrapper}>
			<HeaderContainer />
			<Navbar />
			<div className={styles.content}>
				<Route path="/profile/:userId?" render={ () => <ProfileContainer /> }/>
				<Route path="/dialogs" render={ () => <DialogsContainer /> }/>
				<Route path="/users" render={ () => <UsersContainer /> }/>
				<Route path="/login" render={ () => <LoginPage /> }/>
			</div>
		</div>
	);
}

export default App;
