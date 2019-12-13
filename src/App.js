import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NotFound from './components/404NotFound/404NotFound';
import Home from './containers/Home/Home';
import Forum from './containers/Forum/Forum';
import Login from './containers/Login/Login';
import Signup from './containers/Login/Signup';
import Blog from './containers/Blog/Blog';
import BlogDetails from './containers/Blog/BlogDetails';
import Book from './containers/Book/Book';
import About from './containers/About/About';
import Layout from './hoc/Layout/Layout';
import AdminLogin from './containers/AdminLogin/AdminLogin';
import NewPost from './containers/Blog/NewPost';
import { AuthProvider } from './Auth';
import UserRoute from './containers/Login/UserRoute';

class App extends Component{


  render() {
    return (
      
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/newpost" component={NewPost} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/blog/:id" component={BlogDetails} />
              <Route path="/blog" component={Blog} />
              <Route path="/forum" component={Forum} />
              <Route path="/book" component={Book} />
              <Route path="/about" component={About} />
              <Route path="/adminLogin" component={AdminLogin} />
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </div>
    
    );
  }
}

export default App;
