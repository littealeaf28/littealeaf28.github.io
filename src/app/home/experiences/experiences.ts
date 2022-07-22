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

export const softwareDevExperiences: Experience[] = [
  {
    image: {
      path: 'assets/logos/jpmchase.png',
      alt: 'JPMorgan Chase & Co. Logo',
      class: 'jpmchase'
    },
    company: 'JPMorgan Chase & Co.',
    position: 'Software Engineer Program Intern',
    duration: 'June 2021 - August 2021',
    description: '<li>Deployed data visualization features to a web app to reduce the number of manual data inquiries\n' +
      'directed towards operations team by internal (~1100/month) and external clients (~480/month)</li>' +
      '<li>Developed a pipeline of ETL jobs on a cron scheduler to migrate several thousand daily data points\n' + 
      'across Splunk and SQL databases into an Elasticsearch instance</li>' +
      '<li>Developed and documented an extensible package in collaboration with a full time developer to\n' +
      'standardize and update team’s fragmented use of Elasticsearch</li>',
    skills: ['TypeScript', 'Java', 'Angular', 'Spring Boot', 'Elasticsearch', 'OracleSQL', 'JUnit', 'Splunk', 'Confluence', 'Jira']
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
    description: '<li>Developed features to modernize the UI/UX of a web MVP to appeal to users with the aim of increasing low traffic</li>' +
      '<li>Implemented unit and automated e2e tests and debugged issues with CI/CD pipeline to ensure app robustness</li>' +
      '<li>Utilized NgRx for managing state management for complex user logic. Implemented a tree-based questionnaire for guiding\n' +
      'new users that relied on NgRx and LocalStorage to track user decisions and history</li>',
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
    duration: 'January 2020 - May 2022',
    description: '<li><strong>Courses</strong>: "Data Science" (01/2022 - 05/2022), "Operating Systems" (08/2021 - 12/2021), "Discrete Structures" (01/2020 - 05/2021),\n' +
      '"Computer Graphics" (01/2021 - 05/2021)</li>' +
      '<li>Simplified and extended scaffold code for "Computer Graphics" projects, as coordinated with the professor, to improve student understanding of OpenGL\n' +
      'and to integrate changes in requirements</li>' +
      '<li>Prepare presentations and example problems for lecture reviews for “Discrete Structures" discussions\n' +
      'for 20-30 students</li>',
    skills: ['C++', 'CMake', 'OpenGL', 'Python', 'Jupyter Notebook', 'sklearn']
  },
  {
    image: {
      path: 'assets/logos/surflab_logo.gif',
      alt: 'UF Logo',
      class: 'surflab'
    },
    company: 'UF SurfLab',
    position: 'Research Assistant (VascularVR)',
    duration: 'October 2019 - Present',
    description: '<li>Spearhead development of a VR platform over Unity for surgeons to efficiently convert MRI/CT scans to 3D simulations\n' +
      'of body parts for surgery education</li>' +
      '<li>Prototyped and implemented performant erasing tool for surgeons to capture relevant parts of scans</li>' +
      '<li>Prototyped and developed 3D curve vessels and automatic smart fitting of the vessels to the voxel scans to facilitate\n' +
      'partial automation</li>',
    skills: ['C#', 'Python', 'C++', 'Unity', 'CMake', 'sklearn', 'Blender']
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
    description: '<li>Implemented a web app MVP for college student ecommerce, including\n' +
      'real-time chat stored in MongoDB, product search via Elasticsearch, and payment processing through Stripe</li>' +
      '<li>Utilized AWS to run the app on an EC2 instance, added CI/CD pipeline using\n' +
      'CodePipeline (Code Commit, Code Deploy), and set up site’s domain name & SSL certificate</li>',
    skills: ['React', 'Node', 'Express', 'Elasticsearch', 'MongoDB', 'Passport.js', 'Stripe API', 'Confluence', 'AWS',
      'EC2', 'CodePipeline', 'Route 53', 'AWS Certificate Manager']
  }
];

export const graphicsExperiences: Experience[] = [
  {
    image: {
      path: 'assets/logos/surflab_logo.gif',
      alt: 'UF Logo',
      class: 'surflab'
    },
    company: 'UF SurfLab',
    position: 'Research Assistant (AdaptNet)',
    duration: 'November 2021 - Present',
    description: '<li>Aids in implementing a remeshing algorithm that enables users to convert dense 3D meshes into\n' +
      'a corresponding spline surface with fewer degrees of freedom for ease of modeling and manipulation</li>' +
      '<li>Develops a Docker development environment such that the script can be used across different OS environments</li>' +
      '<li>Researches adjusting the spline’s control points such that the surface  is fit as closely as possible to the target mesh</li>',
    skills: ['Python', 'Docker', 'PyTorch', 'PyTorch3D', 'Git']
  },
];