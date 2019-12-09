import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './containers/Home/Home';
import Forum from './containers/Forum/Forum';
import Login from './containers/Login/Login';
import Blog from './containers/Blog/Blog';
import Book from './containers/Book/Book';
import Layout from './hoc/Layout/Layout';
import Admin from './containers/Admin/Admin';
import NewPost from './containers/Blog/NewPost';
import AdminOnly from './containers/Admin/AdminOnly';

class App extends Component{

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/adminOnly" component={AdminOnly} />
            <Route path="/newPost" component={NewPost} />
            <Route path="/login" component={Login} />
            <Route path="/blog" component={Blog} />
            <Route path="/forum" component={Forum} />
            <Route path="/book" compnent={Book} />
            <Route path="/admin" component={Admin} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
