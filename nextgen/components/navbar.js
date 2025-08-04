import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Image
        src="/images/company-logo.png"
        alt="Company Logo"
        width={140}
        height={70}
        className={styles.logo}
      />
      
      <div className={styles.navLinks}>
        <Link href="/" legacyBehavior><a className={styles.navLink}>Home</a></Link>
        <Link href="/about-us" legacyBehavior><a className={styles.navLink}>About us</a></Link>
        <Link href="/services" legacyBehavior><a className={styles.navLink}>Services</a></Link>
        <Link href="/all-products" legacyBehavior><a className={styles.navLink}>Products</a></Link>
        <Link href="/contact-us" legacyBehavior><a className={styles.navLink}>Contact Us</a></Link>
      </div>
    </nav>
  );
}
