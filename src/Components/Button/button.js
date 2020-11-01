import React from "react";
import "./button.scss";

const Button = ({
  className = "",
  type,
  content = "",
  link,
  onClick,
  children,
  hasHover,
  ...props
}) => {
  return (
    <div className="btn-wrapper">
      {type === "button" ? (
        <button
          className={`${className} ${hasHover && "hover"} shine`}
          onClick={onClick}
          {...props}
        >
          {content || children}
        </button>
      ) : (
        <a className={`${className} ${hasHover && "hover"}`} href={link} {...props}>
          {content}
        </a>
      )}
    </div>
  );
};

export default Button;
