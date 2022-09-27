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
{
    id: 3,
    name: 'Capoeira',
    description: 'Capoeira is a Brazilian martial art that combines elements of dance, acrobatics, and music.',
    students: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Mateus' },
      { id: 3, name: 'Luca' },

    ]
},
{
    id: 4,
    name: 'Karate',
    description: 'Karate is a martial art developed in the Ryukyu Kingdom. It developed from the indigenous Ryukyuan martial arts under the influence of Chinese martial arts.',
    students: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Mateus' },
      { id: 3, name: 'Luca' },
    ]
},
{
    id: 5,
    name: 'Judo',
    description: 'Judo is a modern martial art, combat and Olympic sport created in Japan in 1882 by Jigoro Kano.',
    students: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Mateus' },
      { id: 3, name: 'Luca' },
    ]
},
{
    id: 6,
    name: 'Taekwondo',
    description: 'Taekwondo is a Korean martial art, characterized by its emphasis on head-height kicks, jumping and spinning kicks, and fast kicking techniques.',
    students: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Mateus' },
      { id: 3, name: 'Luca' },
    ]
}
]
