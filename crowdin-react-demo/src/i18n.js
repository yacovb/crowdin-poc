import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {},
  });

// Load translations dynamically
const loadTranslations = async (language) => {
  try {
    const response = await fetch(`/locales/${language}/translation.json`);
    const translations = await response.json();
    i18n.addResourceBundle(language, 'translation', translations);
  } catch (error) {
    console.error(`Failed to load ${language} translations:`, error);
  }
};

// Load English by default
loadTranslations('en');

export { loadTranslations };
export default i18n;

