import React from "react";
import './home.css';
import { Link } from "react-router-dom";
export default function MidBox() {

    return (
        <div className="mid-box">
            <h3>Get Started</h3>
            <p>Lorem Ipsum is simply dummy text of printing and typesetting industry. when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. </p>

            <div className="getStartbtn">
                <Link className="filllcolor" to="/register">Get API Key</Link>
            </div>

            <div style={{ marginTop: '20px' }}>
                <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <h3>Lorem Ipsum</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.</p>
        </div>
    )

}