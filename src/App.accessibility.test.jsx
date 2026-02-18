import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

/**
 * Task 13.2: Accessibility Unit Tests
 * Requirements: 9.1, 9.2, 9.4, 9.5
 * 
 * These tests verify that the application follows accessibility best practices:
 * - Semantic HTML structure
 * - Alternative text for images
 * - ARIA roles and attributes
 * - Logical tab order for keyboard navigation
 */
describe('App Accessibility', () => {
  // Requirement 9.1: Test that semantic HTML elements are present
  describe('Semantic HTML Structure', () => {
    it('uses semantic nav element for tab navigation', () => {
      render(<App />);
      
      const nav = screen.getByRole('tablist');
      expect(nav).toBeInTheDocument();
      expect(nav.tagName).toBe('NAV');
    });

    it('uses semantic main element for content area', () => {
      const { container } = render(<App />);
      
      const main = container.querySelector('main');
      expect(main).toBeInTheDocument();
      expect(main.className).toContain('container');
    });

    it('uses semantic section elements within tabs', () => {
      const { container } = render(<App />);
      
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });

    it('uses proper heading hierarchy with h1 for main title', () => {
      render(<App />);
      
      // Hero tab should be active by default and contain h1
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
      expect(h1.textContent).toBe('Daniel Sebastián Ochoa Urrego');
    });

    it('uses h2 headings for section titles in Academic tab', async () => {
      render(<App />);
      
      // Switch to Academic tab to see h2 headings
      const academicTab = screen.getByText('Education');
      fireEvent.click(academicTab);
      
      // Wait for the tab content to render
      await waitFor(() => {
        const h2Headings = screen.getAllByRole('heading', { level: 2 });
        expect(h2Headings.length).toBeGreaterThan(0);
      });
    });

    it('uses h3 headings for subsection titles in Academic tab', async () => {
      render(<App />);
      
      // Switch to Academic tab to see h3 headings
      const academicTab = screen.getByText('Education');
      fireEvent.click(academicTab);
      
      // Wait for the tab content to render
      await waitFor(() => {
        const h3Headings = screen.getAllByRole('heading', { level: 3 });
        expect(h3Headings.length).toBeGreaterThan(0);
      });
    });
  });

  // Requirement 9.2: Test that profile photo has alt attribute
  describe('Image Alternative Text', () => {
    it('profile photo has descriptive alt attribute', () => {
      render(<App />);
      
      const profilePhoto = screen.getByAltText(/Profile photo of Daniel Sebastián Ochoa Urrego/i);
      expect(profilePhoto).toBeInTheDocument();
      expect(profilePhoto).toHaveAttribute('alt');
      expect(profilePhoto.getAttribute('alt')).toBeTruthy();
      expect(profilePhoto.getAttribute('alt').length).toBeGreaterThan(0);
    });

    it('profile photo alt text includes person name', () => {
      render(<App />);
      
      const profilePhoto = screen.getByAltText(/Profile photo of Daniel Sebastián Ochoa Urrego/i);
      expect(profilePhoto.getAttribute('alt')).toContain('Daniel Sebastián Ochoa Urrego');
    });
  });

  // Requirement 9.5: Test that ARIA roles are correctly applied
  describe('ARIA Roles and Attributes', () => {
    it('tab navigation has tablist role', () => {
      render(<App />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toBeInTheDocument();
    });

    it('tablist has descriptive aria-label', () => {
      render(<App />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveAttribute('aria-label', 'Resume sections');
    });

    it('all tab buttons have tab role', () => {
      render(<App />);
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(4);
      
      tabs.forEach(tab => {
        expect(tab).toHaveAttribute('role', 'tab');
      });
    });

    it('active tab has aria-selected="true"', () => {
      render(<App />);
      
      const tabs = screen.getAllByRole('tab');
      const activeTabs = tabs.filter(tab => tab.getAttribute('aria-selected') === 'true');
      
      expect(activeTabs).toHaveLength(1);
      expect(activeTabs[0]).toHaveAttribute('aria-selected', 'true');
    });

    it('inactive tabs have aria-selected="false"', () => {
      render(<App />);
      
      const tabs = screen.getAllByRole('tab');
      const inactiveTabs = tabs.filter(tab => tab.getAttribute('aria-selected') === 'false');
      
      expect(inactiveTabs).toHaveLength(3);
      inactiveTabs.forEach(tab => {
        expect(tab).toHaveAttribute('aria-selected', 'false');
      });
    });

    it('each tab has aria-controls attribute linking to panel', () => {
      render(<App />);
      
      const tabs = screen.getAllByRole('tab');
      
      tabs.forEach(tab => {
        expect(tab).toHaveAttribute('aria-controls');
        const ariaControls = tab.getAttribute('aria-controls');
        expect(ariaControls).toBeTruthy();
        expect(ariaControls).toMatch(/-panel$/);
      });
    });

    it('each tab has unique id attribute', () => {
      render(<App />);
      
      const tabs = screen.getAllByRole('tab');
      const ids = tabs.map(tab => tab.getAttribute('id'));
      
      // Check all tabs have ids
      ids.forEach(id => {
        expect(id).toBeTruthy();
        expect(id).toMatch(/-tab$/);
      });
      
      // Check ids are unique
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(tabs.length);
    });

    it('tab id and aria-controls follow naming convention', () => {
      render(<App />);
      
      const tabs = screen.getAllByRole('tab');
      
      tabs.forEach(tab => {
        const id = tab.getAttribute('id');
        const ariaControls = tab.getAttribute('aria-controls');
        
        // Extract base name (e.g., "hero" from "hero-tab")
        const baseName = id.replace('-tab', '');
        
        // aria-controls should be baseName + "-panel"
        expect(ariaControls).toBe(`${baseName}-panel`);
      });
    });
  });

  // Requirement 9.4: Test that tab order is logical
  describe('Keyboard Navigation and Tab Order', () => {
    it('active tab has tabIndex 0 for keyboard focus', () => {
      render(<App />);
      
      const tabs = screen.getAllByRole('tab');
      const activeTab = tabs.find(tab => tab.getAttribute('aria-selected') === 'true');
      
      expect(activeTab).toHaveAttribute('tabIndex', '0');
    });

    it('inactive tabs have tabIndex -1 to manage focus', () => {
      render(<App />);
      
      const tabs = screen.getAllByRole('tab');
      const inactiveTabs = tabs.filter(tab => tab.getAttribute('aria-selected') === 'false');
      
      inactiveTabs.forEach(tab => {
        expect(tab).toHaveAttribute('tabIndex', '-1');
      });
    });

    it('only one tab is in the tab order at a time', () => {
      render(<App />);
      
      const tabs = screen.getAllByRole('tab');
      const tabsInOrder = tabs.filter(tab => tab.getAttribute('tabIndex') === '0');
      
      expect(tabsInOrder).toHaveLength(1);
    });

    it('tab buttons are keyboard accessible elements', () => {
      render(<App />);
      
      const tabs = screen.getAllByRole('tab');
      
      tabs.forEach(tab => {
        expect(tab.tagName).toBe('BUTTON');
      });
    });

    it('tabs appear in logical order in the DOM', () => {
      render(<App />);
      
      const tabs = screen.getAllByRole('tab');
      const expectedOrder = ['About', 'Education', 'Experience', 'Contact'];
      
      tabs.forEach((tab, index) => {
        expect(tab.textContent).toBe(expectedOrder[index]);
      });
    });
  });

  // Combined accessibility test
  describe('Overall Accessibility Compliance', () => {
    it('meets basic accessibility requirements for tab interface', () => {
      const { container } = render(<App />);
      
      // Check semantic structure
      expect(container.querySelector('nav')).toBeInTheDocument();
      expect(container.querySelector('main')).toBeInTheDocument();
      
      // Check ARIA roles
      expect(screen.getByRole('tablist')).toBeInTheDocument();
      expect(screen.getAllByRole('tab')).toHaveLength(4);
      
      // Check tab order management
      const tabs = screen.getAllByRole('tab');
      const focusableTabs = tabs.filter(tab => tab.getAttribute('tabIndex') === '0');
      expect(focusableTabs).toHaveLength(1);
      
      // Check image alt text
      expect(screen.getByAltText(/Profile photo/i)).toBeInTheDocument();
    });
  });
});
