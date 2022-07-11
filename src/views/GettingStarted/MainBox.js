import React from "react";
import { Link } from "react-router-dom";
import "../documentation/home.css";

export default function MainBox() {
  return (
    <div className="main-box">
      <div className="start-para">
        <h4>Getting Started</h4>
        <p>
          Lorem Ipsum is simply dummy text of printing and typesetting industry.
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
      </div>

      <div className="getStartbtn">
        <Link className="filllcolor" to="/register">
          Get API Key
        </Link>
      </div>

      <div className="mid-para">
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>

      <div className="end-para">
        <h4>Lorem Ipsum</h4>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>
    </div>
  );
}
