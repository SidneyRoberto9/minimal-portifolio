import { useTranslation } from 'react-i18next';

import { Title } from './Title';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action={import.meta.env.VITE_SLUG_FORM_KEY}
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>{t('contato')}</Title>
          <input
            type="text"
            name="name"
            placeholder={t('inputName') as string}
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            className="mt-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />

          <textarea
            name="message"
            placeholder={t('inputMessage') as string}
            rows={10}
            className="mt-2 p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            {t('submitAbout')}
          </button>
        </form>
      </div>
    </div>
  );
};
