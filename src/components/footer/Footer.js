import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { Github } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="flex-container-footer">
        <div className="footer-menu first-footer-menu">
          <h6 className="footer-item-heading">API</h6>

          <div className="footer-item">
            <Link className="footer-itemLink" to="/register">
              Get started
            </Link>
          </div>

          <div className="footer-item">
            <Link className="footer-itemLink" to="/register">
              Documentation
            </Link>
          </div>
        </div>

        <div className="footer-menu second-footer-menu">
          <h6 className="footer-item-heading">Company</h6>

          <div className="footer-item">
            <Link className="footer-itemLink" to="/register">
              Privacy policy
            </Link>
          </div>

          <div className="footer-item">
            <Link className="footer-itemLink" to="/register">
              Terms of service
            </Link>
          </div>
        </div>

        <div className="footer-menu third-footer-menu">
          <h6 className="footer-item-heading">Support</h6>

          <div className="footer-item">
            <Link className="footer-itemLink" to="/register">
              Contact
            </Link>
          </div>

          <div className="footer-item">
            <Link className="footer-itemLink" to="/register">
              Twitter <Twitter className="boot-icon" />
            </Link>
          </div>

          <div className="footer-item">
            <Link className="footer-itemLink" to="/register">
              Github <Github className="boot-icon" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
