import React, { useState } from 'react';
import s from './style.module.css';
import cn from 'classnames';

const Quiz = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isSelected, setIsSelected] = useState(false);

	const handleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	const handleSelect = () => {
		setIsSelected((prev) => !prev);
	};
	return (
		<div className={cn({ [s.polls]: true, [s.closed]: !isOpen })}>
			<div
				className={cn({ [s.button]: true, [s.none]: isOpen })}
				onClick={handleOpen}
			>
				<img
					src="https://avanchange.com/templates/frontend/default/images/chat.svg"
					alt="Опрос"
				/>
				Опрос
			</div>
			<div className={cn({ [s.container]: true, [s.none]: !isOpen })}>
				<div className={s.loader}></div>
				<div className={s.close} onClick={handleOpen}>
					&#10006;
				</div>
				<div className={s.t}>Ваш прогноз максимума BTC в 2023 году</div>
				<div className={s.options}>
					<div
						className={cn({
							[s.option]: true,
							[s.disabled]: isSelected,
							[s.optionPadding]: !isSelected,
						})}
						onClick={handleSelect}
					>
						<span className={cn({ [s.chk]: !isSelected })}>
							<b>&nbsp;</b>
						</span>
						<span className={s.text}>50 000 USD</span>
						<span className={cn({ [s.value]: true, [s.none]: !isSelected })}>
							374
						</span>
						<span
							className={cn({
								[s.progress]: true,
								[s.progress1]: true,
								[s.none]: !isSelected,
							})}
						></span>
					</div>
					<div
						className={cn({
							[s.option]: true,
							[s.disabled]: isSelected,
							[s.optionPadding]: !isSelected,
						})}
						onClick={handleSelect}
					>
						<span className={cn({ [s.chk]: !isSelected })}>
							<b>&nbsp;</b>
						</span>
						<span className={s.text}>76 000 USD</span>
						<span className={cn({ [s.value]: true, [s.none]: !isSelected })}>
							129
						</span>
						<span
							className={cn({
								[s.progress]: true,
								[s.progress2]: true,
								[s.none]: !isSelected,
							})}
						></span>
					</div>
					<div
						className={cn({
							[s.option]: true,
							[s.disabled]: isSelected,
							[s.optionPadding]: !isSelected,
						})}
						onClick={handleSelect}
					>
						<span className={cn({ [s.chk]: !isSelected })}>
							<b>&nbsp;</b>
						</span>
						<span className={s.text}>82 000 USD</span>
						<span className={cn({ [s.value]: true, [s.none]: !isSelected })}>
							101
						</span>
						<span
							className={cn({
								[s.progress]: true,
								[s.progress3]: true,
								[s.none]: !isSelected,
							})}
						></span>
					</div>
					<div
						className={cn({
							[s.option]: true,
							[s.disabled]: isSelected,
							[s.optionPadding]: !isSelected,
						})}
						onClick={handleSelect}
					>
						<span className={cn({ [s.chk]: !isSelected })}>
							<b>&nbsp;</b>
						</span>
						<span className={s.text}>100 000 USD</span>
						<span className={cn({ [s.value]: true, [s.none]: !isSelected })}>
							144
						</span>
						<span
							className={cn({
								[s.progress]: true,
								[s.progress4]: true,
								[s.none]: !isSelected,
							})}
						></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quiz;
