import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { getAuthToken } from '../common/localStorege';


const AuthPrivateRoute = (props) => {
    // const data = useSelector(state => state.Auth);
    // console.log(data);
    const user = getAuthToken();
    // console.log(user);
    return user ? (
        <Route path={props.path} exact={props.exact} component={props.component} />
    ) : (
        <Redirect to="/login" />
    )
}

const GuestPrivateRoute = (props) => {
    const user = useSelector(state => state.Auth.isAuthencated);
    return user ? (
        <Redirect to="/credentials" />
    ) : (
        <Route path={props.path} exact={props.exact} component={props.component} />
    )
}



export { AuthPrivateRoute, GuestPrivateRoute };