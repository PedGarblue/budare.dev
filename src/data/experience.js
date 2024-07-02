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
import freelancer1 from '@/assets/img/freelancer_img.png'

export const experiences = [
  {
    images: [valocator1, valocator2, valocator3, valocator4, valocator5],
    employer: 'VALocator',
    employer_link: 'https://www.valocator.com',
    title: 'Fullstack Developer',
    description: `Collaborated in the development of a Recruitment Management App that streamlined the onboarding, tracking, and selection process of Virtual Assistants. Implemented CMS to publish job posts, and algorithmically suggest suitable VAs to Recruiters.`,
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
      `Development and Deployment of a Client Portal for a treatment mapping system to automatically assess possible treatment options based on present pathogens and genes.`,
      `Development of a data visualization website to review and assess the performance of sales representatives`,
      `Provided support on internal backend projects for optimization and debugging to store and share data between labs following HIPPA standards.`,
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
    images: [freelancer1],
    employer: 'Freelance',
    title: 'Fullstack Developer',
    description: [
      `Optimized, maintained and improved Legacy Websites, mainly niche
discussion forums with HTML5, Pure CSS, JavaScript, and PHP.`
    ],
    from: 'Oct 2019',
    to: 'July 2021',
    tags: [
      {
        icon: ['fab', 'html5'],
        title: 'HTML & CSS3',
      },
      {
        icon: ['fab', 'php'],
        title: 'PHP',
      },
      {
        icon: ['fab', 'js'],
        title: 'Javascript',
      },
      {
        icon: 'mysql',
        title: 'MySQL',
      },
    ],
  },
];