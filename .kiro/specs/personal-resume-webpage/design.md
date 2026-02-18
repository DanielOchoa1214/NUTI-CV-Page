# Design Document: Personal Resume Web Page

## Overview

This design document describes the architecture and implementation approach for Daniel Sebastián Ochoa Urrego's personal resume web page. The application will be built as a React single-page application (SPA) using Node 24 LTS, featuring a tabbed interface that organizes resume content into four distinct sections: Hero, Academic, Experience, and Contact.

The design emphasizes:
- Clean, modern UI with smooth tab transitions
- Component-based architecture for maintainability
- Responsive design for mobile and desktop
- Accessibility compliance
- Fast load times and optimal performance

## Architecture

### Technology Stack

- **Runtime**: Node 24 LTS
- **Frontend Framework**: React 18+
- **Build Tool**: Vite (for fast development and optimized production builds)
- **Styling**: CSS Modules or Styled Components for component-scoped styling
- **Package Manager**: npm

### Application Structure

```
personal-resume-webpage/
├── public/
│   ├── ProfilePhoto.jpeg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TabNavigation.jsx
│   │   ├── HeroTab.jsx
│   │   ├── AcademicTab.jsx
│   │   ├── ExperienceTab.jsx
│   │   └── ContactTab.jsx
│   ├── data/
│   │   └── resumeData.js
│   ├── styles/
│   │   ├── global.css
│   │   └── [component].module.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

### Design Patterns

1. **Component Composition**: Each tab is a self-contained React component
2. **State Management**: React useState hook for managing active tab state
3. **Data Separation**: Resume content stored in a separate data file for easy updates
4. **CSS Modules**: Scoped styling to prevent style conflicts
5. **Responsive Design**: Mobile-first approach with CSS media queries

## Components and Interfaces

### App Component

The root component that manages the overall application state and layout.

**State:**
```javascript
{
  activeTab: string  // One of: 'hero', 'academic', 'experience', 'contact'
}
```

**Methods:**
```javascript
setActiveTab(tabName: string): void
  // Updates the active tab state
```

**Responsibilities:**
- Manage active tab state
- Render TabNavigation component
- Conditionally render active tab content
- Apply global layout and styling

### TabNavigation Component

Renders the tab navigation bar with clickable tab buttons.

**Props:**
```javascript
{
  activeTab: string,
  onTabChange: (tabName: string) => void,
  tabs: Array<{id: string, label: string}>
}
```

**Responsibilities:**
- Render tab buttons for all four sections
- Highlight the currently active tab
- Handle click events and call onTabChange callback
- Provide keyboard navigation support (Tab, Enter, Arrow keys)
- Apply ARIA attributes for accessibility

### HeroTab Component

Displays the profile photo, name, tagline, and professional summary.

**Props:**
```javascript
{
  name: string,
  tagline: string,
  profileText: string,
  photoUrl: string
}
```

**Responsibilities:**
- Display profile photo with alt text
- Render name and tagline prominently
- Display formatted profile text
- Handle missing photo gracefully with placeholder
- Responsive layout for mobile and desktop

### AcademicTab Component

Displays educational background and achievements.

**Props:**
```javascript
{
  education: {
    degree: string,
    university: string,
    period: string,
    location: string
  },
  achievements: Array<{
    title: string,
    description: string
  }>
}
```

**Responsibilities:**
- Render education details in a structured format
- Display achievements as a list with titles and descriptions
- Apply consistent formatting and spacing
- Responsive layout for readability

### ExperienceTab Component

Displays work experience, projects, skills, certifications, and languages.

**Props:**
```javascript
{
  workExperience: Array<{
    title: string,
    company: string,
    period: string,
    responsibilities: Array<string>,
    techStack: string
  }>,
  projects: Array<{
    name: string,
    description: string,
    techStack: string
  }>,
  skills: {
    advanced: Array<string>,
    intermediate: Array<string>
  },
  certifications: Array<string>,
  languages: Array<{
    language: string,
    proficiency: string
  }>
}
```

**Responsibilities:**
- Render work experience with expandable/collapsible details
- Display projects with descriptions and tech stacks
- Organize skills by proficiency level
- List certifications and languages
- Maintain visual hierarchy and readability

### ContactTab Component

Displays contact information with interactive links.

**Props:**
```javascript
{
  phone: string,
  email: string,
  linkedin: string,
  github: string
}
```

**Responsibilities:**
- Display contact information with appropriate icons
- Render clickable email link (mailto:)
- Render clickable phone link (tel:)
- Render external links to LinkedIn and GitHub
- Apply hover effects for interactive elements

## Data Models

### Resume Data Structure

The resume data will be stored in `src/data/resumeData.js` as a JavaScript object:

```javascript
export const resumeData = {
  hero: {
    name: "Daniel Sebastián Ochoa Urrego",
    tagline: "Software Engineer + Java lover",
    profileText: "Hi! I am a passionate developer...",
    photoUrl: "/ProfilePhoto.jpeg"
  },
  
  academic: {
    education: {
      degree: "Systems Engineer",
      university: "Universidad Escuela Colombiana de Ingeniería Julio Garavito",
      period: "August 2019 - October 2024",
      location: "Bogotá"
    },
    achievements: [
      {
        title: "Top Intern at Publicis Sapient",
        description: "Because of my outstanding performance..."
      },
      // ... more achievements
    ]
  },
  
  experience: {
    workExperience: [
      {
        title: "Engineering Intern",
        company: "Publicis Sapient",
        period: "February 2024 – July 2024",
        responsibilities: [
          "For a proof-of-concept project...",
          // ... more responsibilities
        ],
        techStack: "Java, Selenium, TestNG"
      },
      // ... more work experience
    ],
    projects: [
      {
        name: "VsWordle",
        description: "VsWordle is a typing game...",
        techStack: "Java, SpringBoot, Redis, JS Vanilla"
      },
      // ... more projects
    ],
    skills: {
      advanced: ["Java", "Python", "JavaScript / CSS / HTML", "Git", "React"],
      intermediate: ["Cloud computing", "Angular", "MongoDB", "SQL"]
    },
    certifications: [
      "Azure Fundamentals AZ-900",
      "Spring WebFlux",
      "Advanced Topics in SQL",
      "ASP.NET"
    ],
    languages: [
      { language: "English", proficiency: "B2" },
      { language: "Spanish", proficiency: "Native" }
    ]
  },
  
  contact: {
    phone: "+57 3006239923",
    email: "danochoa1412@gmail.com",
    linkedin: "https://www.linkedin.com/in/daniel-ochoa-urrego",
    github: "https://github.com/danochoa1412"
  }
};
```

### Tab Configuration

```javascript
export const tabs = [
  { id: 'hero', label: 'About' },
  { id: 'academic', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];
```

## Styling and Visual Design

### Color Scheme

- **Primary**: #2563eb (Professional blue)
- **Secondary**: #64748b (Slate gray)
- **Accent**: #0ea5e9 (Light blue for hover states)
- **Background**: #ffffff (White)
- **Text Primary**: #1e293b (Dark slate)
- **Text Secondary**: #64748b (Medium slate)
- **Border**: #e2e8f0 (Light gray)

### Typography

- **Headings**: System font stack (San Francisco, Segoe UI, Roboto)
- **Body**: System font stack
- **Font Sizes**:
  - Name/Title: 2.5rem (mobile: 2rem)
  - Section Headings: 1.75rem (mobile: 1.5rem)
  - Subheadings: 1.25rem
  - Body: 1rem
  - Small: 0.875rem

### Layout

- **Max Width**: 1200px (centered)
- **Padding**: 2rem (mobile: 1rem)
- **Tab Navigation**: Fixed at top, sticky on scroll
- **Content Area**: Minimum height to prevent layout shift
- **Spacing**: Consistent 1rem/2rem rhythm

### Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Tab Interaction

- **Active Tab**: Bold text, bottom border (3px), primary color
- **Inactive Tab**: Normal weight, hover effect (background color change)
- **Transition**: 200ms ease for smooth visual feedback
- **Focus State**: Visible outline for keyboard navigation


## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Tab Switching Exclusivity

*For any* tab selection, when a visitor clicks on a tab, only that tab's content should be visible and all other tabs' content should be hidden.

**Validates: Requirements 1.3**

### Property 2: Active Tab Visual Indicator

*For any* active tab, the tab element should have appropriate visual indicators (CSS class, aria-selected attribute) that distinguish it from inactive tabs.

**Validates: Requirements 1.6**

### Property 3: Tab Labels Exist

*For all* tabs in the navigation, each tab should have a non-empty label that clearly identifies its content area.

**Validates: Requirements 7.1**

### Property 4: Tab State Persistence

*For any* sequence of tab switches, when switching from tab A to tab B and back to tab A, the application state should remain consistent and tab A's content should be displayed correctly.

**Validates: Requirements 7.4**

### Property 5: Data Completeness

*For any* data item (achievement, work experience, project, certification, skill, language), all required fields for that item type should be rendered in the DOM:
- Achievements: title and description
- Work Experience: job title, company, date range, all responsibilities, tech stack
- Projects: name, description, tech stack
- Certifications: name
- Skills: name and correct proficiency category
- Languages: language name and proficiency level

**Validates: Requirements 3.5, 4.2, 4.4, 4.6, 8.3, 8.4**

## Error Handling

### Missing Profile Photo

If ProfilePhoto.jpeg is not found or fails to load:
- Display a placeholder image or avatar icon
- Maintain layout integrity (no broken image icons)
- Log error to console for debugging
- Provide alt text indicating photo unavailable

### Invalid Resume Data

If resume data is malformed or missing fields:
- Gracefully skip rendering of incomplete items
- Log warnings to console
- Display available data without breaking layout
- Provide fallback text for critical missing fields (e.g., "Name not provided")

### Tab Navigation Errors

If tab state becomes invalid:
- Default to Hero tab as fallback
- Log error to console
- Prevent application crash
- Maintain navigation functionality

### Browser Compatibility Issues

If browser doesn't support certain features:
- Use feature detection (not browser detection)
- Provide polyfills for critical features
- Degrade gracefully for non-critical features
- Ensure core content remains accessible

## Testing Strategy

### Dual Testing Approach

This project will use both unit tests and property-based tests to ensure comprehensive coverage:

- **Unit tests**: Verify specific examples, edge cases, and error conditions
- **Property tests**: Verify universal properties across all inputs

Both testing approaches are complementary and necessary. Unit tests catch concrete bugs in specific scenarios, while property tests verify general correctness across a wide range of inputs.

### Testing Framework

- **Test Runner**: Vitest (fast, Vite-native test runner)
- **React Testing**: React Testing Library (for component testing)
- **Property-Based Testing**: fast-check (JavaScript property-based testing library)
- **Accessibility Testing**: jest-axe or @axe-core/react

### Unit Testing Focus

Unit tests should focus on:
- Specific examples that demonstrate correct behavior (e.g., "Hero tab displays correct name")
- Edge cases (e.g., missing profile photo, empty data arrays)
- Error conditions (e.g., invalid tab name, malformed data)
- Integration points between components (e.g., tab navigation triggering content updates)
- Accessibility features (e.g., ARIA attributes, keyboard navigation)

Avoid writing too many unit tests for scenarios that property tests can cover. Focus unit tests on concrete examples and edge cases.

### Property-Based Testing Configuration

Each property test must:
- Run a minimum of 100 iterations to ensure comprehensive input coverage
- Reference its corresponding design document property in a comment
- Use the tag format: **Feature: personal-resume-webpage, Property {number}: {property_text}**

Example property test structure:
```javascript
// Feature: personal-resume-webpage, Property 1: Tab Switching Exclusivity
test('only one tab content is visible at a time', () => {
  fc.assert(
    fc.property(
      fc.constantFrom('hero', 'academic', 'experience', 'contact'),
      (selectedTab) => {
        // Test implementation
      }
    ),
    { numRuns: 100 }
  );
});
```

### Test Coverage Goals

- **Component Coverage**: 100% of components should have tests
- **Property Coverage**: Each correctness property must have a corresponding property-based test
- **Accessibility**: All interactive elements tested for keyboard access and ARIA attributes
- **Responsive Behavior**: Test rendering at different viewport sizes
- **Error Scenarios**: All error handling paths tested

### Continuous Integration

- Run all tests on every commit
- Enforce test passage before merge
- Generate coverage reports
- Run accessibility audits
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)

