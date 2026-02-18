import styles from '../styles/AcademicTab.module.css';

function AcademicTab({ education, achievements }) {
  return (
    <div className={styles.academicContainer}>
      <section className={styles.educationSection}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.educationCard}>
          <h3 className={styles.degree}>{education.degree}</h3>
          <p className={styles.university}>{education.university}</p>
          <div className={styles.educationDetails}>
            <span className={styles.period}>{education.period}</span>
            <span className={styles.location}>{education.location}</span>
          </div>
        </div>
      </section>

      <section className={styles.achievementsSection}>
        <h2 className={styles.sectionTitle}>Achievements</h2>
        <div className={styles.achievementsList}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.achievementCard}>
              <h3 className={styles.achievementTitle}>{achievement.title}</h3>
              <p className={styles.achievementDescription}>{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AcademicTab;
