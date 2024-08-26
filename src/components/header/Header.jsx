import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title_projects}>
                <h1 className={styles.title}>DEPARTMENT OF PUBLIC WORKS</h1>
            </div>
            <div className={styles.logo_container}>
                <Image src="/image/Profile.png" alt="profile" width={40} height={40} className={styles.profile} />
                <button className="btn btn-danger">Log Out</button>
            </div>
        </div>
    );
}

export default Header;
