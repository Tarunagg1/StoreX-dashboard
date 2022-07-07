import React from "react";
import "./sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { ACTIVE_LINK } from "../../redux/constants/auth.constannts";
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  const active = useSelector(state => state.Auth.activeLink);
  const dispatch = useDispatch();

  return (
    <div className="side-bar">
      <div className="grid-container-sideBar">
        <NavLink
          to="/get-started"
          activeClass="active"
          className="basic-link"
        >
          <div>
            {" "}
            Get started
          </div>
        </NavLink>

        <NavLink
          activeClass="active"
          className="basic-link"
          to="/documentation"
        >
          <div>
            {" "}
            Documentation
          </div>
        </NavLink>
        <NavLink
          to="/authentication"
          activeClass="active"
          className="basic-link"
        >
          <div>
            {" "}
            Authentication
          </div>
        </NavLink>
        <NavLink
          to="/endpoints"
          activeClass="active"
          className="basic-link"
        >
          <div>
            {" "}
            Endpoints
          </div>
        </NavLink>
        <NavLink
          to="/client-libraries"
          activeClass="active"
          className="basic-link"
        >
          <div >
            {" "}
            Client libraries
          </div>
        </NavLink>
        <div className={active === "Node.js" ? "current-link" : "basic-link"}>
          {" "}
          <NavLink
            className="dropdown"
            to="/client-libraries/node"
            onClick={() => dispatch({ type: ACTIVE_LINK, payload: "Node.js" })}
          >
            Node.js
          </NavLink>
        </div>
      </div>
    </div>
  );
}
