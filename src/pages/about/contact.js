// src/pages/contact.js
import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header'; // Use your existing Header
import Footer from '@/components/Footer'; // Use your existing Footer
import styles from '@/styles/Contact.module.css'; // Import CSS Module

const ContactPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setSubmitStatus(null);

    // ** TODO: Implement actual form submission logic here **
    // Example: Send data to an API endpoint or a form service
    console.log('Form data submitted:', formData);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example success/error handling (replace with actual response handling)
    // For demonstration, let's assume success
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form

    // Example error:
    // setSubmitStatus('error');

    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Contact Us | TravelCardInsider</title>
        <meta
          name="description"
          content="Get in touch with TravelCardInsider. Send us your questions, feedback, or inquiries about travel credit cards and rewards."
        />
        {/* Add other relevant meta tags if needed */}
      </Head>

      <Header /> {/* Render the shared header */}

      {/* Main Content Wrapper */}
      <main className={styles.pageContainer}>
        {/* Replicating the <section> from HTML */}
        <section id="contact-us" className={styles.contactSection}>
          {/* Replicating the container div */}
          <div className={styles.contactContainer}>
            <h2 className={styles.title}>Contact Us</h2>
            <p className={styles.contactIntro}>
              Have questions about travel rewards, or want to share feedback? We’d love to hear from you!
              Fill out the form below, and our team will get back to you as soon as possible.
            </p>

            {/* CONTACT FORM */}
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name <span className={styles.required}>*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address <span className={styles.required}>*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                   value={formData.email}
                   onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject <span className={styles.required}>*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                   value={formData.subject}
                   onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message <span className={styles.required}>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submission Status Messages */}
              {submitStatus === 'success' && (
                <p className={styles.successMessage}>Thank you! Your message has been sent successfully.</p>
              )}
              {submitStatus === 'error' && (
                <p className={styles.errorMessage}>Sorry, there was an error sending your message. Please try again later.</p>
              )}

              <button type="submit" className={styles.contactBtn} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* OPTIONAL CONTACT INFO SECTION */}
            <div className={styles.contactInfo}>
              <h3 className={styles.subHeading}>Other Ways to Reach Us</h3>
              <p>
                Email: <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>
                {/* Add other contact methods if needed */}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer /> {/* Render the shared footer */}
    </>
  );
};

export default ContactPage;