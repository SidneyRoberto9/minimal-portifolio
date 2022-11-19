import React from 'react';

export const Footer = () => {
	return (
		<div className='py-5 text-center'>
			{/* <!-- Footer --> */}
			<p className='text-sm mt-2 opacity-50'>
				&copy; {new Date().getFullYear()} Sidney Roberto. All rights reserved.
			</p>
		</div>
	);
};
