import React from "react";

export const Button = ({ children, size, onClick }) => {
  switch (size) {
    case "mini":
      return (
        <button onClick={onClick} className="btn btn-mini">
          {children}
        </button>
      );
    case "icon":
      return (
        <button onClick={onClick} className="btn btn-icon">
          {children}
        </button>
      );
    default:
      return (
        <button onClick={onClick} className="btn">
          {children}
        </button>
      );
  }
};
