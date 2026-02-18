import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HeroTab from './HeroTab';

describe('HeroTab', () => {
  const mockProps = {
    name: "Daniel Sebastián Ochoa Urrego",
    tagline: "Software Engineer + Java lover",
    profileText: "Hi! I am a passionate developer looking forward to learning new technologies.",
    photoUrl: "/ProfilePhoto.jpeg"
  };

  // Task 5.2: Test that name is displayed correctly
  // Requirements: 2.2
  it('displays the name correctly', () => {
    render(<HeroTab {...mockProps} />);
    
    const nameElement = screen.getByText(mockProps.name);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement.tagName).toBe('H1');
  });

  // Task 5.2: Test that tagline is displayed correctly
  // Requirements: 2.3
  it('displays the tagline correctly', () => {
    render(<HeroTab {...mockProps} />);
    
    const taglineElement = screen.getByText(mockProps.tagline);
    expect(taglineElement).toBeInTheDocument();
  });

  // Task 5.2: Test that profile text is displayed correctly
  // Requirements: 2.4
  it('displays the profile text correctly', () => {
    render(<HeroTab {...mockProps} />);
    
    const profileTextElement = screen.getByText(mockProps.profileText);
    expect(profileTextElement).toBeInTheDocument();
  });

  // Task 5.2: Test that photo has correct src and alt attributes
  // Requirements: 2.1, 9.2
  it('displays profile photo with correct src and alt attributes', () => {
    render(<HeroTab {...mockProps} />);
    
    const photoElement = screen.getByAltText(`Profile photo of ${mockProps.name}`);
    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toHaveAttribute('src', mockProps.photoUrl);
    expect(photoElement.tagName).toBe('IMG');
  });

  // Task 5.3: Test that placeholder is shown when photo fails to load
  // Requirements: 2.5
  it('displays placeholder when photo fails to load', async () => {
    render(<HeroTab {...mockProps} />);
    
    const photoElement = screen.getByAltText(`Profile photo of ${mockProps.name}`);
    
    // Simulate image load error
    fireEvent.error(photoElement);
    
    // Wait for the state update and re-render
    await waitFor(() => {
      const placeholder = screen.getByLabelText('Profile photo unavailable');
      expect(placeholder).toBeInTheDocument();
    });
    
    // Original image should not be in the document anymore
    expect(screen.queryByAltText(`Profile photo of ${mockProps.name}`)).not.toBeInTheDocument();
  });

  // Task 5.3: Additional test for missing photo URL
  // Requirements: 2.5
  it('handles missing photoUrl gracefully', () => {
    const propsWithoutPhoto = {
      ...mockProps,
      photoUrl: ''
    };
    
    render(<HeroTab {...propsWithoutPhoto} />);
    
    // Component should still render without crashing
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.tagline)).toBeInTheDocument();
  });

  // Additional test: Verify all content is rendered together
  it('renders all hero content in a single view', () => {
    render(<HeroTab {...mockProps} />);
    
    // All elements should be present simultaneously
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.tagline)).toBeInTheDocument();
    expect(screen.getByText(mockProps.profileText)).toBeInTheDocument();
    expect(screen.getByAltText(`Profile photo of ${mockProps.name}`)).toBeInTheDocument();
  });
});
