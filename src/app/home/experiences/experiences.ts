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
      '<li>Improve efficiency for OPS teams by reducing time spent on ~1100 failed data points/month and\n' +
      'potentially eliminating ~480 data inquiries/month</li>' +
      '<li>Lead intern team to ensure project milestones are met and help explain relevant\n' +
      'technologies and concepts (e.g. Git, JUnit testing)</li>' +
      '<li>Individually develop and document a package that abstracts, updates, and consolidates fragmented\n' +
      'use of the Elasticsearch client</li>',
    skills: ['TypeScript', 'Java', 'Angular', 'Spring Boot', 'Elasticsearch', 'OracleSQL', 'JUnit', 'Mockito', 'Splunk', 'Confluence', 'Jira']
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
      '<li>Develop a questionnaire for guiding new users, new layouts for vendor cards/pages, etc.</li>' +
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
    duration: 'January 2020 - Present',
    description: '<li><strong>Courses</strong>: "Operating Systems" (08/2021 - Present), "Applications of Discrete Structures" (01/2020 - 05/2021),\n' +
      '"Computer Graphics" (01/2021 - 05/2021)</li>' +
      '<li>Refactor and extend existing OpenGL code scaffolds for “Computer Graphics” projects to fit new\n' +
      'requirements and eases learning experience for students, including additional resources and links </li>' +
      '<li>Prepare presentations and example problems for lecture reviews for “Application of Discrete Structures" discussions\n' +
      'for 20-30 students</li>',
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
    duration: 'October 2019 - Present',
    description: '<li>Contribute to a Unity VR app for converting MRI/CT scans to simulation-ready ready pieces\n' +
      'of anatomy for surgeons to train and learn surgery with using VR</li>' +
      '<li>Develop prototypes on core feature design decisions\n</li>' +
      '<ul><li>Implement smart thickness estimation for vessels using Blender API and sklearn</li>' +
      '<li>Write scripts for examining DICOM (medical image) data to investigate extent of preprocessing needed</li></ul>',
    skills: ['C#', 'Python', 'C++', 'Unity', 'CMake', 'OpenVDB', 'sklearn', 'Blender']
  },
  {
    image: {
      path: 'assets/logos/bookmarkd.png',
      alt: 'Bookmark\'d Logo',
      class: 'bookmarkd'
    },
    company: 'BookMark\'d',
    position: 'Software Developer Part-time',
    duration: 'October 2019 - July 2020',
    description: '<li>Implement a React, Node web app for college student ecommerce, including\n' +
      'real-time chat stored in MongoDB, product search via Elasticsearch, and payment processing through Stripe</li>' +
      '<li>Utilizes AWS to run app on an EC2 instance, add CI/CD pipeline using\n' +
      'CodePipeline (Code Commit, Code Deploy), and set up site’s domain name & SSL certificate</li>',
    skills: ['React', 'Node', 'Express', 'Elasticsearch', 'MongoDB', 'Passport.js', 'Stripe API', 'Confluence', 'AWS',
      'EC2', 'CodePipeline', 'Route 53', 'AWS Certificate Manager']
  }
];
