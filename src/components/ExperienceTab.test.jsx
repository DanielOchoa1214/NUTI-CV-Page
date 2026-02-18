import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceTab from './ExperienceTab';

describe('ExperienceTab', () => {
  const mockWorkExperience = [
    {
      title: "Engineering Intern",
      company: "Publicis Sapient",
      period: "February 2024 – July 2024",
      responsibilities: [
        "For a proof-of-concept project I designed 54 test cases for a web page, from which 37 where automated using Selenium with Java.",
        "After a training phase I was part of an international team where we worked on a project in the real estate business.",
        "Increased the LATAM team productivity by 17% in the automation process of functional tests.",
        "Helped with reporting and handling the lifecycle of bugs, increasing the quality of the project's web applications",
        "Actively participated in the project using the Scrum methodology by attending ceremonies and contributing either to internal calls or with the client, to have a better understanding about the quality of the project."
      ],
      techStack: "Java, Selenium, TestNG"
    },
    {
      title: "Freelance Software Developer",
      company: "TecFinanzas",
      period: "November 2022 – May 2023",
      responsibilities: [
        "I was mainly focused on integrating endpoints with the FrontEnd using Angular to improve interactivity and functionality of the app.",
        "Helped with the creation of new screens in Angular, enhancing the user interface and user experience of the end user.",
        "Created services in the BackEnd using .NET and SQL Server, insuring the efficiency and robustness of the system."
      ],
      techStack: "Angular, SQL Server, C#, .NET"
    }
  ];

  const mockProjects = [
    {
      name: "VsWordle",
      description: "VsWordle is a typing game where you compete with other players to see who can write faster. This was an academic Project made with 2 partners were under my leadership we designed, implemented and deploy the game on Azure's cloud.",
      techStack: "Java, SpringBoot, Redis, JS Vanilla"
    },
    {
      name: "ArriendamEsta",
      description: "ArriendamEsta is a platform where we try to solve housing and rental issues that usually appear between landlords and tenants, in the app both will be able to see the history, score, and reviews of the other so that they can make a more informed decision when selecting their new home. In this academic project, I worked in a team with my partners to identify and create a technological solution proposal to a real problem, applying effectively all the knowledge gained during my career.",
      techStack: "SpringBoot, Java, React, MongoDB"
    },
    {
      name: "GridSearch",
      description: "This project was an academic investigation for a Data mining class where I automated the creation of 5 supervised models, tunning hyperparameters in each iteration to find a model that would have the best accuracy in predicting the popular \"census\" dataset.",
      techStack: "Python, SKLearn"
    }
  ];

  const mockSkills = {
    advanced: ["Java", "Python", "JavaScript / CSS / HTML", "Git", "React"],
    intermediate: ["Cloud computing", "Angular", "MongoDB", "SQL"]
  };

  const mockCertifications = [
    "Azure Fundamentals AZ-900",
    "Spring WebFlux",
    "Advanced Topics in SQL",
    "ASP.NET"
  ];

  const mockLanguages = [
    { language: "English", proficiency: "B2" },
    { language: "Spanish", proficiency: "Native" }
  ];

  // Test that both company names are displayed (Requirement 4.1)
  it('should display both company names', () => {
    render(
      <ExperienceTab
        workExperience={mockWorkExperience}
        projects={mockProjects}
        skills={mockSkills}
        certifications={mockCertifications}
        languages={mockLanguages}
      />
    );
    
    expect(screen.getByText('Publicis Sapient')).toBeInTheDocument();
    expect(screen.getByText('TecFinanzas')).toBeInTheDocument();
  });

  // Test that all three project names are displayed (Requirement 4.3)
  it('should display all three project names', () => {
    render(
      <ExperienceTab
        workExperience={mockWorkExperience}
        projects={mockProjects}
        skills={mockSkills}
        certifications={mockCertifications}
        languages={mockLanguages}
      />
    );
    
    expect(screen.getByText('VsWordle')).toBeInTheDocument();
    expect(screen.getByText('ArriendamEsta')).toBeInTheDocument();
    expect(screen.getByText('GridSearch')).toBeInTheDocument();
  });

  // Test that skills are categorized correctly (Requirement 4.5)
  it('should display skills categorized by proficiency level', () => {
    render(
      <ExperienceTab
        workExperience={mockWorkExperience}
        projects={mockProjects}
        skills={mockSkills}
        certifications={mockCertifications}
        languages={mockLanguages}
      />
    );
    
    // Check that proficiency level headings exist
    expect(screen.getByText('Advanced')).toBeInTheDocument();
    expect(screen.getByText('Intermediate')).toBeInTheDocument();
    
    // Check that advanced skills are displayed
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('JavaScript / CSS / HTML')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    
    // Check that intermediate skills are displayed
    expect(screen.getByText('Cloud computing')).toBeInTheDocument();
    expect(screen.getByText('Angular')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('SQL')).toBeInTheDocument();
  });

  // Test that language proficiencies are displayed (Requirement 4.7)
  it('should display language proficiencies', () => {
    render(
      <ExperienceTab
        workExperience={mockWorkExperience}
        projects={mockProjects}
        skills={mockSkills}
        certifications={mockCertifications}
        languages={mockLanguages}
      />
    );
    
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('(B2)')).toBeInTheDocument();
    expect(screen.getByText('Spanish')).toBeInTheDocument();
    expect(screen.getByText('(Native)')).toBeInTheDocument();
  });
});
