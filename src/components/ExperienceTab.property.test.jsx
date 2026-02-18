import { describe, it, expect } from 'vitest';
import { render, within, cleanup } from '@testing-library/react';
import * as fc from 'fast-check';
import ExperienceTab from './ExperienceTab';
import AcademicTab from './AcademicTab';

describe('ExperienceTab - Property-Based Tests', () => {
  /**
   * **Validates: Requirements 3.5, 4.2, 4.4, 4.6, 8.3, 8.4**
   * Property 5: Data Completeness
   * 
   * For any data item (achievement, work experience, project, certification, skill, language),
   * all required fields for that item type should be rendered in the DOM:
   * - Achievements: title and description
   * - Work Experience: job title, company, date range, all responsibilities, tech stack
   * - Projects: name, description, tech stack
   * - Certifications: name
   * - Skills: name and correct proficiency category
   * - Languages: language name and proficiency level
   */
  it('all required fields are rendered for each data item type', () => {
    // Helper to normalize whitespace (collapse multiple spaces to single space)
    const normalizeWhitespace = (str) => str.replace(/\s+/g, ' ');

    // Helper to generate non-empty strings with letters, numbers, and spaces (trimmed)
    const nonEmptyString = (minLength, maxLength) => 
      fc.string({ minLength, maxLength, unit: fc.constantFrom(...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '.split('')) })
        .map(s => s.trim())
        .filter(s => s.length >= minLength && /[a-zA-Z0-9]/.test(s));

    // Define generators for each data type
    const achievementArb = fc.record({
      title: nonEmptyString(5, 100),
      description: nonEmptyString(10, 500)
    });

    const workExperienceArb = fc.record({
      title: nonEmptyString(5, 100),
      company: nonEmptyString(5, 100),
      period: nonEmptyString(5, 50),
      responsibilities: fc.array(nonEmptyString(10, 200), { minLength: 1, maxLength: 10 }),
      techStack: nonEmptyString(5, 200)
    });

    const projectArb = fc.record({
      name: nonEmptyString(5, 100),
      description: nonEmptyString(10, 500),
      techStack: nonEmptyString(5, 200)
    });

    const certificationArb = nonEmptyString(5, 100);

    const skillArb = nonEmptyString(3, 50);

    const languageArb = fc.record({
      language: nonEmptyString(3, 50),
      proficiency: nonEmptyString(2, 20)
    });

    fc.assert(
      fc.property(
        fc.array(achievementArb, { minLength: 1, maxLength: 5 }),
        fc.array(workExperienceArb, { minLength: 1, maxLength: 3 }),
        fc.array(projectArb, { minLength: 1, maxLength: 5 }),
        fc.record({
          advanced: fc.array(skillArb, { minLength: 1, maxLength: 10 }),
          intermediate: fc.array(skillArb, { minLength: 1, maxLength: 10 })
        }),
        fc.array(certificationArb, { minLength: 1, maxLength: 10 }),
        fc.array(languageArb, { minLength: 1, maxLength: 5 }),
        (achievements, workExperience, projects, skills, certifications, languages) => {
          // Render AcademicTab for achievements
          const educationData = {
            degree: "Test Degree",
            university: "Test University",
            period: "2020-2024",
            location: "Test Location"
          };
          
          const { container: academicContainer } = render(
            <AcademicTab education={educationData} achievements={achievements} />
          );

          // Verify all achievements have title and description
          for (const achievement of achievements) {
            const normalizedTitle = normalizeWhitespace(achievement.title);
            const normalizedDesc = normalizeWhitespace(achievement.description);
            
            const titleElements = within(academicContainer).queryAllByText((content) => {
              return normalizeWhitespace(content) === normalizedTitle;
            });
            const descriptionElements = within(academicContainer).queryAllByText((content) => {
              return normalizeWhitespace(content) === normalizedDesc;
            });
            
            if (titleElements.length === 0 || descriptionElements.length === 0) {
              cleanup();
              return false;
            }
          }

          cleanup();

          // Render ExperienceTab for work experience, projects, skills, certifications, and languages
          const { container: experienceContainer } = render(
            <ExperienceTab
              workExperience={workExperience}
              projects={projects}
              skills={skills}
              certifications={certifications}
              languages={languages}
            />
          );

          // Verify all work experience fields are present
          for (const job of workExperience) {
            // Check job title
            const normalizedTitle = normalizeWhitespace(job.title);
            const titleElements = within(experienceContainer).queryAllByText((content) => 
              normalizeWhitespace(content) === normalizedTitle
            );
            if (titleElements.length === 0) {
              cleanup();
              return false;
            }

            // Check company
            const normalizedCompany = normalizeWhitespace(job.company);
            const companyElements = within(experienceContainer).queryAllByText((content) => 
              normalizeWhitespace(content) === normalizedCompany
            );
            if (companyElements.length === 0) {
              cleanup();
              return false;
            }

            // Check period
            const normalizedPeriod = normalizeWhitespace(job.period);
            const periodElements = within(experienceContainer).queryAllByText((content) => 
              normalizeWhitespace(content) === normalizedPeriod
            );
            if (periodElements.length === 0) {
              cleanup();
              return false;
            }

            // Check all responsibilities
            for (const responsibility of job.responsibilities) {
              const normalizedResp = normalizeWhitespace(responsibility);
              const respElements = within(experienceContainer).queryAllByText((content) => 
                normalizeWhitespace(content) === normalizedResp
              );
              if (respElements.length === 0) {
                cleanup();
                return false;
              }
            }

            // Check tech stack (appears in text with "Tech Stack:" prefix)
            const normalizedTechStack = normalizeWhitespace(job.techStack);
            const techStackElements = within(experienceContainer).queryAllByText((content, element) => {
              return normalizeWhitespace(element?.textContent || '').includes(normalizedTechStack);
            });
            if (techStackElements.length === 0) {
              cleanup();
              return false;
            }
          }

          // Verify all projects have name, description, and tech stack
          for (const project of projects) {
            const normalizedName = normalizeWhitespace(project.name);
            const nameElements = within(experienceContainer).queryAllByText((content) => 
              normalizeWhitespace(content) === normalizedName
            );
            if (nameElements.length === 0) {
              cleanup();
              return false;
            }

            const normalizedDesc = normalizeWhitespace(project.description);
            const descriptionElements = within(experienceContainer).queryAllByText((content) => 
              normalizeWhitespace(content) === normalizedDesc
            );
            if (descriptionElements.length === 0) {
              cleanup();
              return false;
            }

            const normalizedTechStack = normalizeWhitespace(project.techStack);
            const techStackElements = within(experienceContainer).queryAllByText((content, element) => {
              return normalizeWhitespace(element?.textContent || '').includes(normalizedTechStack);
            });
            if (techStackElements.length === 0) {
              cleanup();
              return false;
            }
          }

          // Verify all certifications are present
          for (const cert of certifications) {
            const normalizedCert = normalizeWhitespace(cert);
            const certElements = within(experienceContainer).queryAllByText((content) => 
              normalizeWhitespace(content) === normalizedCert
            );
            if (certElements.length === 0) {
              cleanup();
              return false;
            }
          }

          // Verify all skills appear in correct proficiency category
          // Check that "Advanced" and "Intermediate" headers exist
          const advancedHeaders = within(experienceContainer).queryAllByText('Advanced');
          const intermediateHeaders = within(experienceContainer).queryAllByText('Intermediate');
          
          if (advancedHeaders.length === 0 || intermediateHeaders.length === 0) {
            cleanup();
            return false;
          }

          // Check all advanced skills are present
          for (const skill of skills.advanced) {
            const normalizedSkill = skill.replace(/\s+/g, ' ');
            const skillElements = within(experienceContainer).queryAllByText((content) => {
              const normalizedContent = content.replace(/\s+/g, ' ');
              return normalizedContent === normalizedSkill;
            });
            if (skillElements.length === 0) {
              cleanup();
              return false;
            }
          }

          // Check all intermediate skills are present
          for (const skill of skills.intermediate) {
            const normalizedSkill = skill.replace(/\s+/g, ' ');
            const skillElements = within(experienceContainer).queryAllByText((content) => {
              const normalizedContent = content.replace(/\s+/g, ' ');
              return normalizedContent === normalizedSkill;
            });
            if (skillElements.length === 0) {
              cleanup();
              return false;
            }
          }

          // Verify all languages show name and proficiency
          for (const lang of languages) {
            const normalizedLang = normalizeWhitespace(lang.language);
            const langElements = within(experienceContainer).queryAllByText((content) => 
              normalizeWhitespace(content) === normalizedLang
            );
            if (langElements.length === 0) {
              cleanup();
              return false;
            }

            // Check proficiency (appears in parentheses)
            const normalizedProf = normalizeWhitespace(lang.proficiency);
            const proficiencyElements = within(experienceContainer).queryAllByText((content, element) => {
              return normalizeWhitespace(element?.textContent || '').includes(`(${normalizedProf})`);
            });
            if (proficiencyElements.length === 0) {
              cleanup();
              return false;
            }
          }

          cleanup();
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
