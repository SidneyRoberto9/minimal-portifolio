import { useTranslation } from 'react-i18next';

export function More() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center h-4 w-64 my-8 mx-auto">
      <a
        href="https://github.com/SidneyRoberto9"
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
      >
        {t('next')}
      </a>
    </div>
  );
}
