import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../Auth';

const UserRoute = ({ component: RouteComponent, ...rest}) => {

  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  // currentUser points to null
  if(currentUser) {
    console.log("loggy in - UserRoute");
  }
  return (
    <Route
      {...rest}
      render={routeProps =>
// I think this is keeping from knowing if logged in
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/about"} />
        )
      }
    />
  );
};

export default UserRoute;