import React from 'react';
import './css/App.css';
import Main from './pages/index';
import { Switch, Route} from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login}/>
    </Switch>
    </div>
  );
}

export default App;
