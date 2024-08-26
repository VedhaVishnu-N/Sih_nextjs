import styles from './Dashboard.module.css';
import Image from 'next/image';

const Ongoing = () => {
    return (
        <div className={styles.box}>
            <div className={styles.logoContainer}>
                <Image src="/image/completed.png" className={styles.logo} width={60} height={60} alt="Logo" />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.count}>20</div>
                <h1 className={styles.heading}>Completed Projects</h1>
            </div>
        </div>
    );
}

export default Ongoing;
