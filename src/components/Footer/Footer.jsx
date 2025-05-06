import React from "react";
import styles from "./Footer.module.scss"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h2>EcoTrack</h2>
            <p>Track and reduce your carbon footprint</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} EcoTrack. All rights reserved.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
            <img src="https://img.icons8.com/ios/500/facebook-new.png" alt="facebook-new"/>
            </a>
            <a href="#" aria-label="TwitterX">
            <img src="https://img.icons8.com/ios/500/twitterx--v2.png" alt="twitterx--v2"/>
            </a>
            <a href="#" aria-label="Instagram">
            <img src="https://img.icons8.com/ios/500/instagram-new--v1.png" alt="instagram-new--v1"/>
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="https://img.icons8.com/ios/500/linkedin.png" alt="linkedIn-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
