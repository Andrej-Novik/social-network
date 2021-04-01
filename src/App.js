import ProfileContainer from './components/Profile/ProfileContainer';
import Navbar from './components/Navbar';
import styles from "./App.module.scss"
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp} from "./redux/appReducer";
import { compose } from 'redux';
import { initialize } from 'redux-form';
import Preloader from './components/common/Preloader';

class App extends React.Component{
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {

		if (!this.props.initializing) {
			return <Preloader />
		}

		return (
			<div className={styles.wrapper}>
				<HeaderContainer />
				<div className={styles.page}>
					<Navbar />
					<div className={styles.content}>
						<Route path="/profile/:userId?" render={ () => <ProfileContainer /> }/>
						<Route path="/dialogs" render={ () => <DialogsContainer /> }/>
						<Route path="/users" render={ () => <UsersContainer /> }/>
						<Route path="/login" render={ () => <LoginPage /> }/>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	initializing: state.app.initializing
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App)
