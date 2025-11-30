import type { Stage } from '@/components/JourneyMap';

export const csFundamentals: Stage[] = [
  {
    id: 'cs50-0',
    title: 'Computational Thinking & Scratch',
    description: 'Introduction to the intellectual enterprises of computer science and the art of programming.',
    status: 'completed',
    resources: [
      { title: 'CS50 Week 0 - Scratch', url: 'https://cs50.harvard.edu/x/2024/weeks/0/', type: 'course' },
      { title: 'Scratch - Imagine, Program, Share', url: 'https://scratch.mit.edu/', type: 'challenge' }
    ]
  },
  {
    id: 'cs50-1',
    title: 'C Programming',
    description: 'Dive into the C language, variables, conditionals, loops, and abstraction.',
    status: 'completed',
    resources: [
      { title: 'CS50 Week 1 - C', url: 'https://cs50.harvard.edu/x/2024/weeks/1/', type: 'course' },
      { title: 'C Programming - FreeCodeCamp', url: 'https://www.freecodecamp.org/news/c-programming-for-beginners/', type: 'article' }
    ]
  },
  {
    id: 'cs50-2',
    title: 'Arrays & Memory',
    description: 'Understanding how data is stored, compiling, debugging, and memory management.',
    status: 'current',
    resources: [
      { title: 'CS50 Week 2 - Arrays', url: 'https://cs50.harvard.edu/x/2024/weeks/2/', type: 'course' },
      { title: 'CS50 Week 4 - Memory', url: 'https://cs50.harvard.edu/x/2024/weeks/4/', type: 'course' }
    ]
  },
  {
    id: 'cs50-3',
    title: 'Algorithms & Data Structures',
    description: 'Sorting, searching, trees, hash tables, tries, and queues.',
    status: 'locked',
    resources: [
      { title: 'CS50 Week 3 - Algorithms', url: 'https://cs50.harvard.edu/x/2024/weeks/3/', type: 'course' },
      { title: 'CS50 Week 5 - Data Structures', url: 'https://cs50.harvard.edu/x/2024/weeks/5/', type: 'course' },
      { title: 'Algorithms Course - FreeCodeCamp', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: 'course' }
    ]
  },
  {
    id: 'cs50-6',
    title: 'Python',
    description: 'Transitioning from C to Python. High-level programming concepts.',
    status: 'locked',
    resources: [
      { title: 'CS50 Week 6 - Python', url: 'https://cs50.harvard.edu/x/2024/weeks/6/', type: 'course' },
      { title: 'Scientific Computing with Python', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/', type: 'course' }
    ]
  },
  {
    id: 'cs50-7',
    title: 'SQL & Databases',
    description: 'Relational databases, SQL queries, and data management.',
    status: 'locked',
    resources: [
      { title: 'CS50 Week 7 - SQL', url: 'https://cs50.harvard.edu/x/2024/weeks/7/', type: 'course' },
      { title: 'Relational Database Course', url: 'https://www.freecodecamp.org/learn/relational-database/', type: 'course' }
    ]
  }
];

export const webDevelopment: Stage[] = [
  {
    id: 'web-1',
    title: 'Responsive Web Design',
    description: 'HTML5, CSS3, Flexbox, Grid, and responsive design principles.',
    status: 'completed',
    resources: [
      { title: 'Responsive Web Design Certification', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', type: 'course' },
      { title: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', type: 'article' }
    ]
  },
  {
    id: 'web-2',
    title: 'JavaScript Algorithms',
    description: 'Functional programming, OOP, and algorithm scripting in JS.',
    status: 'current',
    resources: [
      { title: 'JS Algorithms & Data Structures', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: 'course' },
      { title: 'CS50 Week 8 - HTML, CSS, JS', url: 'https://cs50.harvard.edu/x/2024/weeks/8/', type: 'course' }
    ]
  },
  {
    id: 'web-3',
    title: 'Front End Development Libraries',
    description: 'React, Redux, Bootstrap, SASS, and jQuery.',
    status: 'locked',
    resources: [
      { title: 'Front End Development Libraries', url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/', type: 'course' },
      { title: 'React Official Tutorial', url: 'https://react.dev/learn', type: 'article' }
    ]
  },
  {
    id: 'web-4',
    title: 'Back End Development',
    description: 'Node.js, Express, MongoDB, and API development.',
    status: 'locked',
    resources: [
      { title: 'Back End Development and APIs', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/', type: 'course' },
      { title: 'CS50 Week 9 - Flask', url: 'https://cs50.harvard.edu/x/2024/weeks/9/', type: 'course' }
    ]
  }
];
