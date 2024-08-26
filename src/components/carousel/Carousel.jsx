import Image from 'next/image';
import styles from './Carousel.module.css'; // Assuming you have a CSS module for styling

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <Image
        src='/image/img.jpg'
        layout="fill" // This makes the image fill its parent container
        objectFit="cover" // Ensures the image covers the entire container
        alt="Carousel Image" // Always include an alt attribute for accessibility
      />
    </div>
  );
}

export default Carousel;
