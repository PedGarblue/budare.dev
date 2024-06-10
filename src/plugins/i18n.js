import { createI18n } from 'vue-i18n';
import en from '../locales/en';
import es from '../locales/es';

export default createI18n({
  legacy: false,
  locale: import.meta.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE,
  messages: {
    en,
    es,
  },
});
