import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Styles = ["btn--primary", "btn--outline", "btn--test"];

const Sizes = ["btn--medium", "btn-large"];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  const checkButtonStyle = Styles.includes(buttonStyle)
    ? buttonStyle
    : Styles[0];

  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`${checkButtonStyle} ${checkButtonSize} btn`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
