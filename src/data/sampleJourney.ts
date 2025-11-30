import { Stage } from '../components/JourneyMap';

export const sampleJourney: Stage[] = [
  {
    id: '1',
    title: 'Introduction to Computer Science',
    description: 'Learn the basics of computing, binary, and logic.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Data Structures & Algorithms',
    description: 'Master arrays, linked lists, trees, and sorting algorithms.',
    status: 'current',
  },
  {
    id: '3',
    title: 'Web Development Fundamentals',
    description: 'HTML, CSS, and JavaScript basics.',
    status: 'locked',
  },
  {
    id: '4',
    title: 'Database Systems',
    description: 'SQL, NoSQL, and database design.',
    status: 'locked',
  },
  {
    id: '5',
    title: 'Operating Systems',
    description: 'Processes, threads, and memory management.',
    status: 'locked',
  },
];
