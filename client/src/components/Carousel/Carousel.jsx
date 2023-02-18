import React from 'react';
import s from './style.module.css';
import cn from 'classnames';
import CarouselElement from './CarouselElement';

const Carousel = () => {
	return (
		<div className={s.paymentMethods}>
			<div className={s.inner}>
				<ul className={cn(s.logoSlider, s.slickInitialized, s.slickSlider)}>
					<div className={cn(s.slickList, s.draggable)}>
						<div className={s.slickTrack}>
							<CarouselElement
								src="https://avanchange.com/uploads/images/payment/sberbank.svg?v=10"
								alt="Sberbank"
							/>
							<CarouselElement
								src="https://avanchange.com/uploads/images/payment/sberbank.svg?v=10"
								alt="Sberbank"
							/>
							<CarouselElement
								src="https://avanchange.com/uploads/images/payment/sberbank.svg?v=10"
								alt="Sberbank"
							/>
							<CarouselElement
								src="https://avanchange.com/uploads/images/payment/sberbank.svg?v=10"
								alt="Sberbank"
							/>
							<CarouselElement
								src="https://avanchange.com/uploads/images/payment/sberbank.svg?v=10"
								alt="Sberbank"
							/>
							<CarouselElement
								src="https://avanchange.com/uploads/images/payment/sberbank.svg?v=10"
								alt="Sberbank"
							/>
							<CarouselElement
								src="https://avanchange.com/uploads/images/payment/sberbank.svg?v=10"
								alt="Sberbank"
							/>
							<CarouselElement
								src="https://avanchange.com/uploads/images/payment/sberbank.svg?v=10"
								alt="Sberbank"
							/>
							<CarouselElement
								src="https://avanchange.com/uploads/images/payment/sberbank.svg?v=10"
								alt="Sberbank"
							/>
						</div>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Carousel;
