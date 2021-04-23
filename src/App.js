import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { Alert } from './components/Alert';
import { MainPage } from './pages/MainPage';
import { Navbar } from './components/Navbar';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';


function App() {

  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <Alert />
          <Switch>
            <Route component={MainPage} path={'/'} exact/>
            <Route component={AboutPage} path={'/about'} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
