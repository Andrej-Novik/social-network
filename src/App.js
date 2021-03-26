import Profile from './components/Profile';
import Header from "./components/Header"
import Navbar from './components/Navbar';
import styles from "./App.module.scss"
import { Route, Switch } from 'react-router';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
      <div className={styles.wrapper}>
        <Header />
        <Navbar />
        <div className={styles.content}>
          <Switch>
            <Route path="/" exact render={() =><Profile />}/>
            <Route path="/dialogs" render={() =><DialogsContainer />}/>
            <Route path="/friends" render={() =><UsersContainer />}/>
          </Switch>
        </div>
      </div>
  );
}

export default App;
