import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  // FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Sarah',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Olusola',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Nigerian',
  },
  {
    id: 6,
    title: 'Address : ',
    description: 'Lagos',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+2349091136262',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'olusolakorode@gmail.com',
  },

  {
    id: 9,
    title: 'Twitter : ',
    description: '@KorodeOlusola',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Spanish, English',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    title: 'Web Developer <span> PickmeUp Services </span>',
    desc: 'I contributed to the design and implementation of different APIs for a logistics company using ReactJS, Tailwind CSS and JavaScript. I contributed to designing and implementing API consumption (GET Request) for a staff profile form within the action column of the staff application. The form displays non-editable information such as name, address, status, role in the company, age, and guarantor details, retrieved from the backend for each staff member.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    title: 'Frontend Web Developer <span> Prunedge </span>',
    desc: 'Managed and updated existing applications while ensuring compatibility with various devices through responsive design. Enhanced website speed and efficiency through image optimization and code restructuring. Improved collaboration and workflow efficiency by leveraging Git for version control and maintaining repositories on GitHub',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    title: 'Frontend Intern <span> SideHustle Internship </span>',
    desc: 'Enhanced productivity and effectiveness by acquiring and implementing new skills in daily web development workflows. Converted Figma design mockups into precise, high-quality HTML and CSS code. Worked closely with fellow interns to streamline web development processes.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaBriefcase />,
    title: 'Frontend Developer <span> Arteria </span>',
    desc: 'Collaborated closely with product designer, implementing accurate UI/UX using Bootstrap and replicating Figma design, resulting in visually appealing and user-friendly web experiences.Became proficient in HTML, CSS, and JavaScript, crafting high-caliber code for various projects, such as designing a personal portfolio website and building multiple fully operational front-end web applications. Started my coding journey, developing fundamental programming skills.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaBriefcase />,
    title: 'Frontend Developer (Intern) <span> Kodecamp </span>',
    desc: 'Worked closely with backend teams to seamlessly integrate frontend elements with RESTful APIs, facilitating smooth data transmission and real-time content updates. Acquired expertise in React JS and TypeScript through practical projects and mentorship. Collaborated with senior developers to build a brand-new website from the ground up, employing React and Tailwind CSS.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaBriefcase />,
    title: 'Frontend Developer (Intern) <span> GRAZAC Technologies </span>',
    desc: 'Conducted unit tests, integration tests, and end-to-end tests to identify and fix bugs, ensuring the reliability and stability of frontend code.  Participated in agile development methodologies like Scrum, contributed to sprint planning, daily stand-ups, and sprint reviews to deliver features incrementally and iteratively ',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
  },

  {
    id: 2,
    title: 'Javascript',
  },

  {
    id: 3,
    title: 'Git & Github',
  },

  {
    id: 4,
    title: 'Firebase',
  },

  {
    id: 5,
    title: 'Tailwind CSS',
  },

  {
    id: 6,  
    title: 'React.Js',
  },
  {
    id: 7,
    title: 'NextJS',
  },
  {
    id: 8,
    title: 'Figma',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
