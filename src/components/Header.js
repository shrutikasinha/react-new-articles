import React from "react";
import "./styles.css";
import CurrentTime from "./CurrentTime";
import { ReactComponent as Logo } from "../constants/Logo.svg";

const Header = () => {
  return (
    <header className="container">
      <div className="left-text">
        <CurrentTime />
      </div>
      <div className="title">
        <Logo className="icon" />
      </div>
    </header>
  );
};

export default Header;
