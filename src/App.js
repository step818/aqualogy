import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './containers/Home/Home';
import Forum from './containers/Forum/Forum';
import Login from './containers/Login/Login';
import Blog from './containers/Blog/Blog';
import Book from './containers/Book/Book';

class App extends Component{

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/blog" component={Blog} />
          <Route path="/forum" component={Forum} />
          <Route path="/book" compnent={Book} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
