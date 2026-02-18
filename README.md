# Personal Resume Webpage - Daniel Sebastián Ochoa Urrego

A modern, responsive single-page application showcasing my professional profile, work experience, education, and skills through an intuitive tabbed interface.

🔗 **Live Demo:** [cv-daniel-ochoa.azurewebsites.net](https://cv-daniel-ochoa-bddvhyc5cvdabxbw.chilecentral-01.azurewebsites.net/)

## 📋 Overview

This is a personal resume website built with React and Vite, featuring a clean tabbed interface that allows visitors to easily navigate through different sections of my professional background. The application is optimized for both desktop and mobile viewing, with smooth transitions and a modern design aesthetic.

## ✨ Features

- **Tabbed Navigation**: Four distinct sections (About, Education, Experience, Contact) for organized content presentation
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth transitions
- **Accessibility**: Keyboard navigation support and semantic HTML structure
- **Fast Performance**: Built with Vite for optimal loading times
- **Comprehensive Testing**: Unit tests, integration tests, property-based tests, and accessibility tests

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.5
- **Styling**: CSS Modules
- **Testing**: Vitest 2.1.8, React Testing Library, fast-check (property-based testing)
- **Deployment**: Azure App Service
- **CI/CD**: GitHub Actions

## 📦 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── HeroTab.jsx
│   │   ├── AcademicTab.jsx
│   │   ├── ExperienceTab.jsx
│   │   ├── ContactTab.jsx
│   │   └── TabNavigation.jsx
│   ├── data/
│   │   └── resumeData.js    # Resume content data
│   ├── styles/              # CSS modules
│   ├── test/                # Test setup
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── public/                  # Static assets
├── dist/                    # Production build output
└── .github/workflows/       # CI/CD configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 24.0.0
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DanielOchoa1214/NUTI-CV-Page.git
cd NUTI-CV-Page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode

## 🧪 Testing

The project includes comprehensive test coverage:

- **Unit Tests**: Component-level testing for individual features
- **Integration Tests**: Testing component interactions and data flow
- **Property-Based Tests**: Generative testing using fast-check for robust validation
- **Accessibility Tests**: Ensuring WCAG compliance and keyboard navigation

Run tests with:
```bash
npm test
```

## 🌐 Deployment

The application is automatically deployed to Azure App Service via GitHub Actions when changes are pushed to the main branch.

### Deployment Workflow

1. Code is pushed to the `main` branch
2. GitHub Actions triggers the build workflow
3. Dependencies are installed and tests are run
4. Production build is created
5. Build artifacts are deployed to Azure App Service

### Manual Deployment

To deploy manually:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production-ready files
3. Deploy the `dist` folder to your hosting service

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Mobile**: ≤ 768px

## 🎨 Design Principles

- Clean, modern aesthetic appropriate for a software engineer's portfolio
- Consistent typography and professional color scheme
- Clear visual distinction between active and inactive tabs
- Smooth transitions for enhanced user experience
- High contrast for optimal readability

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Contact

**Daniel Sebastián Ochoa Urrego**

- Email: danochoa1412@gmail.com
- LinkedIn: [daniel-sebastian-ochoa-urrego](https://www.linkedin.com/in/daniel-sebastian-ochoa-urrego/)
- GitHub: [DanielOchoa1214](https://github.com/DanielOchoa1214)

---

Built with ❤️ using React and Vite
