# Manual Testing Checklist - Personal Resume Webpage

**Date:** _____________  
**Tester:** _____________  
**Application URL:** http://localhost:5173/

---

## Test Environment Setup

- [ ] Development server is running (`npm run dev`)
- [ ] Application loads at http://localhost:5173/
- [ ] No console errors on initial load

---

## 1. Cross-Browser Testing (Requirement 11.1)

### Chrome
- [ ] Page loads correctly
- [ ] All tabs are visible and clickable
- [ ] Tab transitions are smooth
- [ ] Profile photo displays correctly
- [ ] All text is readable
- [ ] Links work correctly
- [ ] Layout is consistent

### Firefox
- [ ] Page loads correctly
- [ ] All tabs are visible and clickable
- [ ] Tab transitions are smooth
- [ ] Profile photo displays correctly
- [ ] All text is readable
- [ ] Links work correctly
- [ ] Layout is consistent

### Safari
- [ ] Page loads correctly
- [ ] All tabs are visible and clickable
- [ ] Tab transitions are smooth
- [ ] Profile photo displays correctly
- [ ] All text is readable
- [ ] Links work correctly
- [ ] Layout is consistent

### Edge
- [ ] Page loads correctly
- [ ] All tabs are visible and clickable
- [ ] Tab transitions are smooth
- [ ] Profile photo displays correctly
- [ ] All text is readable
- [ ] Links work correctly
- [ ] Layout is consistent

**Notes:**
_____________________________________________________________
_____________________________________________________________

---

## 2. Responsive Design Testing (Requirements 1.4, 1.5)

### Mobile Viewport (< 640px)
- [ ] Test at 375px width (iPhone SE)
- [ ] Test at 390px width (iPhone 12/13)
- [ ] Test at 414px width (iPhone Plus)
- [ ] Tab navigation is accessible and usable
- [ ] All content is readable without horizontal scrolling
- [ ] Profile photo scales appropriately
- [ ] Text size is appropriate for mobile
- [ ] Touch targets are large enough (min 44x44px)
- [ ] No content is cut off or hidden

### Tablet Viewport (640px - 1024px)
- [ ] Test at 768px width (iPad)
- [ ] Test at 820px width (iPad Air)
- [ ] Layout adapts appropriately
- [ ] Tab navigation works well
- [ ] Content is well-spaced

### Desktop Viewport (> 1024px)
- [ ] Test at 1280px width
- [ ] Test at 1920px width
- [ ] Content is centered with max-width
- [ ] Layout is balanced and professional
- [ ] No excessive whitespace

**Notes:**
_____________________________________________________________
_____________________________________________________________

---

## 3. Keyboard Navigation Testing (Requirements 7.3, 11.5)

### Tab Navigation
- [ ] Press Tab key to navigate through interactive elements
- [ ] Tab order is logical (left to right, top to bottom)
- [ ] Focus indicator is visible on all interactive elements
- [ ] Tab navigation includes all four tab buttons
- [ ] Tab navigation includes all links in Contact tab

### Tab Switching
- [ ] Press Enter on focused tab button to switch tabs
- [ ] Arrow keys navigate between tab buttons (if implemented)
- [ ] Tab content updates when switching via keyboard
- [ ] Active tab indicator updates correctly

### Link Activation
- [ ] Navigate to Contact tab via keyboard
- [ ] Press Enter on email link (should open email client)
- [ ] Press Enter on LinkedIn link (should open in new tab)
- [ ] Press Enter on GitHub link (should open in new tab)

**Notes:**
_____________________________________________________________
_____________________________________________________________

---

## 4. Content Verification (Requirement 1.4)

### Hero Tab (About)
- [ ] Profile photo is displayed
- [ ] Name: "Daniel Sebastián Ochoa Urrego" is displayed
- [ ] Tagline: "Software Engineer + Java lover" is displayed
- [ ] Complete profile text from resume.txt is present
- [ ] Text is formatted and readable

### Academic Tab (Education)
- [ ] Degree: "Systems Engineer" is displayed
- [ ] University: "Universidad Escuela Colombiana de Ingeniería Julio Garavito" is displayed
- [ ] Period: "August 2019 - October 2024" is displayed
- [ ] Location: "Bogotá" is displayed (if included)
- [ ] Achievement 1: "Top Intern at Publicis Sapient" with full description
- [ ] Achievement 2: "Beca de excelencia Julio Garavito" with full description
- [ ] Achievement 3: "Beca Fundación Country Club de Bogotá" with full description

### Experience Tab
#### Work Experience
- [ ] Publicis Sapient position is displayed
  - [ ] Title: "Engineering Intern"
  - [ ] Period: "February 2024 – July 2024"
  - [ ] All responsibilities are listed
  - [ ] Tech stack: "Java, Selenium, TestNG"
- [ ] TecFinanzas position is displayed
  - [ ] Title: "Software Developer"
  - [ ] Period: "August 2023 – December 2023"
  - [ ] All responsibilities are listed
  - [ ] Tech stack is displayed

#### Projects
- [ ] VsWordle project is displayed with description and tech stack
- [ ] ArriendamEsta project is displayed with description and tech stack
- [ ] GridSearch project is displayed with description and tech stack

#### Skills
- [ ] Advanced skills section displays: Java, Python, JavaScript/CSS/HTML, Git, React
- [ ] Intermediate skills section displays: Cloud computing, Angular, MongoDB, SQL

#### Certifications
- [ ] Azure Fundamentals AZ-900
- [ ] Spring WebFlux
- [ ] Advanced Topics in SQL
- [ ] ASP.NET

#### Languages
- [ ] English (B2)
- [ ] Spanish (Native)

### Contact Tab
- [ ] Phone number: "+57 3006239923" is displayed
- [ ] Email: "danochoa1412@gmail.com" is displayed
- [ ] LinkedIn link is present
- [ ] GitHub link is present

**Notes:**
_____________________________________________________________
_____________________________________________________________

---

## 5. Link Functionality Testing (Requirement 11.5)

### Email Link
- [ ] Click on email address
- [ ] Default email client opens
- [ ] Email address is pre-filled in "To:" field

### Phone Link (if clickable)
- [ ] Click on phone number
- [ ] Appropriate action occurs (call app on mobile, or copy)

### LinkedIn Link
- [ ] Click on LinkedIn link
- [ ] Opens in new tab/window
- [ ] Navigates to correct LinkedIn profile
- [ ] Has rel="noopener noreferrer" for security

### GitHub Link
- [ ] Click on GitHub link
- [ ] Opens in new tab/window
- [ ] Navigates to correct GitHub profile
- [ ] Has rel="noopener noreferrer" for security

**Notes:**
_____________________________________________________________
_____________________________________________________________

---

## 6. Tab Transition Testing (Requirement 6.6)

### Visual Transitions
- [ ] Click from Hero to Academic tab - transition is smooth
- [ ] Click from Academic to Experience tab - transition is smooth
- [ ] Click from Experience to Contact tab - transition is smooth
- [ ] Click from Contact back to Hero tab - transition is smooth
- [ ] No jarring layout shifts during transitions
- [ ] Active tab indicator animates smoothly
- [ ] Content fades/slides smoothly (if animated)

### Tab State Persistence
- [ ] Switch to Academic tab, then back to Hero - content is correct
- [ ] Switch to Experience tab, then back to Academic - content is correct
- [ ] Switch to Contact tab, then back to Experience - content is correct
- [ ] Rapidly click between tabs - no errors or broken states

**Notes:**
_____________________________________________________________
_____________________________________________________________

---

## 7. Visual Design Verification

### Typography
- [ ] All text is readable
- [ ] Font sizes are appropriate for hierarchy
- [ ] Line height provides good readability
- [ ] No text overflow or truncation

### Color and Contrast
- [ ] Text has sufficient contrast against background
- [ ] Active tab is clearly distinguishable
- [ ] Links are visually distinct
- [ ] Color scheme is professional and consistent

### Layout and Spacing
- [ ] Consistent spacing between elements
- [ ] Content is well-organized
- [ ] No overlapping elements
- [ ] Proper alignment throughout

### Profile Photo
- [ ] Photo loads correctly
- [ ] Photo has appropriate size
- [ ] Photo is not distorted
- [ ] Photo has alt text (check in dev tools)

**Notes:**
_____________________________________________________________
_____________________________________________________________

---

## 8. Accessibility Quick Checks

### Semantic HTML
- [ ] Open browser dev tools
- [ ] Inspect tab navigation - should use appropriate ARIA roles
- [ ] Check for proper heading hierarchy (h1, h2, h3)
- [ ] Verify semantic elements (<nav>, <main>, <section>)

### Screen Reader Simulation
- [ ] Tab through page with eyes closed
- [ ] Can you understand the page structure?
- [ ] Are interactive elements clearly announced?
- [ ] Is the active tab state clear?

**Notes:**
_____________________________________________________________
_____________________________________________________________

---

## 9. Performance and Load Time

- [ ] Page loads within 3 seconds on standard connection
- [ ] No visible lag when switching tabs
- [ ] Images load quickly
- [ ] No console errors or warnings
- [ ] Network tab shows reasonable resource sizes

**Notes:**
_____________________________________________________________
_____________________________________________________________

---

## 10. Error Scenarios

### Missing Profile Photo
- [ ] Temporarily rename ProfilePhoto.jpeg
- [ ] Reload page
- [ ] Verify placeholder or fallback is shown
- [ ] No broken image icon
- [ ] Layout remains intact
- [ ] Restore ProfilePhoto.jpeg

### Browser Console
- [ ] Open browser console (F12)
- [ ] Check for any errors (red messages)
- [ ] Check for any warnings (yellow messages)
- [ ] All should be clean or expected

**Notes:**
_____________________________________________________________
_____________________________________________________________

---

## Summary

### Total Checks: ~150
### Passed: _____
### Failed: _____
### Blocked: _____

### Critical Issues Found:
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________

### Minor Issues Found:
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________

### Recommendations:
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________

---

## Sign-off

**Tester Signature:** _____________  
**Date:** _____________  
**Status:** [ ] Approved [ ] Approved with Minor Issues [ ] Rejected

