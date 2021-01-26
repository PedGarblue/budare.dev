import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs.prod';
import en from './locales/en';
import es from './locales/es';

export default createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'es',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    en,
    es,
  },
});
