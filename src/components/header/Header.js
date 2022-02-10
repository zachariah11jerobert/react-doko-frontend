import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="offers inline-offer">
        <p style={{ marginBottom: "5px", marginTop: "5px" }}>
          <b style={{ fontSize: 17, letterSpacing: 2 }}>
            Up to <span style={{ fontSize: 20 }}>85% </span>
            OFF your first order !
          </b>
        </p>
      </div>
    </header>
  );
};

export default Header;
