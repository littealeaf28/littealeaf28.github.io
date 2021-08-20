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
      path: 'assets/logos/jpmchase.png',
      alt: 'JPMorgan Chase & Co. Logo',
      class: 'jpmchase'
    },
    company: 'JPMorgan Chase & Co.',
    position: 'Software Engineer Program Intern | Intern Team Dev Lead',
    duration: 'June 2021 - August 2021',
    description: '<li>Implement and deploy features for a Spring Boot, Angular web app that enables internal\n' +
      'and external users to self service for aggregated data rather than go through operations (OPS) team</li>' +
      '<ul><li>Shaves minutes OPS team spends for each of the ~1100 failed data points/month</li>' +
      '<li>Will save OPS team time by eliminating the ~480 calls/month regarding the data</li></ul>' +
      '<li>Lead intern team to ensure project milestones are met and coached members by explaining relevant\n' +
      'technologies and concepts (e.g. Git, JUnit testing)</li>' +
      '<li>Develop and document a package individually that abstracts, updates, and consolidates fragmented\n' +
      'and nearly deprecated use of the Elasticsearch client</li>',
    skills: ['TypeScript', 'Java', 'Angular', 'Spring Boot', 'Elasticsearch', 'JUnit', 'Mockito', 'Splunk', 'Confluence', 'Jira']
  },
  {
    image: {
      path: 'assets/logos/studio-reach.png',
      alt: 'Studio Reach Logo',
      class: 'studio-reach'
    },
    company: 'Studio Reach',
    position: 'Software Developer Part-time',
    duration: 'June 2020 - March 2021',
    description: '<li>Expand a Firebase, Angular web app - <a href="https://are-you-house-ready-dev.web.app/" target="_blank" class="ayhr-link">“Are You House Ready”</a> -\n' +
      'for connecting clients to real estate vendors in order to improve low site traffic</li>' +
      '<li>Developed a questionnaire for guiding new users, new layouts for vendor cards/pages, etc.</li>' +
      '<li>Engage in daily standups, pair programming, etc. as part of an agile team with kanban workflow</li>',
    skills: ['TypeScript', 'Angular', 'Firebase', 'Firestore', 'GitLab CI/CD', 'Cypress', 'Jasmine', 'Jira']
  },
  {
    image: {
      path: 'assets/logos/uf.png',
      alt: 'UF Logo',
      class: 'uf'
    },
    company: 'UF Computer & Information Science & Engineering',
    position: 'Teaching Assistant',
    duration: 'January 2020 - Now',
    description: '<li>Refactor and extend existing OpenGL code scaffolds for “Computer Graphics” projects to fit new\n' +
      'requirements and eases work for students, including additional resources and links </li>' +
      '<li>Prepare presentations and example problems for lecture reviews over core concepts during discussions for\n' +
      '20-30 students for “Application of Discrete Structures</li>',
    skills: ['C++', 'CMake', 'OpenGL']
  },
  {
    image: {
      path: 'assets/logos/uf.png',
      alt: 'UF Logo',
      class: 'uf'
    },
    company: 'UF SurfLab',
    position: 'Research Assistant',
    duration: 'October 2019 - Now',
    description: '<li>Contribute to a Unity VR app for converting MRI/CT scans to simulation-ready ready pieces\n' +
      'of anatomy for surgeons to train and learn surgery with using VR</li>' +
      '<li>Develop prototypes on core feature design decisions\n</li>' +
      '<ul><li>Implement smart thickness estimation for vessels using Blender API and sklearn</li>' +
      '<li>Write scripts for examining image data to investigate extent of preprocessing needed</li></ul>',
    skills: ['C#', 'Python', 'C++', 'Unity', 'CMake', 'OpenVDB', 'sklearn', 'Blender']
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
    description: '<li>Implement a React, Node web app for college student ecommerce; microservices include real-time chat, product search, and payment processing</li>' +
      '<li>Run app on an AWS EC2 instance, add CI/CD pipeline, and set up domain name & SSL certificate</li>',
    skills: ['React', 'Node', 'Express', 'Elasticsearch', 'Passport.js', 'Stripe API', 'Confluence', 'AWS', 'EC2', 'Code Commit', 'Code Deploy', 'Route 53', 'AWS Certificate Manager']
  }
];
