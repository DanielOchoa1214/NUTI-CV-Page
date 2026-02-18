import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

/**
 * Integration Tests for Task 12.3
 * Requirements: 1.1, 1.3, 7.2
 * 
 * These tests verify the integration between TabNavigation and App components,
 * ensuring that tab clicks properly update the displayed content.
 */
describe('App - Integration Tests', () => {
  /**
   * Test that clicking tab navigation updates displayed content
   * Requirements: 1.3, 7.2
   */
  it('updates displayed content when clicking tab navigation', () => {
    render(<App />);

    // Initially, Hero tab content should be visible
    expect(screen.getByText('Daniel Sebastián Ochoa Urrego')).toBeInTheDocument();
    expect(screen.queryByText('Systems Engineer')).not.toBeInTheDocument();

    // Click on Academic tab
    const academicTab = screen.getByRole('tab', { name: 'Education' });
    fireEvent.click(academicTab);

    // Academic content should now be visible, Hero content should be hidden
    expect(screen.getByText('Systems Engineer')).toBeInTheDocument();
    expect(screen.queryByText('Daniel Sebastián Ochoa Urrego')).not.toBeInTheDocument();

    // Click on Experience tab
    const experienceTab = screen.getByRole('tab', { name: 'Experience' });
    fireEvent.click(experienceTab);

    // Experience content should now be visible, Academic content should be hidden
    expect(screen.getByText('Publicis Sapient')).toBeInTheDocument();
    expect(screen.queryByText('Systems Engineer')).not.toBeInTheDocument();

    // Click on Contact tab
    const contactTab = screen.getByRole('tab', { name: 'Contact' });
    fireEvent.click(contactTab);

    // Contact content should now be visible, Experience content should be hidden
    expect(screen.getByText('danochoa@gmail.com')).toBeInTheDocument();
    expect(screen.queryByText('Publicis Sapient')).not.toBeInTheDocument();

    // Click back to Hero tab
    const heroTab = screen.getByRole('tab', { name: 'About' });
    fireEvent.click(heroTab);

    // Hero content should be visible again, Contact content should be hidden
    expect(screen.getByText('Daniel Sebastián Ochoa Urrego')).toBeInTheDocument();
    expect(screen.queryByText('danochoa@gmail.com')).not.toBeInTheDocument();
  });

  /**
   * Test that all four tabs can be accessed
   * Requirements: 1.1, 7.2
   */
  it('allows access to all four tabs', () => {
    render(<App />);

    // Test Hero tab (default)
    expect(screen.getByText('Daniel Sebastián Ochoa Urrego')).toBeInTheDocument();
    const heroTab = screen.getByRole('tab', { name: 'About' });
    expect(heroTab).toHaveAttribute('aria-selected', 'true');

    // Test Academic tab
    const academicTab = screen.getByRole('tab', { name: 'Education' });
    fireEvent.click(academicTab);
    expect(screen.getByText('Systems Engineer')).toBeInTheDocument();
    expect(academicTab).toHaveAttribute('aria-selected', 'true');

    // Test Experience tab
    const experienceTab = screen.getByRole('tab', { name: 'Experience' });
    fireEvent.click(experienceTab);
    expect(screen.getByText('Publicis Sapient')).toBeInTheDocument();
    expect(experienceTab).toHaveAttribute('aria-selected', 'true');

    // Test Contact tab
    const contactTab = screen.getByRole('tab', { name: 'Contact' });
    fireEvent.click(contactTab);
    expect(screen.getByText('danochoa@gmail.com')).toBeInTheDocument();
    expect(contactTab).toHaveAttribute('aria-selected', 'true');
  });

  /**
   * Test that tab count is exactly four
   * Requirements: 1.1
   */
  it('renders exactly four tabs', () => {
    render(<App />);

    // Query all elements with role="tab"
    const tabs = screen.getAllByRole('tab');

    // Verify exactly four tabs exist
    expect(tabs).toHaveLength(4);

    // Verify the tabs have the expected labels
    expect(screen.getByRole('tab', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Education' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Contact' })).toBeInTheDocument();
  });
});
