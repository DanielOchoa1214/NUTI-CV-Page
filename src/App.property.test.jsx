import { describe, it, expect } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import * as fc from 'fast-check';
import App from './App';

describe('App - Property-Based Tests', () => {
  /**
   * **Validates: Requirements 7.4**
   * Property 4: Tab State Persistence
   * 
   * For any sequence of tab switches, when switching from tab A to tab B and back to tab A,
   * the application state should remain consistent and tab A's content should be displayed correctly.
   */
  it('switching between tabs maintains consistent state', () => {
    // Define the tab identifiers and their expected content markers
    const tabContentMarkers = {
      hero: 'Daniel Sebastián Ochoa Urrego',
      academic: 'Systems Engineer',
      experience: 'Publicis Sapient',
      contact: 'danochoa@gmail.com'
    };

    const tabLabels = {
      hero: 'About',
      academic: 'Education',
      experience: 'Experience',
      contact: 'Contact'
    };

    // Generator for sequences of tab switches
    // Generate arrays of tab IDs with length 2-10
    const tabSequenceArb = fc.array(
      fc.constantFrom('hero', 'academic', 'experience', 'contact'),
      { minLength: 2, maxLength: 10 }
    );

    fc.assert(
      fc.property(
        tabSequenceArb,
        (tabSequence) => {
          // Render the App component
          render(<App />);

          try {
            // Track the current tab (starts with 'hero')
            let currentTab = 'hero';

            // Execute the sequence of tab switches
            for (const targetTab of tabSequence) {
              // Click on the target tab using role and name for specificity
              const tabButton = screen.getByRole('tab', { name: tabLabels[targetTab] });
              
              // Use fireEvent.click which handles React updates properly
              fireEvent.click(tabButton);

              // Update current tab
              currentTab = targetTab;

              // Verify that the correct content is displayed
              const expectedContent = tabContentMarkers[currentTab];
              const contentElement = screen.getByText(expectedContent);
              expect(contentElement).toBeInTheDocument();

              // Verify that the tab button has the correct aria-selected attribute
              expect(tabButton).toHaveAttribute('aria-selected', 'true');

              // Verify that other tabs are not selected
              for (const [tabId, label] of Object.entries(tabLabels)) {
                if (tabId !== currentTab) {
                  const otherTabButton = screen.getByRole('tab', { name: label });
                  expect(otherTabButton).toHaveAttribute('aria-selected', 'false');
                }
              }

              // Verify that content from other tabs is not visible
              for (const [tabId, marker] of Object.entries(tabContentMarkers)) {
                if (tabId !== currentTab) {
                  expect(screen.queryByText(marker)).not.toBeInTheDocument();
                }
              }
            }

            return true;
          } finally {
            // Clean up after each iteration
            cleanup();
          }
        }
      ),
      { numRuns: 100 }
    );
  }, 30000); // 30 second timeout for property-based test with 100 iterations
});
