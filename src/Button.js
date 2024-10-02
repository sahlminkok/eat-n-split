import React from "react";

const Button = ({ children, onAction }) => {
  return (
    <button className="button" onClick={onAction}>
      {children}
    </button>
  );
};

export default Button;
