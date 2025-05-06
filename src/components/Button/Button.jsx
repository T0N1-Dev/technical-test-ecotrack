import React from "react";
import styles from "./Button.module.scss"

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  className = "",
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${styles.button} 
        ${styles[variant]} 
        ${styles[size]} 
        ${fullWidth ? styles.fullWidth : ""}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
