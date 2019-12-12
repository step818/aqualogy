import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './containers/Home/Home';
import Forum from './containers/Forum/Forum';
import Login from './containers/Login/Login';
import Signup from './containers/Login/Signup';
import Blog from './containers/Blog/Blog';
import Book from './containers/Book/Book';
import Layout from './hoc/Layout/Layout';
import AdminLogin from './containers/AdminLogin/AdminLogin';
import NewPost from './containers/Blog/NewPost';
import AdminOnly from './containers/AdminLogin/AdminOnly';
import { AuthProvider } from './Auth';
import PrivateRoute from './containers/AdminLogin/AdminOnly';

class App extends Component{

  render() {
    return (
      <div className="App">
        <AuthProvider>
          <Layout>
            <Switch>
              <PrivateRoute path="/adminOnly" component={AdminOnly} />
              <Route path="/newPost" component={NewPost} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/blog" component={Blog} />
              <Route path="/forum" component={Forum} />
              <Route path="/book" compnent={Book} />
              <Route path="/adminLogin" component={AdminLogin} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
