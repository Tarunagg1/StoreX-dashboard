import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const AuthPrivateRoute = (props) => {
    let user = false;
    return user ? (
        <Route path={props.path} exact={props.exact} component={props.component} />
    ) : (
        <Redirect to="/login" />
    )
}

const GuestPrivateRoute = (props) => {
    let user = false;
    return user ? (
        <Redirect to="/dashboard" />
    ) : (
        <Route path={props.path} exact={props.exact} component={props.component} />
    )
}



export {AuthPrivateRoute,GuestPrivateRoute};