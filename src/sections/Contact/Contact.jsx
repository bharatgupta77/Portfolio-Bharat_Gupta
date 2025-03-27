// Contact.jsx
import React from "react";
import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.card}>
        <div className={styles.infoSection}>
          <h2 className={styles.heading}>Get in Touch</h2>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <FaPhone className={styles.icon} />
              <span>+1-9452787524</span>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <span>guptabharat297@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>Dallas, Texas</span>
            </div>
          </div>
        </div>

        <form className={styles.formSection}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here...."
            rows="5"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
