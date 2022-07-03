import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { useDispatch} from 'react-redux';
import { MENU_OVERLAY_OFF } from "../../redux/constants/auth.constannts";
import Cross from '../../assets/images/CrossImage.png';

export default function MenuOver(props){
    const dispatch = useDispatch();
    return(

         <div className="overlay" style={{top:props.top}}> 

            <button onClick={()=>dispatch({type:MENU_OVERLAY_OFF})}>
             <img src={Cross} />
            </button>

            <h2><Link onClick={() => dispatch({ type: MENU_OVERLAY_OFF })} className="color-link" to="/">Get started</Link></h2>
            <h2><Link onClick={() => dispatch({ type: MENU_OVERLAY_OFF })} className="color-link" to="/documentation">Documentation</Link></h2>
             <h2>Pricing</h2>
             <hr className="line"></hr>
             <h2><Link className="color-link" to="/login">Login</Link></h2>

            <div className="getStartbtn menuover-btn" >
                <Link className="filllcolor" to="/register">Get API Key</Link>
            </div>
        </div>
    )
}