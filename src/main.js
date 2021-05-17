import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './plugins/i18n';
import fontawesome from './plugins/fontawesome';

createApp(App)
  .use(router)
  .use(i18n)
  .use(fontawesome)
  .mount('#app');
