import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { useDispatch} from 'react-redux';
import { MENU_OVERLAY_OFF } from "../../redux/constants/auth.constannts";
import Cross from './CrossImage.png';

export default function MenuOver(props){
    const dispatch = useDispatch();
    return(

         <div className="overlay" style={{top:props.top}}> 

            <button onClick={()=>dispatch({type:MENU_OVERLAY_OFF})}>
             <img src={Cross} />
            </button>

             <h2>Get started</h2>
             <h2>Documentation</h2>
             <h2>Pricing</h2>
             <hr className="line"></hr>
             <h2>Login</h2>

            <div className="getStartbtn menuover-btn" >
                <Link className="filllcolor" to="/register">Get API Key</Link>
            </div>
        </div>
    )
}