import React from "react";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import useForm from "../../hooks/useForm";
import validateFormData from "../../helpers/validateFormData";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const onSubmit = (formData, callback) => {
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      callback();
    }, 1500);
  };

  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    setIsSubmitted,
  } = useForm(initialState, validateFormData, onSubmit);

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Contact Us</h1>
            <p>
              Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will get back
              to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactForm}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.formContainer}>
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <h2>Thank You!</h2>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2>Send Us a Message</h2>

                  <FormInput
                    label="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    error={errors.name}
                    required
                  />

                  <FormInput
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    error={errors.email}
                    required
                  />

                  <FormInput
                    label="Subject"
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    error={errors.subject}
                    required
                  />

                  <FormInput
                    label="Message"
                    type="textarea"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    error={errors.message}
                    required
                  />

                  <Button type="submit" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>

              <div className={styles.infoItem}>
                <div className={styles.icon}>📧</div>
                <div>
                  <h3>Email</h3>
                  <p>info@ecotrack.com</p>
                  <p>support@ecotrack.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>📱</div>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>📍</div>
                <div>
                  <h3>Office</h3>
                  <p>123 Green Street</p>
                  <p>Eco City, EC 12345</p>
                </div>
              </div>

              <div className={styles.social}>
                <h3>Follow Us</h3>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="Facebook">
                    <img src="https://img.icons8.com/ios/500/facebook-new.png" alt="facebook-new"/>
                  </a>
                  <a href="#" aria-label="Twitter">
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>How accurate is the carbon footprint calculator?</h3>
              <p>
                Our calculator uses industry-standard methodologies and data sources to provide estimates that are
                typically within 10-15% of actual emissions. We continuously update our models to improve accuracy.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Is my data secure and private?</h3>
              <p>
                Yes, we take data privacy seriously. We use encryption and follow best practices for data security. We
                never sell your personal information to third parties.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Can I use EcoTrack for my business?</h3>
              <p>
                We offer business plans with additional features for tracking organizational carbon footprints. Contact
                our sales team for more information.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How often should I update my carbon footprint?</h3>
              <p>
                For the most accurate tracking, we recommend updating your data monthly. However, even quarterly updates
                can provide valuable insights into your environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
