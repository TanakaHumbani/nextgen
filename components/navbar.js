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
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/about-us" className={styles.navLink}>About us</Link>
        <Link href="/services" className={styles.navLink}>Services</Link>
        <Link href="/all-products" className={styles.navLink}>Products</Link>
        <Link href="/contact-us" className={styles.navLink}>Contact Us</Link>
      </div>
    </nav>
  );
}
