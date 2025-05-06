import React from "react";
import styles from "./FormInput.module.scss"

const FormInput = ({
  label,
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  className = "",
  ...props
}) => {
  return (
    <div className={`${styles.formGroup} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles.input} ${styles.textarea} ${error ? styles.hasError : ""}`}
          required={required}
          {...props}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles.input} ${error ? styles.hasError : ""}`}
          required={required}
          {...props}
        />
      )}

      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  )
}

export default FormInput
