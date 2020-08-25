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
      'adjusting the RGB values of select pixels to the message’s ASCII values or vice versa</li>',
    skills: ['React', 'Flask']
  },
  {
    image: {
      path: 'assets/logos/no-image-available.png',
      alt: 'No Image Available',
      class: 'no-image-available'
    },
    name: 'TimeTracker',
    duration: 'August 2020',
    description: '<li>A project that aims to more effectively allow groups to schedule times to meet up</li>',
    skills: ['Angular 9', 'Firebase']
  },
  {
    image: {
      path: 'assets/logos/no-image-available.png',
      alt: 'No Image Available',
      class: 'no-image-available'
    },
    name: 'Movie Tracker',
    duration: 'August 2020',
    description: '<li>A project that aims to find and display the frequency with which certain movies are mentioned in the subreddit r/movie</li>',
    skills: ['Python', 'Selenium']
  }
];
