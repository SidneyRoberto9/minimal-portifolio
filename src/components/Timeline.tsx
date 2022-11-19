import React from 'react';

import { timelineData } from '../data/timeline.data';
import { TimelineItem } from './TimelineItem';

export const Timeline = () => {
	return (
		<div className='flex flex-col md:flex-row justify-center my-20'>
			<div className='w-full md:w-7/12'>
				{timelineData.map((item) => (
					<TimelineItem
						year={item.year}
						title={item.title}
						details={item.details}
						duration={item.duration}
						key={item.title}
					/>
				))}
			</div>
		</div>
	);
};
