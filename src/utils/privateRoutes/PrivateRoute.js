import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'


const AuthPrivateRoute = (props) => {
    const user = useSelector(state => state.Auth.isAuthencated);

    return user ? (
        <Route path={props.path} exact={props.exact} component={props.component} />
    ) : (
        <Redirect to="/login" />
    )
}

const GuestPrivateRoute = (props) => {
    const user = useSelector(state => state.Auth.isAuthencated);
    return user ? (
        <Redirect to="/dashboard" />
    ) : (
        <Route path={props.path} exact={props.exact} component={props.component} />
    )
}



export {AuthPrivateRoute,GuestPrivateRoute};