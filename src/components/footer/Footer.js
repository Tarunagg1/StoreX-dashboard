import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="flex-container">
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

          <div className="footer-item">
            <Link className="footer-itemLink" to="/register">
              Sources
            </Link>
          </div>

          <div className="footer-item">
            <Link className="footer-itemLink" to="/register">
              Lorem Ipsum
            </Link>
          </div>

          <div className="footer-item">
            <Link className="footer-itemLink" to="/register">
              Get API
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
              Twitter
            </Link>
          </div>

          <div className="footer-item">
            <Link className="footer-itemLink" to="/register">
              Github
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
