import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { AboutPage } from './components/AboutPage';
import { MainPage } from './components/MainPage';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route component={MainPage} path={'/'} exact/>
        <Route component={AboutPage} path={'/about'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
