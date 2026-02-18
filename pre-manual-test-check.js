/**
 * Pre-Manual Testing Automated Checks
 * This script performs automated verification before manual testing begins
 */

import { resumeData, tabs } from './src/data/resumeData.js';

console.log('🔍 Running Pre-Manual Testing Checks...\n');

let passed = 0;
let failed = 0;

function check(description, condition) {
  if (condition) {
    console.log(`✅ ${description}`);
    passed++;
  } else {
    console.log(`❌ ${description}`);
    failed++;
  }
}

// Check 1: Tab Configuration
console.log('📋 Tab Configuration:');
check('Exactly 4 tabs defined', tabs.length === 4);
check('Hero tab exists', tabs.some(t => t.id === 'hero'));
check('Academic tab exists', tabs.some(t => t.id === 'academic'));
check('Experience tab exists', tabs.some(t => t.id === 'experience'));
check('Contact tab exists', tabs.some(t => t.id === 'contact'));
check('All tabs have labels', tabs.every(t => t.label && t.label.length > 0));

// Check 2: Hero Tab Data
console.log('\n👤 Hero Tab Data:');
check('Name is present', resumeData.hero.name === "Daniel Sebastián Ochoa Urrego");
check('Tagline is present', resumeData.hero.tagline === "Software Engineer + Java lover");
check('Profile text is present', resumeData.hero.profileText && resumeData.hero.profileText.length > 50);
check('Photo URL is defined', resumeData.hero.photoUrl && resumeData.hero.photoUrl.length > 0);

// Check 3: Academic Tab Data
console.log('\n🎓 Academic Tab Data:');
check('Degree is present', resumeData.academic.education.degree === "Systems Engineer");
check('University is present', resumeData.academic.education.university.includes("Julio Garavito"));
check('Education period is present', resumeData.academic.education.period.includes("2019"));
check('Exactly 3 achievements', resumeData.academic.achievements.length === 3);
check('All achievements have titles', resumeData.academic.achievements.every(a => a.title && a.title.length > 0));
check('All achievements have descriptions', resumeData.academic.achievements.every(a => a.description && a.description.length > 0));

// Check 4: Experience Tab Data
console.log('\n💼 Experience Tab Data:');
check('Exactly 2 work experiences', resumeData.experience.workExperience.length === 2);
check('Publicis Sapient experience exists', resumeData.experience.workExperience.some(w => w.company === "Publicis Sapient"));
check('TecFinanzas experience exists', resumeData.experience.workExperience.some(w => w.company === "TecFinanzas"));
check('All work experiences have tech stacks', resumeData.experience.workExperience.every(w => w.techStack && w.techStack.length > 0));

check('Exactly 3 projects', resumeData.experience.projects.length === 3);
check('VsWordle project exists', resumeData.experience.projects.some(p => p.name === "VsWordle"));
check('ArriendamEsta project exists', resumeData.experience.projects.some(p => p.name === "ArriendamEsta"));
check('GridSearch project exists', resumeData.experience.projects.some(p => p.name === "GridSearch"));

check('Advanced skills exist', resumeData.experience.skills.advanced && resumeData.experience.skills.advanced.length >= 5);
check('Intermediate skills exist', resumeData.experience.skills.intermediate && resumeData.experience.skills.intermediate.length >= 4);

check('Certifications exist', resumeData.experience.certifications && resumeData.experience.certifications.length >= 4);
check('Languages exist', resumeData.experience.languages && resumeData.experience.languages.length === 2);
check('English proficiency is B2', resumeData.experience.languages.some(l => l.language === "English" && l.proficiency === "B2"));
check('Spanish proficiency is Native', resumeData.experience.languages.some(l => l.language === "Spanish" && l.proficiency === "Native"));

// Check 5: Contact Tab Data
console.log('\n📞 Contact Tab Data:');
check('Phone number is present', resumeData.contact.phone === "+57 3006239923");
check('Email is present', resumeData.contact.email === "danochoa1412@gmail.com");
check('LinkedIn URL is present', resumeData.contact.linkedin && resumeData.contact.linkedin.includes("linkedin.com"));
check('GitHub URL is present', resumeData.contact.github && resumeData.contact.github.includes("github.com"));

// Summary
console.log('\n' + '='.repeat(50));
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📊 Total: ${passed + failed}`);
console.log('='.repeat(50));

if (failed === 0) {
  console.log('\n🎉 All automated checks passed! Ready for manual testing.');
  console.log('📝 Please complete the MANUAL_TESTING_CHECKLIST.md');
  console.log('🌐 Application is running at: http://localhost:5173/');
} else {
  console.log('\n⚠️  Some checks failed. Please review before manual testing.');
  process.exit(1);
}
