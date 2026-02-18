import { useState } from 'react';
import TabNavigation from './components/TabNavigation';
import HeroTab from './components/HeroTab';
import AcademicTab from './components/AcademicTab';
import ExperienceTab from './components/ExperienceTab';
import ContactTab from './components/ContactTab';
import { tabs, resumeData } from './data/resumeData';

function App() {
  // Initialize activeTab state with 'hero' as the initial tab (Requirement 1.2)
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <div className="app">
      {/* Tab Navigation (Requirements 1.1, 1.6, 7.1, 7.2, 9.3, 9.4, 9.5) */}
      <TabNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        tabs={tabs}
      />
      
      {/* Main content area with max-width container (Requirements 1.1, 1.2, 1.3) */}
      <main className="container">
        {/* Conditional rendering based on activeTab (Requirement 1.3) */}
        {activeTab === 'hero' && (
          <HeroTab 
            name={resumeData.hero.name}
            tagline={resumeData.hero.tagline}
            profileText={resumeData.hero.profileText}
            photoUrl={resumeData.hero.photoUrl}
          />
        )}
        
        {activeTab === 'academic' && (
          <AcademicTab 
            education={resumeData.academic.education}
            achievements={resumeData.academic.achievements}
          />
        )}
        
        {activeTab === 'experience' && (
          <ExperienceTab 
            workExperience={resumeData.experience.workExperience}
            projects={resumeData.experience.projects}
            skills={resumeData.experience.skills}
            certifications={resumeData.experience.certifications}
            languages={resumeData.experience.languages}
          />
        )}
        
        {activeTab === 'contact' && (
          <ContactTab 
            phone={resumeData.contact.phone}
            email={resumeData.contact.email}
            linkedin={resumeData.contact.linkedin}
            github={resumeData.contact.github}
          />
        )}
      </main>
    </div>
  );
}

export default App;
