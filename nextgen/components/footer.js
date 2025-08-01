
import Image from 'next/image';
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <h2>NextGen Construction</h2>
          <p>Your trusted partner in quality construction materials and services.</p>
        </div>
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>      
            <li><a href="/all-products">All Products</a></li>
          </ul>
        </div>
        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:"></a></p>
          <p>Phone: <a href="tel:">+123 456 789</a></p>
          <p>Address: 123 Construction St, City, Country</p>
        </div>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} NextGen Construction. All rights reserved.</p>
        <p>
          <Image src="/images/logo.png" alt="NextGen Logo" width={50} height={50} />
        </p>
        <p className='styles.privacyPolicy'>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
