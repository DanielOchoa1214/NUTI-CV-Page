import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AcademicTab from './AcademicTab';

describe('AcademicTab', () => {
  const mockEducation = {
    degree: "Systems Engineer",
    university: "Universidad Escuela Colombiana de Ingeniería Julio Garavito",
    period: "August 2019 - October 2024",
    location: "Bogotá"
  };

  const mockAchievements = [
    {
      title: "Top Intern at Publicis Sapient",
      description: "Because of my outstanding performance during my internship I was named the Top Intern on the Early Careers program."
    },
    {
      title: "Beca de excelencia Julio Garavito",
      description: "Because of my outstanding performance, collage offered me the Excellence scholarship."
    },
    {
      title: "Beca Fundación Country Club de Bogotá",
      description: "Because of my ICFES score I was given half scholarship, which would later become a full scholarship because of my performance in collage."
    }
  ];

  // Test that degree is displayed (Requirement 3.1)
  it('should display the degree', () => {
    render(<AcademicTab education={mockEducation} achievements={mockAchievements} />);
    expect(screen.getByText('Systems Engineer')).toBeInTheDocument();
  });

  // Test that university name is displayed (Requirement 3.2)
  it('should display the university name', () => {
    render(<AcademicTab education={mockEducation} achievements={mockAchievements} />);
    expect(screen.getByText('Universidad Escuela Colombiana de Ingeniería Julio Garavito')).toBeInTheDocument();
  });

  // Test that education period is displayed (Requirement 3.3)
  it('should display the education period', () => {
    render(<AcademicTab education={mockEducation} achievements={mockAchievements} />);
    expect(screen.getByText('August 2019 - October 2024')).toBeInTheDocument();
  });

  // Test that all three achievement titles are displayed (Requirement 3.4)
  it('should display all three achievement titles', () => {
    render(<AcademicTab education={mockEducation} achievements={mockAchievements} />);
    
    expect(screen.getByText('Top Intern at Publicis Sapient')).toBeInTheDocument();
    expect(screen.getByText('Beca de excelencia Julio Garavito')).toBeInTheDocument();
    expect(screen.getByText('Beca Fundación Country Club de Bogotá')).toBeInTheDocument();
  });

  // Test that achievement descriptions are displayed (Requirement 3.5)
  it('should display achievement descriptions', () => {
    render(<AcademicTab education={mockEducation} achievements={mockAchievements} />);
    
    expect(screen.getByText(/Because of my outstanding performance during my internship/)).toBeInTheDocument();
    expect(screen.getByText(/collage offered me the Excellence scholarship/)).toBeInTheDocument();
    expect(screen.getByText(/I was given half scholarship/)).toBeInTheDocument();
  });

  // Test that location is displayed
  it('should display the education location', () => {
    render(<AcademicTab education={mockEducation} achievements={mockAchievements} />);
    expect(screen.getByText('Bogotá')).toBeInTheDocument();
  });

  // Test that section titles are present
  it('should display section titles', () => {
    render(<AcademicTab education={mockEducation} achievements={mockAchievements} />);
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Achievements')).toBeInTheDocument();
  });
});
