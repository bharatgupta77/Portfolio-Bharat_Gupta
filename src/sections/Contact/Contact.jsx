// Contact.jsx
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Auto-close success message after 30 seconds
  useEffect(() => {
    if (submitStatus?.type === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const closeMessage = () => {
    setSubmitStatus(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - You'll need to set these up
      const serviceId = 'service_mqaocks';
      const templateId = 'template_1uri7nn';
      const publicKey = 'qK8pBQmpfUFzuPryy';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'guptabharat297@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

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

        <form className={styles.formSection} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Type your message here...."
            rows="5"
            required
          ></textarea>

          {submitStatus && (
            <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
              <span>{submitStatus.message}</span>
              <button 
                type="button"
                className={styles.closeButton}
                onClick={closeMessage}
                aria-label="Close message"
              >
                <FaTimes />
              </button>
            </div>
          )}

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
