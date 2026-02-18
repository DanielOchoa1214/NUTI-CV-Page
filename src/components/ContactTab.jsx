import styles from '../styles/ContactTab.module.css';

function ContactTab({ phone, email, linkedin, github }) {
  return (
    <div className={styles.contactContainer}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Information</h2>
        
        <div className={styles.contactList}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Phone:</span>
            <a href={`tel:${phone}`} className={styles.contactLink}>
              {phone}
            </a>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email:</span>
            <a href={`mailto:${email}`} className={styles.contactLink}>
              {email}
            </a>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>LinkedIn:</span>
            <a 
              href={linkedin} 
              className={styles.contactLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              {linkedin}
            </a>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>GitHub:</span>
            <a 
              href={github} 
              className={styles.contactLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              {github}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactTab;
