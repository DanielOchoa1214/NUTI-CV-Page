import { useState } from 'react';
import styles from '../styles/HeroTab.module.css';

function HeroTab({ name, tagline, profileText, photoUrl }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className={styles.heroContainer}>
      <div className={styles.photoContainer}>
        {!imageError ? (
          <img
            src={photoUrl}
            alt={`Profile photo of ${name}`}
            className={styles.profilePhoto}
            onError={handleImageError}
          />
        ) : (
          <div className={styles.photoPlaceholder} aria-label="Profile photo unavailable">
            <svg
              className={styles.placeholderIcon}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>
      
      <div className={styles.contentContainer}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.profileText}>{profileText}</p>
      </div>
    </section>
  );
}

export default HeroTab;
