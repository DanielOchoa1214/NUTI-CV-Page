import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import * as fc from 'fast-check';
import TabNavigation from './TabNavigation';

const mockTabs = [
  { id: 'hero', label: 'About' },
  { id: 'academic', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

describe('TabNavigation', () => {
  // Task 4.1: Test basic rendering and props
  // Requirements: 1.1, 7.1
  it('renders all tab buttons with correct labels', () => {
    const mockOnTabChange = vi.fn();
    render(
      <TabNavigation 
        activeTab="hero" 
        onTabChange={mockOnTabChange} 
        tabs={mockTabs}
      />
    );

    // Verify all four tabs are rendered
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  // Task 4.1: Test active tab styling
  // Requirements: 1.6
  it('applies active styling to the current tab', () => {
    const mockOnTabChange = vi.fn();
    render(
      <TabNavigation 
        activeTab="academic" 
        onTabChange={mockOnTabChange} 
        tabs={mockTabs}
      />
    );

    const academicTab = screen.getByText('Education');
    const heroTab = screen.getByText('About');

    // Active tab should have aria-selected="true"
    expect(academicTab).toHaveAttribute('aria-selected', 'true');
    expect(heroTab).toHaveAttribute('aria-selected', 'false');
  });

  // Task 4.1: Test click events
  // Requirements: 7.2
  it('calls onTabChange when a tab is clicked', () => {
    const mockOnTabChange = vi.fn();
    render(
      <TabNavigation 
        activeTab="hero" 
        onTabChange={mockOnTabChange} 
        tabs={mockTabs}
      />
    );

    const experienceTab = screen.getByText('Experience');
    fireEvent.click(experienceTab);

    expect(mockOnTabChange).toHaveBeenCalledWith('experience');
    expect(mockOnTabChange).toHaveBeenCalledTimes(1);
  });

  // Task 4.4: Test keyboard navigation - Enter key
  // Requirements: 9.3, 9.4
  it('activates tab when Enter key is pressed', () => {
    const mockOnTabChange = vi.fn();
    render(
      <TabNavigation 
        activeTab="hero" 
        onTabChange={mockOnTabChange} 
        tabs={mockTabs}
      />
    );

    const contactTab = screen.getByText('Contact');
    fireEvent.keyDown(contactTab, { key: 'Enter' });

    expect(mockOnTabChange).toHaveBeenCalledWith('contact');
  });

  // Task 4.4: Test keyboard navigation - Space key
  // Requirements: 9.3, 9.4
  it('activates tab when Space key is pressed', () => {
    const mockOnTabChange = vi.fn();
    render(
      <TabNavigation 
        activeTab="hero" 
        onTabChange={mockOnTabChange} 
        tabs={mockTabs}
      />
    );

    const academicTab = screen.getByText('Education');
    fireEvent.keyDown(academicTab, { key: ' ' });

    expect(mockOnTabChange).toHaveBeenCalledWith('academic');
  });

  // Task 4.4: Test keyboard navigation - Arrow keys
  // Requirements: 9.3, 9.4
  it('navigates between tabs with arrow keys', () => {
    const mockOnTabChange = vi.fn();
    render(
      <TabNavigation 
        activeTab="hero" 
        onTabChange={mockOnTabChange} 
        tabs={mockTabs}
      />
    );

    const heroTab = screen.getByText('About');
    
    // Arrow right should focus next tab
    fireEvent.keyDown(heroTab, { key: 'ArrowRight' });
    expect(document.activeElement).toBe(screen.getByText('Education'));

    // Arrow left should focus previous tab
    fireEvent.keyDown(screen.getByText('Education'), { key: 'ArrowLeft' });
    expect(document.activeElement).toBe(heroTab);
  });

  // Task 4.4: Test keyboard navigation - Home/End keys
  // Requirements: 9.3, 9.4
  it('navigates to first/last tab with Home/End keys', () => {
    const mockOnTabChange = vi.fn();
    render(
      <TabNavigation 
        activeTab="academic" 
        onTabChange={mockOnTabChange} 
        tabs={mockTabs}
      />
    );

    const academicTab = screen.getByText('Education');
    
    // Home key should focus first tab
    fireEvent.keyDown(academicTab, { key: 'Home' });
    expect(document.activeElement).toBe(screen.getByText('About'));

    // End key should focus last tab
    fireEvent.keyDown(screen.getByText('About'), { key: 'End' });
    expect(document.activeElement).toBe(screen.getByText('Contact'));
  });

  // Task 4.1: Test ARIA attributes
  // Requirements: 9.5
  it('has proper ARIA attributes for accessibility', () => {
    const mockOnTabChange = vi.fn();
    render(
      <TabNavigation 
        activeTab="hero" 
        onTabChange={mockOnTabChange} 
        tabs={mockTabs}
      />
    );

    // Check for tablist role
    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeInTheDocument();
    expect(tablist).toHaveAttribute('aria-label', 'Resume sections');

    // Check for tab roles
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(4);

    // Check aria-controls and id attributes
    const heroTab = screen.getByText('About');
    expect(heroTab).toHaveAttribute('role', 'tab');
    expect(heroTab).toHaveAttribute('aria-controls', 'hero-panel');
    expect(heroTab).toHaveAttribute('id', 'hero-tab');
  });

  // Task 4.1: Test tabIndex management
  // Requirements: 9.4
  it('manages tabIndex correctly for keyboard navigation', () => {
    const mockOnTabChange = vi.fn();
    render(
      <TabNavigation 
        activeTab="experience" 
        onTabChange={mockOnTabChange} 
        tabs={mockTabs}
      />
    );

    const heroTab = screen.getByText('About');
    const experienceTab = screen.getByText('Experience');

    // Active tab should have tabIndex 0
    expect(experienceTab).toHaveAttribute('tabIndex', '0');
    
    // Inactive tabs should have tabIndex -1
    expect(heroTab).toHaveAttribute('tabIndex', '-1');
  });

  // Task 4.2: Property test for active tab visual indicator
  // **Property 2: Active Tab Visual Indicator**
  // **Validates: Requirements 1.6**
  it('property: active tab has appropriate visual indicators across all tab states', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('hero', 'academic', 'experience', 'contact'),
        (activeTabId) => {
          const mockOnTabChange = vi.fn();
          const { container, unmount } = render(
            <TabNavigation 
              activeTab={activeTabId} 
              onTabChange={mockOnTabChange} 
              tabs={mockTabs}
            />
          );

          try {
            // Find the active tab by its id
            const activeTab = mockTabs.find(tab => tab.id === activeTabId);
            const activeTabElement = container.querySelector(`#${activeTabId}-tab`);

            // Property: Active tab must have aria-selected="true"
            expect(activeTabElement).toHaveAttribute('aria-selected', 'true');

            // Property: Active tab must have the 'active' CSS class
            expect(activeTabElement.className).toContain('active');

            // Property: All inactive tabs must have aria-selected="false"
            mockTabs.forEach(tab => {
              if (tab.id !== activeTabId) {
                const inactiveTabElement = container.querySelector(`#${tab.id}-tab`);
                expect(inactiveTabElement).toHaveAttribute('aria-selected', 'false');
                expect(inactiveTabElement.className).not.toContain('active');
              }
            });
          } finally {
            // Clean up after each iteration
            unmount();
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  // Task 4.3: Property test for tab labels
  // **Property 3: Tab Labels Exist**
  // **Validates: Requirements 7.1**
  it('property: all tabs have non-empty labels', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('hero', 'academic', 'experience', 'contact'),
        (activeTabId) => {
          const mockOnTabChange = vi.fn();
          const { container, unmount } = render(
            <TabNavigation 
              activeTab={activeTabId} 
              onTabChange={mockOnTabChange} 
              tabs={mockTabs}
            />
          );

          try {
            // Property: Every tab must have a non-empty label
            mockTabs.forEach(tab => {
              const tabElement = container.querySelector(`#${tab.id}-tab`);
              
              // Tab element must exist
              expect(tabElement).not.toBeNull();
              
              // Tab must have text content (label)
              const labelText = tabElement.textContent;
              expect(labelText).toBeTruthy();
              
              // Label must be non-empty after trimming whitespace
              expect(labelText.trim().length).toBeGreaterThan(0);
              
              // Label should match the provided label
              expect(labelText.trim()).toBe(tab.label);
            });
          } finally {
            // Clean up after each iteration
            unmount();
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
