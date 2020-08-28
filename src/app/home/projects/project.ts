export interface Project {
  image: {
    path: string,
    alt: string,
    class: string
  };
  name: string;
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
      path: 'assets/logos/crypto-image.png',
      alt: 'Crypto Image Lock',
      class: 'crypto-image'
    },
    name: 'CryptoImage',
    duration: 'March 2020',
    description: '<li>A 2020 SwampHacks project that either encodes a message in an image or decodes a message within an image by\n' +
      'adjusting the RGB values of select pixels to the message’s ASCII values or vice versa</li>' +
      '<li>Designed as a web app using React for taking in and displaying images and messages and Flask for processing image data\n' +
      'and performing the encoding and decoding</li>',
    skills: ['JavaScript', 'React', 'Flask']
  },
  {
    image: {
      path: 'assets/logos/no-image-available.png',
      alt: 'No Image Available',
      class: 'no-image-available'
    },
    name: 'TimeTracker',
    duration: 'August 2020',
    description: '<li>Implementing a web app that aims to optimize the way groups schedule meetings that works for everyone</li>' +
      '<li>Allows individual user to keep track of own calendar (unlike When2meet) and easily use it when setting up group calendars\n' +
      'for determining free times to schedule meetings for</li>' +
      '<li>Facilitates such design through Angular 9 as the frontend, Firebase for hosting and database management, and Figma for creating page designs and logo</li>',
    skills: ['TypeScript', 'Angular 9', 'Firebase', 'Figma', 'Trello']
  },
  {
    image: {
      path: 'assets/logos/no-image-available.png',
      alt: 'No Image Available',
      class: 'no-image-available'
    },
    name: 'r/movie Tracker',
    duration: 'August 2020',
    description: '<li>Developing a web app that displays the frequency with which certain movies are mentioned in the r/movie\n' +
      'subreddit over time by pulling posts from the subreddit each day via PRAW and determining the number of times a given movie is mentioned</li>' +
      '<li>Uses Selenium to scrape movie titles from IMDB site and manages them in a PostgreSQL database\n</li>' +
      '<li>Designed as a means to expand my experiences in data science, particularly with familiarizing myself with web scraping and\n' +
      'managing large quantities of data in a relational database</li>',
    skills: ['Python', 'Selenium', 'PRAW', 'Cloud SQL', 'PostgreSQL', 'Jira']
  },
  // {
  //   image: {
  //     path: 'assets/logos/no-image-available.png',
  //     alt: 'No Image Available',
  //     class: 'no-image-available'
  //   },
  //   name: 'Four Elements in a Row',
  //   duration: 'October 2019 - Now',
  //   description: '<li>A rendition of the Tic Tac Toe in an Android app format, playable between two people over a single device</li>' +
  //     '<li>Incorporates Avatar theme, a 5 by 5 grid board, and additional moves specific to each element (based on the Avatar theme)\n' +
  //     'for a more engaging game of Tic Tac Toe\n</li>',
  //   skills: ['Java', 'Android Studio', 'GIMP']
  // }
];
