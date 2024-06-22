import experience1 from '@/assets/img/valocator1.png'
import experience2 from '@/assets/img/igx1.png'

export const experiences = [
  {
    image: experience1,
    employer: 'VALocator',
    employer_link: 'https://www.valocator.com',
    title: 'Fullstack Developer',
    description: `Development of a Recruiter Management App. This system significantly shortened the recruitment process of Virtual Assistants to less than 3 days. Developed with Laravel, Vue, Tailwind, MySQL and deployed it live on an Ubuntu VPS.`,
    from: 'March 2023',
    to: 'May 2024',
    tags: [
      {
        icon: ['fab', 'vuejs'],
        title: 'VueJS',
        style: {
          color: '#7ebb12',
        },
      },
      {
        icon: 'tailwind',
        title: 'TailwindCSS',
      },
      {
        icon: 'bootstrap',
        title: 'Bootstrap',
      },
      {
        icon: 'laravel',
        title: 'Laravel',
      },
      {
        icon: 'mysql',
        title: 'MySQL',
      },
    ],
  },
  {
    image: experience2,
    employer: 'Innovative Gx Health',
    employer_link: 'https://www.instagram.com/innovativegx/',
    title: 'Fullstack Developer',
    description: [
      `Developed a Client Portal for Pharmacological Sample Results using PHP8 Laravel 9, Vue 3, InertiaJS, and TailwindCSS. Successfully deployed live on an Ubuntu VPS.`,
      `Implemented and maintained a Sales Reporting App using Vue and Bootstrap on the frontend and Laravel on the backend, with MySQL as RDBMS. Successfully deployed it live on an Ubuntu VPS.`,
      `Provided support on several projects for optimization and debugging, using languages such as JavaScript, PHP and Python.`,
    ],
    from: 'July 2021',
    to: 'March 2023',
    tags: [
      {
        icon: ['fab', 'vuejs'],
        title: 'VueJS',
        style: {
          color: '#7ebb12',
        },
      },
      {
        icon: 'tailwind',
        title: 'TailwindCSS',
      },
      {
        icon: 'bootstrap',
        title: 'Bootstrap',
      },
      {
        icon: 'laravel',
        title: 'Laravel',
      },
      {
        icon: 'mysql',
        title: 'MySQL',
      },
    ],
  },
];