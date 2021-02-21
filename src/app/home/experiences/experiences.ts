export interface Experience {
  image: {
    path: string,
    alt: string,
    class: string
  };
  company: string;
  position: string;
  duration: string;
  description: string;
  skills: string[];
}

export const Experiences: Experience[] = [
  {
    image: {
      path: 'assets/logos/studio-reach.png',
      alt: 'Studio Reach Logo',
      class: 'studio-reach'
    },
    company: 'Studio Reach',
    position: 'Software Developer Part-time',
    duration: 'June 2020 - Now',
    description: '<li>Implementing user stories for <a href="https://are-you-house-ready-dev.web.app/" target="_blank" class="ayhr-link">“Are You House Ready”</a>\n' +
      'project in Angular 9 and Firebase and writing end-to-end and unit tests in Cypress and Jasmine for them</li>' +
      '<li>Developed new layout for real estate vendor cards/pages, checkup questionnaire for\n' +
      'guiding new users, among other features</li>' +
      '<li>Engages in daily standups, iteration planning meetings, retrospectives, and pair\n' +
      'programming sessions as part of an Agile team with a kanban workflow based in Jira</li>',
    skills: ['TypeScript', 'Angular 9', 'Firebase', 'Cypress', 'Jasmine', 'Jira', 'RxJS']
  },
  {
    image: {
      path: 'assets/logos/uf.png',
      alt: 'UF Logo',
      class: 'uf'
    },
    company: 'UF CISE',
    position: 'Applications of Discrete Structures Teaching Assistant',
    duration: 'January 2020 - Now',
    description: '<li>Prepares powerpoint presentations\n' +
      'and example problems for brief lecture reviews over core concepts during weekly discussions for 20-30 students</li>' +
      '<li>Provides 3 hours/week of office hours in order to help address student questions and concerns\n</li>' +
      '<li>Engages in weekly meetings with the professor and other fellow TAs to plan out the logistics of the course,\n' +
      'such as times to grade and course content being reviewed</li>',
    skills: []
  },
  {
    image: {
      path: 'assets/logos/uf.png',
      alt: 'UF Logo',
      class: 'uf'
    },
    company: 'UF CISE',
    position: 'Computer Graphics Grading Assistant',
    duration: 'January 2021 - Now',
    description: '<li>Refactors and extends preexisting OpenGL code scaffolds for projects to fit new requirements\n' +
      'from professor and enable easier workflow for students, including additional resources and links</li>' +
      '<li>Devises rubric for grading projects based on coordination with professor</li>',
    skills: ['C++', 'OpenGL']
  },
  {
    image: {
      path: 'assets/logos/uf.png',
      alt: 'UF Logo',
      class: 'uf'
    },
    company: 'UF CISE SurfLab',
    position: 'Research Assistant',
    duration: 'January 2021 - Now',
    description: '<li>Implementing radius estimation of vessels of a MRI/CT scan displayed\n' +
      'in VR for “VascularVR” project using Unity\n</li>' +
      '<li>Completed in Blender based on nearest neighbor heuristic using Blender API and sklearn</li>' +
      '<li>Develops interface that allows user to execute commands for “Interactive Modeling” Rhino plugin\n' +
      'while in VR through Microsoft Foundational Class library\n</li>',
    skills: ['C#', 'Unity', 'Python', 'Blender', 'C++', 'MFC']
  },
  {
    image: {
      path: 'assets/logos/bookmarkd.png',
      alt: 'Bookmark\'d Logo',
      class: 'bookmarkd'
    },
    company: 'BookMark\'d',
    position: 'Full-stack Web Developer',
    duration: 'October 2019 - July 2020',
    description: '<li>Implemented a web app to facilitate buying/selling of college resources between\n' +
      'college students through React frontend\n</li>' +
      '<li>Developed microservices as part of a REST API using Node + Express\n' +
      '(e.g. real-time chat, product search, and payment processing) and documents in Confluence\n</li>' +
      '<li>Managed web app infrastructure via AWS - runs app on EC2 instances, develops a pipeline\n' +
      'for CI/CD, and sets up domain name and SSL certificate - and DBMS via Elasticsearch and MongoDB </li>',
    skills: ['React', 'Node.js', 'Express.js', 'AWS', 'Elasticsearch', 'Passport.js', 'Confluence']
  }
];
