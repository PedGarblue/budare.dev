import {
  IconBrandDjango,
  IconBrandNuxt,
  IconBrandPython,
  IconBrandVue,
  IconBrandTailwind,
  IconDatabase,
  IconBrandTypescript,
  IconBrandDocker,
} from '@tabler/icons-vue';

export default [
  {
    type: 'major',
    image: 'https://d35dwmqzmoe140.cloudfront.net/japb_preview.png',
    name: '💸 Just Another Budget App',
    desc: {
      'en-US': `Is a Personal Finance App for making budgeting easier, focused in economies with high inflation and mixed circulating currencies.\n
      JAPB helps you by providing reports of all your expenses and income, easily make a shopping list, and show how your balance evolved through time.\n
      This project is only for personal use (for now), i expect at the end of 2024 this app be ready to publish.`,
      es: `Es una aplicación de finanzas personales para hacer el presupuesto más fácil, enfocada en economías con alta inflación y monedas circulantes mixtas.\n
JAPB te ayuda proporcionando informes de todos tus gastos e ingresos, hacer una lista de compras fácilmente, y mostrar cómo ha evolucionado tu saldo a lo largo del tiempo.\n
Este proyecto es solo para uso personal (por ahora), espero que a finales de 2024 esta aplicación esté lista para ser publicada.`,
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
    demoUrl: 'https://japb.budare.dev/',
  },
  {
    type: 'major',
    image: 'https://d35dwmqzmoe140.cloudfront.net/django_rest_framework.png',
    name: '🪙 JAPB API',
    desc: {
      'en-US': `API for Just Another Budget App. Built with Django REST Framework. following Domain Driven Development, Test Driven Development and Clean Architecture principles.\n
      This API handles all the business logic and data persistence for the JAPB project, for the web version and a future mobile version.
      `,
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
      {
        title: 'Docker',
        icon: IconBrandDocker,
        style: {
          color: '#58b6f9',
        },
      }
    ],
    source: 'https://github.com/PedGarblue/japb-api',
    demoUrl: 'https://japb-api.budare.dev/api/v1/',
  },
];
