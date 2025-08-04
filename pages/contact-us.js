"use client";
import styles from '../styles/contact-us.module.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <>
      <NavBar />
      <div className={styles.contactWrapper}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <div className={styles.contactInfo}>
          <p>
            We'd love to hear from you! Reach out for any inquiries, quotes, or feedback.<br />
            Email: <a href="mailto:info@nextgen.co.zw">info@nextgen.co.zw</a><br />
            Phone: <a href="tel:+263242711652">+263 242 711 652</a>
          </p>
        </div>
        <form
          className={styles.contactForm}
          action="https://formsubmit.co/tanaka.humbani@gmail.com" // Replace with your email
          method="POST"
        >
          <div className={styles.inputGroup}>
            <label className={styles.labelText} htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className='styles.labelText' htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className='styles.labelText' htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Type your message here..."
              className={styles.textArea}
            />
          </div>
          <button className={styles.submitButton}>
            Send Message
          </button>
          {/* {submitted && (
            <p style={{ color: "#046307", marginTop: "1rem" }}>
              Thank you for contacting us! We will get back to you soon.
            </p> */}
          {/* )} */}
        </form>
      </div>
      <Footer />
    </>
  );
}
