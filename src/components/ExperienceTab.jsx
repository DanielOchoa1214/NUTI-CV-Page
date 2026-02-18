import styles from '../styles/ExperienceTab.module.css';

function ExperienceTab({ workExperience, projects, skills, certifications, languages }) {
  return (
    <div className={styles.experienceContainer}>
      {/* Work Experience Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        {workExperience.map((job, index) => (
          <div key={index} className={styles.workItem}>
            <div className={styles.workHeader}>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.period}>{job.period}</p>
            </div>
            <ul className={styles.responsibilities}>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
            <p className={styles.techStack}>
              <strong>Tech Stack:</strong> {job.techStack}
            </p>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <p className={styles.techStack}>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h3 className={styles.skillLevel}>Advanced</h3>
            <ul className={styles.skillList}>
              {skills.advanced.map((skill, index) => (
                <li key={index} className={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3 className={styles.skillLevel}>Intermediate</h3>
            <ul className={styles.skillList}>
              {skills.intermediate.map((skill, index) => (
                <li key={index} className={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <ul className={styles.certificationList}>
          {certifications.map((cert, index) => (
            <li key={index} className={styles.certificationItem}>{cert}</li>
          ))}
        </ul>
      </section>

      {/* Languages Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Languages</h2>
        <ul className={styles.languageList}>
          {languages.map((lang, index) => (
            <li key={index} className={styles.languageItem}>
              <span className={styles.languageName}>{lang.language}</span>
              <span className={styles.proficiency}>({lang.proficiency})</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ExperienceTab;
