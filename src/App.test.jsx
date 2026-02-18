import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Verify the app renders by checking for the Hero tab content
    expect(screen.getByText('Daniel Sebastián Ochoa Urrego')).toBeInTheDocument();
  });

  // Task 3.3: Test that Hero tab is active on initial render
  // Requirements: 1.2
  it('displays Hero tab as active on initial render', () => {
    render(<App />);
    
    // Verify Hero tab content is visible (check for name from HeroTab)
    expect(screen.getByText('Daniel Sebastián Ochoa Urrego')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer + Java lover')).toBeInTheDocument();
    
    // Verify academic tab content is not visible
    expect(screen.queryByText('Systems Engineer')).not.toBeInTheDocument();
  });
});
