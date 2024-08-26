import Link from "next/link";
import styles from './Navbar.module.css';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src='/image/logo_black.png' width={40} height={40} alt="Logo" />
        <div className={styles.logoname}>URBAN NET</div>
      </div>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/projectshome" className={styles.link}>Projects</Link>
      <Link href="/tasks" className={styles.link}>Tasks</Link>
      <Link href="/projectshome" className={styles.link}>Notification</Link>
      <Link href="/projectshome" className={styles.link}>Training</Link>
      <Link href="/projectshome" className={styles.link}>Support</Link>
    </nav>
  );
}

export default Navbar;
