import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" legacyBehavior><a className={styles.navLink}>Home</a></Link>
      <Link href="/about" legacyBehavior><a className={styles.navLink}>About us</a></Link>
      <Link href="/services" legacyBehavior><a className={styles.navLink}>Services</a></Link>
      <Link href="/contact" legacyBehavior><a className={styles.navLink}>Contact Us</a></Link>
    </nav>
  );
}