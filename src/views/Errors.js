import React from "react";
import { NavLink } from 'react-router-dom';
import { Container, Button } from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>Ohh Snap!!</h3>
        <p>There was a problem on our end. Please try again later.</p>
        <NavLink to="/credentials"><Button pill>&larr; Dashboard</Button></NavLink>
      </div>
    </div>
  </Container>
);

export default Errors;
