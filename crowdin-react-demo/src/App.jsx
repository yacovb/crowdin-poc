import { useTranslation } from 'react-i18next';
import './i18n'; // Import i18n config
import { loadTranslations } from './i18n';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lng) => {
    await loadTranslations(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <h1>{t('app_title')}</h1>
      
      {/* Language Switcher */}
      <div className="language-switcher">
        <label>{t('language_selector')} </label>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
        <button onClick={() => changeLanguage('fr')}>Français</button>
      </div>

      <p>{t('welcome')}</p>
      <p>{t('description')}</p>

      <h2>{t('features.title')}</h2>
      <ul>
        <li>{t('features.sync')}</li>
        <li>{t('features.realtime')}</li>
        <li>{t('features.integration')}</li>
      </ul>

      <div className="card">
        <button>{t('buttons.get_started')}</button>
        <button>{t('buttons.learn_more')}</button>
      </div>

      <footer>{t('footer')}</footer>
    </>
  );
}

export default App;
