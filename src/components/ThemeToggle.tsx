import { FiSun, FiMoon } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-light-surface dark:bg-dark-surface border border-gray-300 dark:border-gray-700 hover:scale-110 transition-transform duration-200"
      aria-label={t('aria.toggleTheme')}
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      ) : (
        <FiSun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
}
