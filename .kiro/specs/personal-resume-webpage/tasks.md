# Implementation Plan: Personal Resume Web Page

## Overview

This implementation plan breaks down the development of Daniel Sebastián Ochoa Urrego's personal resume web page into discrete, incremental tasks. The application will be built using React 18+ with Vite as the build tool, running on Node 24 LTS. Each task builds on previous work, with testing integrated throughout to catch errors early.

## Tasks

- [x] 1. Initialize project structure and dependencies
  - Create new Vite + React project with Node 24 LTS
  - Configure package.json with Node 24 LTS engine requirement
  - Install dependencies: React, React DOM, Vite
  - Install dev dependencies: Vitest, React Testing Library, fast-check, @testing-library/jest-dom
  - Set up basic project structure (src/, public/, components/, data/, styles/)
  - Copy ProfilePhoto.jpeg to public/ directory
  - Create vite.config.js with test configuration
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.6_

- [ ] 2. Create resume data model
  - [x] 2.1 Extract and structure resume data from resume.txt
    - Create src/data/resumeData.js with complete data structure
    - Include hero, academic, experience, and contact sections
    - Ensure all content from resume.txt is included
    - Define tabs configuration array
    - _Requirements: 2.2, 2.3, 2.4, 3.1, 3.2, 3.3, 3.4, 4.1, 4.3, 4.5, 4.7, 5.1, 5.2, 8.1_

- [ ] 3. Build core App component and tab state management
  - [x] 3.1 Create App.jsx with tab state management
    - Implement useState hook for activeTab state
    - Create setActiveTab handler function
    - Set initial state to 'hero' tab
    - Set up conditional rendering based on activeTab
    - _Requirements: 1.2, 1.3_
  
  - [x] 3.2 Write property test for tab switching exclusivity
    - **Property 1: Tab Switching Exclusivity**
    - **Validates: Requirements 1.3**
    - Test that only one tab's content is visible at any time
    - Use fast-check to generate random tab selections
    - Run 100 iterations
  
  - [x] 3.3 Write unit test for initial tab state
    - Test that Hero tab is active on initial render
    - _Requirements: 1.2_

- [ ] 4. Implement TabNavigation component
  - [x] 4.1 Create TabNavigation.jsx component
    - Accept activeTab, onTabChange, and tabs props
    - Render tab buttons for all four sections
    - Apply active styling to current tab
    - Handle click events to call onTabChange
    - Implement keyboard navigation (Tab, Enter, Arrow keys)
    - Add ARIA attributes (role="tablist", role="tab", aria-selected)
    - _Requirements: 1.1, 1.6, 7.1, 7.2, 9.3, 9.4, 9.5_
  
  - [x] 4.2 Write property test for active tab visual indicator
    - **Property 2: Active Tab Visual Indicator**
    - **Validates: Requirements 1.6**
    - Test that active tab has appropriate CSS class and aria-selected="true"
    - Use fast-check to test all possible active tab states
    - Run 100 iterations
  
  - [x] 4.3 Write property test for tab labels
    - **Property 3: Tab Labels Exist**
    - **Validates: Requirements 7.1**
    - Test that all tabs have non-empty labels
    - Run 100 iterations
  
  - [x] 4.4 Write unit tests for keyboard navigation
    - Test Tab key navigation through tab buttons
    - Test Enter key activates selected tab
    - Test Arrow keys navigate between tabs
    - _Requirements: 9.3, 9.4_

- [ ] 5. Implement HeroTab component
  - [x] 5.1 Create HeroTab.jsx component
    - Accept name, tagline, profileText, and photoUrl props
    - Render profile photo with alt text
    - Display name prominently
    - Display tagline below name
    - Render formatted profile text
    - Implement fallback for missing photo
    - Apply responsive styling
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 9.2_
  
  - [x] 5.2 Write unit tests for HeroTab content
    - Test that name is displayed correctly
    - Test that tagline is displayed correctly
    - Test that profile text is displayed correctly
    - Test that photo has correct src and alt attributes
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 9.2_
  
  - [x] 5.3 Write unit test for missing photo fallback
    - Test that placeholder is shown when photo fails to load
    - _Requirements: 2.5_

- [x] 6. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Implement AcademicTab component
  - [x] 7.1 Create AcademicTab.jsx component
    - Accept education and achievements props
    - Render education details (degree, university, period, location)
    - Render achievements list with titles and descriptions
    - Apply consistent formatting and spacing
    - Implement responsive layout
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_
  
  - [x] 7.2 Write unit tests for AcademicTab content
    - Test that degree is displayed
    - Test that university name is displayed
    - Test that education period is displayed
    - Test that all three achievement titles are displayed
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [ ] 8. Implement ExperienceTab component
  - [x] 8.1 Create ExperienceTab.jsx component
    - Accept workExperience, projects, skills, certifications, and languages props
    - Render work experience section with all details
    - Render projects section with descriptions and tech stacks
    - Render skills organized by proficiency level
    - Render certifications list
    - Render languages with proficiency levels
    - Apply visual hierarchy and consistent formatting
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_
  
  - [x] 8.2 Write property test for data completeness
    - **Property 5: Data Completeness**
    - **Validates: Requirements 3.5, 4.2, 4.4, 4.6, 8.3, 8.4**
    - Test that all required fields are rendered for each data item type
    - Use fast-check to generate varied data structures
    - Verify achievements show title and description
    - Verify work experience shows all fields including all responsibilities
    - Verify projects show name, description, and tech stack
    - Verify certifications show name
    - Verify skills appear in correct proficiency category
    - Verify languages show name and proficiency
    - Run 100 iterations
  
  - [x] 8.3 Write unit tests for ExperienceTab content
    - Test that both company names are displayed
    - Test that all three project names are displayed
    - Test that skills are categorized correctly
    - Test that language proficiencies are displayed
    - _Requirements: 4.1, 4.3, 4.5, 4.7_

- [ ] 9. Implement ContactTab component
  - [x] 9.1 Create ContactTab.jsx component
    - Accept phone, email, linkedin, and github props
    - Render phone number with tel: link
    - Render email with mailto: link
    - Render LinkedIn link with target="_blank" and rel="noopener noreferrer"
    - Render GitHub link with target="_blank" and rel="noopener noreferrer"
    - Add hover effects for interactive elements
    - Apply consistent styling
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_
  
  - [x] 9.2 Write unit tests for ContactTab links
    - Test that phone link uses tel: protocol
    - Test that email link uses mailto: protocol
    - Test that LinkedIn link has correct href
    - Test that GitHub link has correct href
    - Test that external links have target="_blank"
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 10. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 11. Implement global styling and responsive design
  - [x] 11.1 Create global.css with design system
    - Define color scheme variables
    - Set up typography system
    - Configure responsive breakpoints
    - Apply base styles and resets
    - _Requirements: 6.1, 6.2, 6.3, 6.5_
  
  - [x] 11.2 Create component-specific CSS modules
    - Create TabNavigation.module.css with tab styling and transitions
    - Create HeroTab.module.css with hero layout
    - Create AcademicTab.module.css with academic section styling
    - Create ExperienceTab.module.css with experience layout
    - Create ContactTab.module.css with contact styling
    - Ensure mobile-first responsive design
    - _Requirements: 1.4, 1.5, 6.1, 6.4, 6.6_

- [ ] 12. Wire all components together in App.jsx
  - [x] 12.1 Import all tab components and resume data
    - Import TabNavigation, HeroTab, AcademicTab, ExperienceTab, ContactTab
    - Import resumeData and tabs configuration
    - Pass appropriate data props to each tab component
    - Integrate TabNavigation with tab state management
    - Apply global layout and max-width container
    - _Requirements: 1.1, 1.2, 1.3_
  
  - [x] 12.2 Write property test for tab state persistence
    - **Property 4: Tab State Persistence**
    - **Validates: Requirements 7.4**
    - Test that switching between tabs maintains consistent state
    - Use fast-check to generate random tab switch sequences
    - Run 100 iterations
  
  - [x] 12.3 Write integration tests
    - Test that clicking tab navigation updates displayed content
    - Test that all four tabs can be accessed
    - Test that tab count is exactly four
    - _Requirements: 1.1, 1.3, 7.2_

- [ ] 13. Add accessibility enhancements
  - [x] 13.1 Implement semantic HTML structure
    - Use <nav> for tab navigation
    - Use <main> for content area
    - Use <section> within each tab for content organization
    - Use appropriate heading hierarchy (h1, h2, h3)
    - _Requirements: 9.1_
  
  - [x] 13.2 Write unit tests for accessibility features
    - Test that semantic HTML elements are present
    - Test that profile photo has alt attribute
    - Test that ARIA roles are correctly applied
    - Test that tab order is logical
    - _Requirements: 9.1, 9.2, 9.4, 9.5_

- [ ] 14. Final checkpoint and polish
  - [x] 14.1 Run full test suite
    - Execute all unit tests
    - Execute all property-based tests
    - Verify 100+ iterations for each property test
    - Check test coverage
  
  - [x] 14.2 Manual testing checklist
    - Test in Chrome, Firefox, Safari, and Edge
    - Test on mobile viewport sizes
    - Test keyboard navigation throughout
    - Verify all content from resume.txt is present
    - Check that all links work correctly
    - Verify smooth tab transitions
    - _Requirements: 1.4, 1.5, 6.6, 7.3, 11.1, 11.5_
  
  - [x] 14.3 Final review
    - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties with 100+ iterations each
- Unit tests validate specific examples, edge cases, and accessibility features
- The implementation follows a component-by-component approach, building from core functionality outward
