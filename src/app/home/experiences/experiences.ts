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
    position: 'Software Developer',
    duration: 'June 2020 - Now',
    description: '<p>- Implementing user stories for <a href="https://are-you-house-ready-dev.web.app/" target="_blank" class="ayhr-link">“Are You House Ready”</a>\n' +
      'project in Angular 9 and Firebase and writing end-to-end and unit tests in Cypress and Jasmine for them</p>' +
      '<p>- Helped develop a new layout for real estate vendor cards/pages, integrate\n' +
      'a blog page as updated by an ETL job, and improve site’s SEO, among other features</p>' +
      '<p>- Engages in daily standups, iteration planning meetings, retrospectives, and pair\n' +
      'programming sessions as part of an Agile team with a kanban workflow based in Jira</p>',
    skills: ['TypeScript', 'Angular 9', 'Firebase', 'Cypress', 'Jasmine', 'Jira']
  },
  {
    image: {
      path: 'assets/logos/bookmarkd.png',
      alt: 'Bookmark\'d Logo',
      class: 'bookmarkd'
    },
    company: 'Bookmark\'d',
    position: 'Full-stack Web Developer',
    duration: 'October 2019 - July 2020',
    description: '<p>- Visit the website now in testing: <a href="https://bookmarkdofficial.com/" target="_blank" class="bookmarkd-link">"BookMark\'d"</a></p>' +
      '<p>- Developed microservices as part of a REST API using Node + Express\n' +
      '(e.g. user authentication and authorization, product searching, and payment processing) and documents in Confluence\n' +
      '<p>- Leverages a variety of 3rd party APIs and software (Passport.js, Elasticsearch, Square, Amazon SES, etc.)\n' +
      'and manages database of user and products through MongoDB</p>' +
      '<p>- Managed web app infrastructure through AWS services: runs app on EC2 instances, develops a pipeline for CI/CD\n' +
      'via CodeCommit, CodeDeploy + CodePipeline, and sets up domain name and SSL certificate with Route 53 and Amazon Certificate Manager</p>' +
      '<p>- Implemented a minimalistic user interface through React for displaying user information and providing\n' +
      'access to appropriate functionality/services</p>',
    skills: ['React', 'Node', 'Express', 'AWS']
  }
];
