export interface Experience {
  image?: ExperienceImage;
  video?: string,
  gif?: string,
  text: ExperienceText;
}

export interface ExperienceImage {
  path: string,
  alt: string,
  class: string
}

export interface ExperienceText {
  isWork: boolean;
  heading: string;
  subheading?: string;
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
    text: {
      isWork: true,
      heading: 'JPMorgan Chase & Co.',
      subheading: 'Software Engineer Program Intern',
      duration: 'June 2021 - August 2021',
      description: '<li>Deployed data visualization features to a web app to reduce the number of manual data inquiries\n' +
        'directed towards operations team by internal (~1100/month) and external clients (~480/month)</li>' +
        '<li>Developed a pipeline of ETL jobs on a cron scheduler to migrate several thousand daily data points\n' + 
        'across Splunk and SQL databases into an Elasticsearch instance</li>' +
        '<li>Developed and documented an extensible package in collaboration with a full time developer to\n' +
        'standardize and update team’s fragmented use of Elasticsearch</li>',
      skills: ['TypeScript', 'Java', 'Angular', 'Spring Boot', 'Elasticsearch', 'OracleSQL', 'JUnit', 'Splunk', 'Confluence', 'Jira']
    }
  },
  {
    text: {
      isWork: false,
      heading: 'Nutshell',
      subheading: 'Command Line Interface',
      duration: 'March 2021 - April 2021',
      description: '<li>Implemented a CLI capable of executing built-in (e.g. aliasing, setting environment variables) and external commands,\n' +
        'piping commands together, and performing file I/O</li>' +
        '<li>Integrates Catch tests to ensure app robustness. Applies OOP to manage complexity of different commands </li>',
      skills: ['C++', 'Flex', 'Bison', 'Catch2', 'Make']
    }
  },
  {
    image: {
      path: 'assets/logos/studio-reach.png',
      alt: 'Studio Reach Logo',
      class: 'studio-reach'
    },
    text: {
      isWork: true,
      heading: 'Studio Reach',
      subheading: 'Software Developer Part-time',
      duration: 'June 2020 - March 2021',
      description: '<li>Developed features to modernize the UI/UX of a web MVP to appeal to users with the aim of increasing low traffic</li>' +
        '<li>Implemented unit and automated e2e tests and debugged issues with CI/CD pipeline to ensure app robustness</li>' +
        '<li>Utilized NgRx for managing state management for complex user logic. Implemented a tree-based questionnaire for guiding\n' +
        'new users that relied on NgRx and LocalStorage to track user decisions and history</li>',
      skills: ['TypeScript', 'Angular', 'Firebase', 'Firestore', 'GitLab CI/CD', 'Cypress', 'Jasmine', 'Jira']
    }
  },
  {
    image: {
      path: 'assets/logos/surflab_logo.gif',
      alt: 'UF Logo',
      class: 'surflab'
    },
    text: {
      isWork: true,
      heading: 'UF SurfLab',
      subheading: 'Research Assistant (VascularVR)',
      duration: 'October 2019 - Present',
      description: '<li>Spearhead development of a VR platform over Unity for surgeons to efficiently convert MRI/CT scans to 3D simulations\n' +
        'of body parts for surgery education</li>' +
        '<li>Prototyped and implemented performant erasing tool for surgeons to capture relevant parts of scans</li>' +
        '<li>Prototyped and developed 3D curve vessels and automatic smart fitting of the vessels to the voxel scans to facilitate\n' +
        'partial automation</li>',
      skills: ['C#', 'Python', 'C++', 'Unity', 'CMake', 'sklearn', 'Blender']
    }
  },
  {
    image: {
      path: 'assets/logos/bookmarkd.png',
      alt: 'Bookmark\'d Logo',
      class: 'bookmarkd'
    },
    text: {
      isWork: true,
      heading: 'BookMark\'d',
      subheading: 'Software Developer Part-time',
      duration: 'October 2019 - July 2020',
      description: '<li>Implemented a web app MVP for college student ecommerce, including\n' +
        'real-time chat stored in MongoDB, product search via Elasticsearch, and payment processing through Stripe</li>' +
        '<li>Utilized AWS to run the app on an EC2 instance, added CI/CD pipeline using\n' +
        'CodePipeline (Code Commit, Code Deploy), and set up site’s domain name & SSL certificate</li>',
      skills: ['React', 'Node', 'Express', 'Elasticsearch', 'MongoDB', 'Passport.js', 'Stripe API', 'Confluence', 'AWS',
        'EC2', 'CodePipeline', 'Route 53', 'AWS Certificate Manager']
  }
    }
];

export const graphicsExperiences: Experience[] = [
  {
    image: {
      path: 'assets/logos/surflab_logo.gif',
      alt: 'UF Logo',
      class: 'surflab'
    },
    text: {
      isWork: true,
      heading: 'UF SurfLab',
      subheading: 'Research Assistant (AdaptNet)',
      duration: 'November 2021 - Present',
      description: '<li>Aids in implementing a remeshing algorithm that enables users to convert dense 3D meshes into\n' +
        'a corresponding spline surface with fewer degrees of freedom for ease of modeling and manipulation</li>' +
        '<li>Develops a Docker development environment such that the script can be used across different OS environments</li>' +
        '<li>Researches adjusting the spline’s control points such that the surface  is fit as closely as possible to the target mesh</li>',
      skills: ['Python', 'Docker', 'PyTorch', 'PyTorch3D', 'Git']
    }
  },
  {
    gif: 'beach-scene.gif',
    text: {
      isWork: false,
      heading: 'Beach Scene',
      duration: 'October 2021 - November 2021',
      description: '<li>Models and renders different objects apart of an animated beach scene</li>' +
      '<li>Implements PN triangles and PN quads in order to evaluate and render a textured raft and sail, respectively, by utilizing the tessellation control and evaluation shaders</li>',
      skills: ['C++', 'OpenGL/GLSL', 'CMake', 'Visual Studio', 'Blender']
    }
  },
  {
    gif: 'trefoil.gif',
    text: {
      isWork: false,
      heading: 'Trefoil Curve',
      duration: 'September 2021',
      description: '<li>Models and renders a trefoil curve with interactive control points</li>' +
      '<li>Utilizes tessellation control and evaluation shaders in the OpenGL pipeline to evaluate the control points and render the smooth curve</li>',
      skills: ['C++', 'OpenGL/GLSL', 'CMake', 'Visual Studio']
    }
  },
  {
    video: 'astro-donut-carrot-nyan.mp4',
    text: {
      isWork: false,
      heading: 'Astro Donut Carrot Nyan Adventures',
      duration: 'July 2019',
      description: '<li>Played around with modelling, texturing, and the particle system in Blender to create a fun, short animation</li>',
      skills: ['Blender']
    }
  },
];

export const networksExperiences: Experience[] = [
  {
    text: {
      isWork: false,
      heading: 'Peer to Peer File Sharing',
      subheading: 'Mock BitTorrent',
      duration: 'October 2021 - November 2021',
      description: '<li>Implement a protocol to distribute a file across network of computers (peers) similar to BitTorrent using TCP sockets</li>' +
        '<li>Employed multithreading to facilitate a peer’s simultaneous connection with neighbors while maintaining synchronized access over shared\n' +
        'resources. Develops and designs the messages for peers to synchronize using OOP</li>',
      skills: ['Java', 'Socket Programming', 'Git']
    }
  },
];

export const miscExperiences: Experience[] = [
  {
    image: {
      path: 'assets/logos/uf.png',
      alt: 'UF Logo',
      class: 'uf'
    },
    text: {
      isWork: true,
      heading: 'UF Computer & Information Science & Engineering',
      subheading: 'Teaching Assistant',
      duration: 'January 2020 - May 2022',
      description: '<li><strong>Courses</strong>: "Data Science" (01/2022 - 05/2022), "Operating Systems" (08/2021 - 12/2021), "Discrete Structures" (01/2020 - 05/2021),\n' +
        '"Computer Graphics" (01/2021 - 05/2021)</li>' +
        '<li>Simplified and extended scaffold code for "Computer Graphics" projects, as coordinated with the professor, to improve student understanding of OpenGL\n' +
        'and to integrate changes in requirements</li>' +
        '<li>Prepare presentations and example problems for lecture reviews for “Discrete Structures" discussions\n' +
        'for 20-30 students</li>' +
        '<li>Developed script to automate tracking attendance for 300-400 students in Zoom discussions for “Discrete Structures”</li>',
      skills: ['C++', 'CMake', 'OpenGL', 'Python', 'Jupyter Notebook', 'sklearn', 'Pandas', 'Canvas API']
    }
  },
]