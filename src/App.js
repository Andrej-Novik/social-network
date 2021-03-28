import ProfileContainer from './components/Profile/ProfileContainer';
import Header from "./components/Header"
import Navbar from './components/Navbar';
import styles from "./App.module.scss"
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
      <div className={styles.wrapper}>
        <Header />
        <Navbar />
        <div className={styles.content}>
            <Route path="/profile/:userId?" render={ () => <ProfileContainer /> }/>
            <Route path="/dialogs" render={ () => <DialogsContainer /> }/>
            <Route path="/users" render={ () => <UsersContainer /> }/>
         
        </div>
      </div>
  );
}

export default App;
