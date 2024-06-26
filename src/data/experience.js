import valocator1 from '@/assets/img/valocator1.png'
import valocator2 from '@/assets/img/valocator_2.png'
import valocator3 from '@/assets/img/valocator_3.png'
import valocator4 from '@/assets/img/valocator_4.png'
import valocator5 from '@/assets/img/valocator_5.png'
import igx1 from '@/assets/img/igx1.png'
import igx2 from '@/assets/img/igx_2.png'
import igx3 from '@/assets/img/igx_3.png'
import igx4 from '@/assets/img/igx_4.png'
import igx5 from '@/assets/img/igx_5.png'

export const experiences = [
  {
    images: [valocator1, valocator2, valocator3, valocator4, valocator5],
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
    images: [igx1, igx2, igx3, igx4, igx5],
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