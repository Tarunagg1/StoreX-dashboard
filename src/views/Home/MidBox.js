import React from "react";
import './home.css';
import { Link } from "react-router-dom";
export default function MidBox() {

    return (
        <div className="mid-box">
            <div style={{marginTop:'70px',marginLeft:'30px'}}>
            <h4>Get started</h4>
            <p style={{marginTop:'20px',marginRight:"70px"}}>Lorem Ipsum is simply dummy text of printing and typesetting industry. when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.It uses a dictionary of over 200 Latin words, 
                combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. </p>
            </div>

            <div className="getStartbtn" style={{marginLeft:'30px',marginRight:'70px'}}>
                <Link className="filllcolor" to="/register">Get API Key</Link>
            </div>

            <div style={{ marginTop: '40px',marginLeft:'35px',marginRight:'70px'}}>
                <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            
            <div style={{marginTop:"40px",marginLeft:'30px',marginRight:'70px'}}>
            <h4>Lorem Ipsum</h4>
            <p style={{marginTop:'20px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.</p>
            </div>
        </div>
    )

}