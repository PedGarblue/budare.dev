import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import fontawesome from './plugins/fontawesome';
import i18n from './plugins/i18n';
import backgroundsIntersect from './plugins/backgroundsIntersect';
import './assets/tailwind.css';
import './styles/main.css';
import 'aos/dist/aos.css';
import 'viewerjs/dist/viewer.css';
import VueViewer from 'v-viewer';

createApp(App)
  .use(VueViewer)
  .use(router)
  .use(i18n)
  .use(fontawesome)
  .use(backgroundsIntersect)
  .mount('#app');
