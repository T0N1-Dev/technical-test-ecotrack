import React from "react";
import styles from "./Card.module.scss"

const Card = ({ children, title, subtitle, icon, className = "", onClick, ...props }) => {
  return (
    <div className={`${styles.card} ${className}`} onClick={onClick} {...props}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Card
