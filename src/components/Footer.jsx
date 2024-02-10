import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        Home
      </Link>
      <Link to="/blue" style={{ textDecoration: "none", color: "black" }}>
        Blue
      </Link>
      <Link to="/red" style={{ textDecoration: "none", color: "black" }}>
        Red
      </Link>
    </div>
  );
}
