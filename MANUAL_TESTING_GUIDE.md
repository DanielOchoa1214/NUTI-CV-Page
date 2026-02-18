# Manual Testing Guide - Task 14.2

## Overview

This guide provides instructions for completing Task 14.2: Manual Testing Checklist for the Personal Resume Webpage.

## Prerequisites

✅ **All automated checks have passed!**
- 34/34 data validation checks passed
- All required content is present
- Application structure is correct

## Getting Started

### 1. Start the Development Server

The development server should already be running. If not:

```bash
npm run dev
```

The application will be available at: **http://localhost:5173/**

### 2. Open the Testing Checklist

Open `MANUAL_TESTING_CHECKLIST.md` in a text editor or print it out for physical completion.

### 3. Testing Approach

Follow the checklist sections in order:

1. **Cross-Browser Testing** - Test in Chrome, Firefox, Safari, and Edge
2. **Responsive Design** - Test at various viewport sizes
3. **Keyboard Navigation** - Verify full keyboard accessibility
4. **Content Verification** - Confirm all resume content is present
5. **Link Functionality** - Test all interactive links
6. **Tab Transitions** - Verify smooth animations
7. **Visual Design** - Check typography, colors, and layout
8. **Accessibility** - Quick accessibility checks
9. **Performance** - Verify load times
10. **Error Scenarios** - Test edge cases

## Key Requirements Being Validated

This manual testing validates the following requirements:

- **Requirement 1.4**: Responsive layout adaptation
- **Requirement 1.5**: Mobile device functionality
- **Requirement 6.6**: Smooth tab transitions
- **Requirement 7.3**: Tab navigation accessibility
- **Requirement 11.1**: Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- **Requirement 11.5**: Correct functionality on desktop and mobile browsers

## Testing Tools

### Browser DevTools

Use browser developer tools (F12) to:
- Inspect HTML structure and ARIA attributes
- Test responsive design at different viewport sizes
- Check console for errors
- Monitor network performance
- Verify semantic HTML

### Responsive Design Mode

- **Chrome**: Ctrl+Shift+M (Cmd+Shift+M on Mac)
- **Firefox**: Ctrl+Shift+M (Cmd+Option+M on Mac)
- **Safari**: Develop > Enter Responsive Design Mode
- **Edge**: Ctrl+Shift+M (Cmd+Shift+M on Mac)

### Keyboard Testing

Use these keys for navigation:
- **Tab**: Move to next interactive element
- **Shift+Tab**: Move to previous interactive element
- **Enter**: Activate focused element
- **Arrow Keys**: Navigate between tabs (if implemented)

## Common Viewport Sizes to Test

### Mobile
- 375x667 (iPhone SE)
- 390x844 (iPhone 12/13)
- 414x896 (iPhone Plus)
- 360x640 (Android)

### Tablet
- 768x1024 (iPad)
- 820x1180 (iPad Air)
- 1024x768 (iPad Landscape)

### Desktop
- 1280x720 (HD)
- 1920x1080 (Full HD)
- 2560x1440 (2K)

## Expected Behavior

### Tab Navigation
- Clicking a tab should immediately display that tab's content
- Only one tab's content should be visible at a time
- Active tab should have visual indicator (bold text, bottom border)
- Tab transitions should be smooth (200ms)

### Content Display
- All content from resume.txt should be present
- Profile photo should load without errors
- Text should be readable with good contrast
- Layout should be clean and professional

### Links
- Email link should open default email client
- Phone link should trigger appropriate action
- LinkedIn and GitHub links should open in new tabs
- All external links should have security attributes

### Responsive Behavior
- Layout should adapt smoothly at all viewport sizes
- No horizontal scrolling on mobile
- Touch targets should be large enough on mobile
- Content should remain readable at all sizes

## Reporting Issues

When you find issues, document them in the checklist:

1. **Critical Issues**: Broken functionality, missing content, accessibility violations
2. **Minor Issues**: Visual inconsistencies, minor layout issues
3. **Recommendations**: Suggestions for improvement

## Completion Criteria

Task 14.2 is complete when:

- [ ] All browsers tested (Chrome, Firefox, Safari, Edge)
- [ ] All viewport sizes tested (mobile, tablet, desktop)
- [ ] Keyboard navigation fully tested
- [ ] All content verified against resume.txt
- [ ] All links tested and working
- [ ] Tab transitions verified as smooth
- [ ] Checklist completed and signed off

## Next Steps

After completing manual testing:

1. Review the completed checklist
2. Document any issues found
3. Prioritize issues (critical vs. minor)
4. Report findings to the development team
5. Proceed to Task 14.3: Final Review

## Quick Reference

| Test Area | Time Estimate | Priority |
|-----------|---------------|----------|
| Cross-Browser | 20-30 min | High |
| Responsive Design | 15-20 min | High |
| Keyboard Navigation | 10-15 min | High |
| Content Verification | 15-20 min | High |
| Link Functionality | 5-10 min | Medium |
| Tab Transitions | 5-10 min | Medium |
| Visual Design | 10-15 min | Medium |
| Accessibility | 10-15 min | High |
| Performance | 5 min | Medium |
| Error Scenarios | 5-10 min | Low |

**Total Estimated Time**: 1.5 - 2.5 hours

## Support

If you encounter any issues during testing:
1. Check the browser console for errors
2. Verify the dev server is still running
3. Try refreshing the page
4. Clear browser cache if needed
5. Restart the dev server if necessary

---

**Happy Testing! 🧪**

