import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-20 z-50 px-3 py-2 rounded-full bg-light-surface dark:bg-dark-surface border border-gray-300 dark:border-gray-700 hover:scale-110 transition-transform duration-200 text-sm font-medium"
      aria-label={i18n.t('aria.toggleLanguage')}
    >
      {i18n.language === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
    </button>
  );
}
