import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../Auth';
import NewPost from '../Blog/NewPost';

const AdminOnly = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/admin"} />
        )
      }
    />
  );
};

export default AdminOnly;