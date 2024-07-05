import JapbPreviewImage from '@/assets/img/japb_preview.png';
import BudaredevPreviewImage from '@/assets/img/budaredev_preview.png';
import {
  IconBrandDjango,
  IconBrandNuxt,
  IconBrandPython,
  IconBrandVue,
  IconBrandTailwind,
  IconDatabase,
  IconBrandTypescript,
} from '@tabler/icons-vue';

export default [
  {
    type: 'major',
    image: JapbPreviewImage,
    name: '💸 Just Another Budget App',
    desc: {
      'en-US': 'A application for tracking your daily transactions.',
      es: 'App para registrar todas tus transaciones personales.',
    },
    tags: [
      {
        title: 'Vue.js',
        icon: IconBrandVue,
        style: {
          color: '#7ebb12',
        },
      },
      {
        title: 'Nuxt 3',
        icon: IconBrandNuxt,
        style: {
          color: '#7ebb12',
        },
      },
      {
        title: 'Typescript',
        icon: IconBrandTypescript,
        style: {
          color: '#7381ed',
        },
      },
      {
        title: 'Tailwind CSS',
        icon: IconBrandTailwind,
        style: {
          color: '#3299f5',
        },
      }
    ],
    source: 'https://github.com/PedGarblue/just-another-personal-budget',
    demoUrl: '#',
  },
  {
    type: 'major',
    image: JapbPreviewImage,
    name: 'JAPB API',
    desc: {
      'en-US': 'API for Just Another Budget App.',
      es: 'API para Just Another Budget App.',
    },
    tags: [
      {
        title: 'Python',
        icon: IconBrandPython,
        style: {
          color: '#c2c6f1',
        },
      },
      {
        title: 'Django REST Framework',
        icon: IconBrandDjango,
        style: {
          color: '#62d18f',
        },
      },
      {
        title: 'PostgresSQL',
        icon: IconDatabase,
      },
    ]
  },
  {
    image: BudaredevPreviewImage,
    type: 'major',
    name: '📕 budare.dev',
    desc: {
      'en-US': 'Personal portfolio (this site 💪)',
      es: 'Portafolio personal (este sitio 💪).',
    },
    tags: [
      {
        title: 'Vue.js',
        icon: IconBrandVue,
        style: {
          color: '#7ebb12',
        },
      },
      {
        title: 'Tailwind CSS',
        icon: IconBrandTailwind,
        style: {
          color: '#3299f5',
        },
      }
    ],
    source: 'https://github.com/PedGarBlue/pgarciadev',
    demoUrl: 'https://budare.dev',
  },
  // {
  //   type: 'minor',
  //   name: '🛵 Encomiendas',
  //   desc: {
  //     'en-US': 'Simple delivery app for practice.',
  //     es: 'Aplicación simple de entregas.',
  //   },
  //   tags: [
  //     {
  //       title: 'Node',
  //       icon: ['fab', 'node-js'],
  //       style: {
  //         color: '#7dbb3e',
  //       },
  //     },
  //     {
  //       title: 'MongoDB',
  //       icon: 'mongodb',
  //     },
  //     {
  //       title: 'Vue.js',
  //       icon: ['fab', 'vuejs'],
  //       style: {
  //         color: '#7ebb12',
  //       },
  //     },
  //   ],
  //   source: 'https://github.com/PedGarBlue/encomiendas',
  //   demoUrl: 'https://encomiendas.herokuapp.com',
  // },
  // {
  //   type: 'minor',
  //   name: '☕ Cafechan',
  //   desc: {
  //     'en-US': 'A very simple and modern imageboard.',
  //     es: 'Un imageboard sencillo y moderno.',
  //   },
  //   tags: [
  //     {
  //       title: 'Node',
  //       icon: ['fab', 'node-js'],
  //       style: {
  //         color: '#7dbb3e',
  //       },
  //     },
  //     {
  //       title: 'MongoDB',
  //       icon: 'mongodb',
  //     },
  //     {
  //       title: 'Vue.js',
  //       icon: ['fab', 'vuejs'],
  //       style: {
  //         color: '#7ebb12',
  //       },
  //     },
  //   ],
  //   source: 'https://github.com/PedGarBlue/cafechan',
  //   demoUrl: 'https://cafechan.herokuapp.com',
  // },
];
