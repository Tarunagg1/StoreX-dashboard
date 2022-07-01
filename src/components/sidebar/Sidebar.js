import React from "react";
import './sidebar.css';
import { useSelector,useDispatch } from "react-redux";
import { ACTIVE_LINK } from "../../redux/constants/auth.constannts";
import { Link } from "react-router-dom";

export default function SideBar(){
    const active = useSelector(state=>state.Auth.activeLink);
    const dispatch = useDispatch();
    

    return(
        <div className="side-bar">
            <div className="grid-container-sideBar">
                <div className={active==='Get_started'?'active-link':''}>             <Link to='/' onClick={() => dispatch({type: ACTIVE_LINK,  payload:'Get_started' })} >Get started</Link></div>
                <div className={active === 'Documentation' ? 'active-link' : ''}>     <Link to='/documentation' onClick={() => dispatch({ type: ACTIVE_LINK, payload: 'Documentation' })} >Documentation</Link></div>
                <div className={active === 'Authentication' ? 'active-link' : ''}>    <Link to='/' onClick={() => dispatch({ type: ACTIVE_LINK, payload: 'Authentication' })} >Authentication</Link></div>
                <div className={active === 'Endpoints' ? 'active-link' : ''}>         <Link to='/documentation' onClick={() => dispatch({ type: ACTIVE_LINK, payload: 'Endpoints' })} >Endpoints</Link></div>
                <div className={active === 'Client_libraries' ? 'active-link' : ''}>  <Link to='/' onClick={() => dispatch({ type: ACTIVE_LINK, payload: 'Client_libraries' })} >Client libraries</Link></div>
            </div>
        </div>
    )
}