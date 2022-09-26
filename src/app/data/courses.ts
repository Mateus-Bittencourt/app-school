import { CourseModel } from "../models/course.model";

export const dataset: CourseModel[] = [
  {
    id: 1,
    name: 'Jiu-Jitsu',
    description: 'Jiu-Jitsu is a martial art, combat sport, and a self-defense system that focuses on grappling and especially ground fighting.',
    students: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Mateus' },
      { id: 3, name: 'Luca' },

    ]
},
{
    id: 2,
    name: 'Muay Thai',
    description: 'Muay Thai is a combat sport of Thailand that uses stand-up striking along with various clinching techniques.',
    students: [
      { id: 1, name: 'John' },
      { id: 2, name: 'João' },
      { id: 3, name: 'Luca' },

    ]
},
]
