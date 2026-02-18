# Requirements Document

## Introduction

This document specifies the requirements for a personal resume web page for Daniel Sebastián Ochoa Urrego. The web page will present his professional profile, work experience, education, skills, and contact information in a clean, modern, tabbed interface optimized for both desktop and mobile viewing. The application will be built using Node 24 LTS.

## Glossary

- **Resume_Page**: The web application that displays the resume content using a tabbed interface
- **Tab**: An interactive element that switches between different content sections
- **Hero_Tab**: The tab containing profile photo, name, and professional summary
- **Academic_Tab**: The tab displaying educational history and achievements
- **Experience_Tab**: The tab displaying work history, projects, and skills
- **Contact_Tab**: The tab displaying contact information and links
- **Active_Tab**: The currently visible tab in the interface
- **Responsive_Layout**: A layout that adapts to different screen sizes and devices
- **Tab_Navigation**: The mechanism for switching between tabs

## Requirements

### Requirement 1: Page Structure and Tabbed Interface

**User Story:** As a visitor, I want to view a well-organized tabbed resume interface, so that I can easily navigate between different aspects of Daniel's professional background.

#### Acceptance Criteria

1. THE Resume_Page SHALL contain exactly four tabs: Hero_Tab, Academic_Tab, Experience_Tab, and Contact_Tab
2. WHEN the page loads, THE Resume_Page SHALL display the Hero_Tab as the Active_Tab
3. WHEN a visitor clicks on a tab, THE Resume_Page SHALL display that tab's content and hide all other tabs
4. THE Resume_Page SHALL use a responsive layout that adapts to different screen sizes
5. WHEN viewed on mobile devices, THE Resume_Page SHALL maintain tab functionality and readability
6. THE Resume_Page SHALL visually indicate which tab is currently active

### Requirement 2: Hero Tab Content

**User Story:** As a visitor, I want to see Daniel's photo, name, and professional summary in the first tab, so that I get a quick overview of who he is.

#### Acceptance Criteria

1. THE Hero_Tab SHALL display the profile photo from ProfilePhoto.jpeg
2. THE Hero_Tab SHALL display the name "Daniel Sebastián Ochoa Urrego"
3. THE Hero_Tab SHALL display the tagline "Software Engineer + Java lover"
4. THE Hero_Tab SHALL display the complete profile text from resume.txt
5. WHEN the profile photo is unavailable, THE Hero_Tab SHALL display a placeholder or fallback image

### Requirement 3: Academic Tab Content

**User Story:** As a visitor, I want to view Daniel's educational background and achievements in a dedicated tab, so that I can understand his academic qualifications.

#### Acceptance Criteria

1. THE Academic_Tab SHALL display the degree "Systems Engineer"
2. THE Academic_Tab SHALL display the university name "Universidad Escuela Colombiana de Ingeniería Julio Garavito"
3. THE Academic_Tab SHALL display the education period "August 2019 - October 2024"
4. THE Academic_Tab SHALL display all three achievements: Top Intern award, Beca de excelencia Julio Garavito, and Beca Fundación Country Club de Bogotá
5. THE Academic_Tab SHALL display the complete description for each achievement

### Requirement 4: Professional Experience Tab Content

**User Story:** As a visitor, I want to view Daniel's work experience, projects, and skills in a dedicated tab, so that I can assess his professional capabilities.

#### Acceptance Criteria

1. THE Experience_Tab SHALL display both work experiences: Publicis Sapient and TecFinanzas
2. WHEN displaying work experience, THE Experience_Tab SHALL include job title, company name, date range, responsibilities, and tech stack
3. THE Experience_Tab SHALL display all three projects: VsWordle, ArriendamEsta, and GridSearch
4. WHEN displaying projects, THE Experience_Tab SHALL include project name, description, and tech stack
5. THE Experience_Tab SHALL display skills categorized by proficiency level: Advanced and Intermediate
6. THE Experience_Tab SHALL display all certifications with their names
7. THE Experience_Tab SHALL display language proficiency: English (B2) and Spanish (Native)

### Requirement 5: Contact Tab Content

**User Story:** As a visitor, I want to easily find Daniel's contact information in a dedicated tab, so that I can reach out to him.

#### Acceptance Criteria

1. THE Contact_Tab SHALL display the phone number "+57 3006239923"
2. THE Contact_Tab SHALL display the email address "danochoa1412@gmail.com"
3. THE Contact_Tab SHALL provide a clickable link to the LinkedIn profile
4. THE Contact_Tab SHALL provide a clickable link to the GitHub profile
5. WHEN a visitor clicks on the email address, THE Resume_Page SHALL open the default email client with the email pre-filled

### Requirement 6: Visual Design and Styling

**User Story:** As a visitor, I want to view a modern and professional-looking resume page with smooth tab transitions, so that I have a positive impression of Daniel's attention to detail.

#### Acceptance Criteria

1. THE Resume_Page SHALL use a clean, modern design aesthetic appropriate for a software engineer's portfolio
2. THE Resume_Page SHALL use consistent typography throughout all tabs
3. THE Resume_Page SHALL use a professional color scheme
4. THE Resume_Page SHALL provide clear visual distinction between active and inactive tabs
5. THE Resume_Page SHALL ensure sufficient contrast for text readability
6. WHEN switching between tabs, THE Resume_Page SHALL provide smooth visual transitions

### Requirement 7: Tab Navigation and User Experience

**User Story:** As a visitor, I want to easily switch between tabs, so that I can quickly find specific information.

#### Acceptance Criteria

1. THE Resume_Page SHALL provide clearly labeled tabs for all four content areas
2. WHEN a visitor clicks a tab, THE Resume_Page SHALL immediately display that tab's content
3. WHEN viewed on mobile devices, THE Resume_Page SHALL provide an accessible tab navigation mechanism
4. THE Resume_Page SHALL maintain tab state when switching between tabs
5. THE Resume_Page SHALL load within 3 seconds on standard broadband connections

### Requirement 8: Content Accuracy and Completeness

**User Story:** As a visitor, I want to see accurate and complete information, so that I can make informed decisions about Daniel's qualifications.

#### Acceptance Criteria

1. THE Resume_Page SHALL display all content from resume.txt without omissions
2. THE Resume_Page SHALL maintain the original meaning and context of all resume content
3. WHEN displaying technical skills, THE Resume_Page SHALL preserve the proficiency level categorization
4. WHEN displaying work experience, THE Resume_Page SHALL preserve all bullet points and achievements
5. THE Resume_Page SHALL display all tech stacks associated with each experience and project

### Requirement 9: Accessibility

**User Story:** As a visitor with accessibility needs, I want to access all resume content and navigate between tabs, so that I can evaluate Daniel's qualifications regardless of my abilities.

#### Acceptance Criteria

1. THE Resume_Page SHALL use semantic HTML elements for proper document structure
2. THE Resume_Page SHALL provide alternative text for the profile photo
3. THE Resume_Page SHALL ensure all tabs are keyboard accessible using Tab and Enter keys
4. THE Resume_Page SHALL maintain a logical tab order through all interactive elements
5. THE Resume_Page SHALL use ARIA labels and roles for tab navigation to enhance screen reader compatibility

### Requirement 10: Technology Stack

**User Story:** As a developer, I want the resume page built with Node 24 LTS and React, so that it uses modern, stable technology with a component-based architecture.

#### Acceptance Criteria

1. THE Resume_Page SHALL be built using Node 24 LTS as the runtime environment
2. THE Resume_Page SHALL use React as the frontend framework
3. THE Resume_Page SHALL use npm or yarn as the package manager
4. THE Resume_Page SHALL include a package.json file with Node 24 LTS specified as the engine requirement
5. THE Resume_Page SHALL use modern JavaScript (ES6+) or TypeScript features supported by Node 24 LTS
6. THE Resume_Page SHALL include appropriate build scripts in package.json for development and production

### Requirement 11: Cross-Browser Compatibility

**User Story:** As a visitor, I want the resume page to work correctly in my browser, so that I can view the content regardless of my browser choice.

#### Acceptance Criteria

1. THE Resume_Page SHALL render correctly in Chrome, Firefox, Safari, and Edge browsers
2. THE Resume_Page SHALL maintain consistent layout across supported browsers
3. THE Resume_Page SHALL handle missing CSS gracefully with readable fallback styling
4. WHEN JavaScript is disabled, THE Resume_Page SHALL still display all content
5. THE Resume_Page SHALL function correctly on both desktop and mobile browsers
