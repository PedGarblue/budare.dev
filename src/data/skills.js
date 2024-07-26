import { IconBrandBootstrap, IconBrandCss3, IconBrandDjango, IconBrandDocker, IconBrandHtml5, IconBrandInertia, IconBrandMysql, IconBrandNuxt, IconBrandPython, IconBrandUbuntu } from "@tabler/icons-vue";

export default {
  technical: [
    {
      id: 'backend',
      name: 'Backend',
      skills: [
        {
          title: 'PHP',
          icon: ['fab', 'php'],
          style: {
            color: '#615e8c',
          },
        },
        {
          title: 'Laravel',
          icon: 'laravel',
        },
        // {
        //   title: 'Node',
        //   icon: ['fab', 'node-js'],
        //   style: {
        //     color: '#7dbb3e',
        //   },
        // },
        // {
        //   title: 'Express',
        // },
        {
          title: 'Python',
          icon: IconBrandPython,
          style: {
            color: '#306998',
          },
        },
        {
          title: 'Django',
          icon: IconBrandDjango,
          style: {
            color: '#62d18f',
          },
        }
      ],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      skills: [
        {
          title: 'HTML5',
          icon: IconBrandHtml5,
          style: {
            color: '#f05525',
          },
        },
        {
          title: 'CSS3',
          icon: IconBrandCss3,
          style: {
            color: '#496eff',
          },
        },
        {
          title: 'Javascript',
          icon: ['fab', 'js'],
          style: {
            color: '#e8e840',
          },
        },
        {
          title: 'Vue',
          icon: ['fab', 'vuejs'],
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
          title: 'Inertia.js',
          icon: IconBrandInertia,
          style: {
            color: '#c83fff',
          },
        },
        {
          title: 'TailwindCSS',
          icon: 'tailwind',
        },
        {
          title: 'Bootstrap',
          icon: IconBrandBootstrap,
          style: {
            color: '#ca44ff',
          },
        },
      ],
    },
    {
      id: 'dbs',
      name: 'Databases',
      skills: [
        {
          title: 'MySQL',
          icon: IconBrandMysql,
          style: {
            color: '#559fff',
          },
        },
        {
          title: 'PostgresSQL',
          icon: 'postgres',
        },
        {
          title: 'MongoDB',
          icon: 'mongodb',
        },
      ],
    },
    {
      id: 'devops',
      name: 'DevOps',
      skills: [
        {
          title: 'Linux Virtual Private Servers',
          icon: IconBrandUbuntu,
          style: {
            color: '#ff8e3a',
          },
        },
        {
          title: 'Docker',
          icon: IconBrandDocker,
          style: {
            color: '#559fff',
          },
        },
      ],
    },
    {
      id: 'misc',
      name: 'Software Architecture and Methodologies',
      skills: [
        {
          title: 'SCRUM',
          icon: ['fas', 'users'],
        },
        {
          title: 'TDD',
          icon: ['fas', 'clipboard-check'],
        },
        {
          title: 'SOLID',
          icon: ['fas', 'cube'],
        },
      ],
    },
    {
      id: 'main',
      name: 'Languages',
      skills: [
        {
          title: 'Spanish',
          icon: 'es',
          level: 'Native',
          style: {
            'borderRadius': '9999px',
            'backgroundSize': 'cover',
          },
        },
        {
          title: 'English',
          icon: 'en',
          style: {
            'borderRadius': '9999px',
            'backgroundSize': 'cover',
          },
          level: 'C2 Proficient',
          certificate: 'https://cert.efset.org/kEJX6E',
        },
      ],
    },
  ],
};
