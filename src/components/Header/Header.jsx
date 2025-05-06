import React from "react";
import { useContext, useState } from "react"
import { NavLink } from "react-router"
import { ThemeContext } from "../../context/ThemeContext"
import Button from "../Button/Button"
import styles from "./Header.module.scss"
import { SunIcon } from "../Button/SunIcon";
import { MoonIcon } from "../Button/MoonIcon";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <h1>EcoTrack</h1>
          </NavLink>
        </div>

        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/data"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={() => setMenuOpen(false)}
              >
                Data
              </NavLink>
            </li>
          </ul>
          <Button
            onClick={toggleTheme}
            className={styles.themeToggle}
            variant="toggle"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            { theme === "light" ? <SunIcon /> : <MoonIcon /> }
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
