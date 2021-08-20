export interface Project {
  image: {
    path: string,
    alt: string,
    class: string
  };
  name: string;
  link: string | null;
  duration: string;
  description: string;
  skills: string[];
}

export interface ProjectIndex {
  project: Project;
  index: number;
}

export const Projects: Project[] = [
  {
    image: {
      path: 'assets/logos/no-image-available.png',
      alt: 'No Image Available',
      class: 'no-image-available'
    },
    name: 'TA Attendance Grader',
    link: null,
    duration: 'October 2020',
    description: '<li>Develop script that automates attendance for 300-400 students in Zoom discussions for “Applications of Discrete Structures”, increasing efficiency</li>' +
      '<li>Utilize Pandas and Canvas API to extract info from Zoom CSV files and make grade changes</li>',
    skills: ['Python', 'Pandas', 'Canvas API']
  },
  {
    image: {
      path: 'assets/logos/miri-logo.png',
      alt: 'Miri Logo',
      class: 'miri'
    },
    name: 'Miri',
    link: 'https://github.com/meimunchi/timetracker',
    duration: 'August 2020 - Now',
    description: '<li>See what we\'re up to for <a target=_blank href="https://timetracker-ca7f3.web.app/signin" class="miri-link">Miri</a></li>' +
      '<li>Implementing a web app that aims to optimize the way groups schedule meetings that works for everyone</li>' +
      '<li>Allows individual user to keep track of own calendar (unlike When2meet) and easily use it when setting up group calendars\n' +
      'for determining free times to schedule meetings for</li>' +
      '<li>Facilitates such design through Angular 9 as the frontend, Firebase for hosting and database management, and Figma for creating page designs and logo</li>' +
      '<li>Sets up a GitLab CI/CD pipeline for efficient deployments on commits to master branch and for running e2e tests on every commit</li>',
    skills: ['TypeScript', 'Angular 9', 'Firebase', 'Cypress', 'GitLab', 'Figma']
  },
  {
    image: {
      path: 'assets/logos/crypto-image.png',
      alt: 'Crypto Image Lock',
      class: 'crypto-image'
    },
    name: 'CryptoImage',
    link: 'https://github.com/littealeaf28/cryptoimage',
    duration: 'March 2020',
    description: '<li>A 2020 SwampHacks project that either encodes a message in an image or decodes a message within an image by\n' +
      'adjusting the RGB values of select pixels to the message’s ASCII values or vice versa</li>' +
      '<li>Designed as a web app using React for taking in and displaying images and messages and Flask for processing image data\n' +
      'and performing the encoding and decoding</li>',
    skills: ['JavaScript', 'React', 'Flask']
  }
];
