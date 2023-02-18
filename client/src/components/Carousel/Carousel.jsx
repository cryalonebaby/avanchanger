import React, { useEffect, useRef } from 'react';
import s from './style.module.css';
import cn from 'classnames';
import CarouselElement from './CarouselElement';

const payments = [
	{
		src: 'https://avanchange.com/uploads/images/payment/sberbank.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/alfabank.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/mastercard.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/visa.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/avcash.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/payeer.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/perfectmoney.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/ethereum.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/bitcoin.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/xrp.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/binance-coin.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/tether.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/litecoin.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/stellar.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/dash.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/doge.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/tron.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/qiwi.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/tinkoff.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/sberbank.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/alfabank.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/mastercard.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/visa.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/avcash.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/payeer.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/perfectmoney.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/ethereum.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/bitcoin.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/xrp.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/binance-coin.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/tether.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/litecoin.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/stellar.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/dash.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/doge.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/tron.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/qiwi.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/tinkoff.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/sberbank.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/alfabank.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/mastercard.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/visa.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/avcash.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/payeer.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/perfectmoney.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/ethereum.svg?v=10',
		alt: 'Sberbank',
	},
	{
		src: 'https://avanchange.com/uploads/images/payment/bitcoin.svg?v=10',
		alt: 'Sberbank',
	},
];

const Carousel = () => {
	let ref = useRef();

	useEffect(() => {
		const el = ref.current;
		if (el) {
			const onWheel = (e) => {
				e.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + e.deltaY * 4,
					behavior: 'smooth',
				});
			};

			el.addEventListener('wheel', onWheel);

			return () => el.removeEventListener('wheel', onWheel);
		}
	}, []);

	return (
		<div className={s.paymentMethods}>
			<div className={s.inner}>
				<ul className={cn(s.logoSlider, s.slickInitialized, s.slickSlider)}>
					<div className={cn(s.slickList, s.draggable)} ref={ref}>
						<div className={s.slickTrack}>
							{payments.map((i) => (
								<CarouselElement src={i.src} alt={i.alt} />
							))}
						</div>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Carousel;
