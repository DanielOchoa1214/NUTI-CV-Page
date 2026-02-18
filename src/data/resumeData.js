export const resumeData = {
  hero: {
    name: "Daniel Sebastián Ochoa Urrego",
    tagline: "Software Engineer + Java lover",
    profileText: "Hi! I am a passionate developer looking forward to learning new technologies, I especially enjoy projects that allow me to apply my knowledge to create interesting and useful solutions. My favorite tools are Java, SpringBoot, and Azure. I love learning new things and am constantly looking to broaden my knowledge and skills. I have won two scholarships during my university journey, which shows my dedication and academic excellence. Also, I have certifications in Azure, SpringBoot, SQL, and .NET which show my commitment to my professional journey and continuous improvement.",
    photoUrl: "/ProfilePhoto.jpeg"
  },
  
  academic: {
    education: {
      degree: "Systems Engineer",
      university: "Universidad Escuela Colombiana de Ingeniería Julio Garavito",
      period: "August 2019 - October 2024",
      location: "Bogotá"
    },
    achievements: [
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
    ]
  },
  
  experience: {
    workExperience: [
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
    ],
    projects: [
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
    ],
    skills: {
      advanced: ["Java", "Python", "JavaScript / CSS / HTML", "Git", "React"],
      intermediate: ["Cloud computing", "Angular", "MongoDB", "SQL"]
    },
    certifications: [
      "Azure Fundamentals AZ-900",
      "Spring WebFlux",
      "Advanced Topics in SQL",
      "ASP.NET"
    ],
    languages: [
      { language: "English", proficiency: "B2" },
      { language: "Spanish", proficiency: "Native" }
    ]
  },
  
  contact: {
    phone: "+57 5551231234",
    email: "danochoa@gmail.com",
    linkedin: "https://www.linkedin.com/in/daniel-sebastian-ochoa-urrego/",
    github: "https://github.com/DanielOchoa1214"
  }
};

export const tabs = [
  { id: 'hero', label: 'About' },
  { id: 'academic', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];
