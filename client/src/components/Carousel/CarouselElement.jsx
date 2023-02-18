import React from 'react';
import s from './style.module.css';
import cn from 'classnames';

const CarouselElement = ({ src, alt }) => {
	return (
		<li
			className={cn(s.m, s.slickSlide, s.slickCloned)}
			style={{ width: '211px' }}
		>
			<img src={src} alt={alt} />
		</li>
	);
};

export default CarouselElement;
