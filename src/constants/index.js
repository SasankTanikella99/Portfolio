import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a detail-oriented and analytical full-stack developer with a strong 
                          focus on solving technical challenges and optimizing web applications for performance and usability. With 2 years of experience, I am proficient in designing scalable, secure solutions using technologies like React, Node, Typescript, databases like SQL and NoSQL, and other such as Docker, Kubernetes, Jenkins, AWS, Azure . My approach to development involves deep problem analysis, identifying root causes, and implementing efficient, long-term solutions. I thrive in collaborative environments, leveraging diverse perspectives to improve processes and create impactful solutions. Beyond coding, I enjoy staying updated on emerging technologies and contributing to innovative open-source projects.`;

export const EXPERIENCES = [
  {
    "year": "2024 - Present",
    "role": "Software Engineer",
    "company": "Technology Crest Corporation",
    "description": "Developing a web-based application to streamline POAM submissions and Cybersecurity Self-Assessment scores, replacing Excel-based reporting with an interactive dashboard. Implementing secure authentication and database management for POAM submissions and NIST maturity scores. Leading the deployment process to Bluehost, expanding technical skills in full-stack development and hosting.",
    "technologies": ["NodeJs", "MySQL", "ReactJs", "Docker", "Kubernetes"]
  },
  {
    "year": "2023 - 2024",
    "role": "Software Engineer",
    "company": "SAAYAM For All",
    "description": "Designed and implemented AWS Cognito authentication and Spring Boot APIs, enhancing system reliability and security. Developed a ReactJS app with internationalization support, improving global accessibility. Implemented a Docker-based CI/CD pipeline with Jenkins, reducing deployment time and errors.",
    "technologies": ["AWS Cognito", "Spring Boot", "ReactJS", "Jenkins", "Docker"]
  },
  {
    "year": "2023 Feb - May",
    "role": "Software Development Intern",
    "company": "Qtr.ai",
    "description": "Engineered core logic for recurring calendar events using Prisma and NestJS, optimized data models and improved API response times. Documented APIs with SwaggerUI and actively contributed to Agile practices in sprint planning and retrospectives.",
    "technologies": ["Prisma", "NestJS", "SwaggerUI", "PostgreSQL"]
  },
  {
    "year": "2020 Aug - Nov",
    "role": "Software Development Intern",
    "company": "Indian Servers",
    "description": "Developed machine learning algorithms for healthcare predictive software, improving accuracy by 10%. Collaborated with data scientists using Snowflake’s cloud platform for data processing and integration with machine learning workflows.",
    "technologies": ["Machine Learning", "Neural Networks", "Snowflake", "Python"]
  }
  
];

export const PROJECTS = [
  {
    title: "Yonder Yurt",
    image: project1,
    description:
      "A full-stack hotel booking application featuring dynamic UI, secure authentication, Stripe payments, and multi-language support.",
    technologies: ["TypeScript", "MongoDB", "Node.js", "React"],
  },
  {
    title: "BotGPT",
    image: project2,
    description:
      "A MERN stack chatbot integrated with OpenAI and featuring JWT authentication, Express-Validators, and secure MongoDB storage.",
    technologies: ["MongoDB","React", "Node.js", "OpenAI"],
  },
  {
    title: "Climate Android",
    image: project3,
    description:
      "A Discord bot integrated with WeatherAPI for real-time forecasts and astronomical data, utilizing voice recognition and REST APIs.",
    technologies: ["Discord.js", "WeatherAPI", "REST API"],
  },
  {
    title: "Aventur Business Project",
    image: project4,
    description:
      "End-end testing project focused on testing methodologies and business commercialization for the Aventur app, involving unit, load,end user and security testing.",
    technologies: ["Testing and Business commericialization"],
  },
];


