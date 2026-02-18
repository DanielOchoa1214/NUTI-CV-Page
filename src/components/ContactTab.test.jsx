import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactTab from './ContactTab';

describe('ContactTab', () => {
  const mockProps = {
    phone: "+57 3006239923",
    email: "danochoa1412@gmail.com",
    linkedin: "https://www.linkedin.com/in/daniel-ochoa-urrego",
    github: "https://github.com/danochoa1412"
  };

  // Task 9.2: Test that phone link uses tel: protocol
  // Requirements: 5.1
  it('renders phone number with tel: link', () => {
    render(<ContactTab {...mockProps} />);
    
    const phoneLink = screen.getByText(mockProps.phone);
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink.tagName).toBe('A');
    expect(phoneLink).toHaveAttribute('href', `tel:${mockProps.phone}`);
  });

  // Task 9.2: Test that email link uses mailto: protocol
  // Requirements: 5.2, 5.5
  it('renders email with mailto: link', () => {
    render(<ContactTab {...mockProps} />);
    
    const emailLink = screen.getByText(mockProps.email);
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.tagName).toBe('A');
    expect(emailLink).toHaveAttribute('href', `mailto:${mockProps.email}`);
  });

  // Task 9.2: Test that LinkedIn link has correct href
  // Requirements: 5.3
  it('renders LinkedIn link with correct href', () => {
    render(<ContactTab {...mockProps} />);
    
    const linkedinLink = screen.getByText(mockProps.linkedin);
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink.tagName).toBe('A');
    expect(linkedinLink).toHaveAttribute('href', mockProps.linkedin);
  });

  // Task 9.2: Test that GitHub link has correct href
  // Requirements: 5.4
  it('renders GitHub link with correct href', () => {
    render(<ContactTab {...mockProps} />);
    
    const githubLink = screen.getByText(mockProps.github);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.tagName).toBe('A');
    expect(githubLink).toHaveAttribute('href', mockProps.github);
  });

  // Task 9.2: Test that external links have target="_blank"
  // Requirements: 5.3, 5.4
  it('renders LinkedIn link with target="_blank" and rel="noopener noreferrer"', () => {
    render(<ContactTab {...mockProps} />);
    
    const linkedinLink = screen.getByText(mockProps.linkedin);
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  // Task 9.2: Test that external links have target="_blank"
  // Requirements: 5.3, 5.4
  it('renders GitHub link with target="_blank" and rel="noopener noreferrer"', () => {
    render(<ContactTab {...mockProps} />);
    
    const githubLink = screen.getByText(mockProps.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  // Additional test: Verify all contact information is rendered
  it('renders all contact information', () => {
    render(<ContactTab {...mockProps} />);
    
    expect(screen.getByText(mockProps.phone)).toBeInTheDocument();
    expect(screen.getByText(mockProps.email)).toBeInTheDocument();
    expect(screen.getByText(mockProps.linkedin)).toBeInTheDocument();
    expect(screen.getByText(mockProps.github)).toBeInTheDocument();
  });

  // Additional test: Verify labels are present
  it('renders contact labels', () => {
    render(<ContactTab {...mockProps} />);
    
    expect(screen.getByText('Phone:')).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn:')).toBeInTheDocument();
    expect(screen.getByText('GitHub:')).toBeInTheDocument();
  });
});
