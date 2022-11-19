import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<div className='py-5 text-center'>
			{/* <!-- Footer --> */}
			<p className='text-sm mt-2 opacity-50'>
				&copy; {new Date().getFullYear()} Sidney Roberto. {t('footer')}.
			</p>
		</div>
	);
};
