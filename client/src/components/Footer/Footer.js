import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
import {Link} from 'react-router-dom'
import findImg from '../../utils/img'
import {ReactComponent as LogoGray} from '../../img/logo.svg'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
    const {Best, Summo, Kurs, All} = findImg()
    return (
        <>
        <div className={s.footer}>
            <div className={s.inner}>
                <div className={cn(s.row, s.row1)}>
                    <div className={s.logo}>
                        <Link to={'/ru/'}>     
                            <LogoGray className={s.logoGray}/>
                        </Link>
                    </div>
                    <div className={s.copyright}>
                    <p>Удобный онлайн обменник валют AvanChange. Обменяйте Bitcoin, Ethereum, Monero, TrueUSD и другие криптовалюты, всего в пару кликов. Также принимаем электронные валюты и банковские карты.</p>                   
                    © 2018-2022 AvanChange
                    </div>
                </div>
                <div className={cn(s.row, s.row2)}>
                    <div className={s.title}>
                        Основное
                    </div>
                    <ul>
                        <li>
                            <Link to={'/ru/'}>Обмен Криптовалют</Link>
                        </li>
                        <li>
                            <Link to={'/ru/about'}>О сервисе</Link>
                        </li>
                        <li>
                            <Link to={'/ru/reviews'}>Отзывы</Link>
                        </li>
                        <li>
                            <Link to={'/ru/pages/crypto-helper'}>Крипто-помощник</Link>
                        </li>
                        <li>
                            <Link to={'/ru/support'}>Техническая поддержка</Link>
                        </li>
                    </ul>
                </div>
                <div className={cn(s.row, s.row3)}>
                    <div className={s.title}>
                        Полезное
                    </div>
                    <ul>
                        <li>
                            <Link to={'/ru/blog'}>Блог</Link>
                        </li>
                        <li>
                            <Link to={'/ru/booster'}>Скидки</Link>
                        </li>
                        <li>
                            <Link to={'/ru/partners'}>Регулярный розыгрыш</Link>
                        </li>
                        <li>
                            <a href="https://api.avanchange.com/" target="_blank" rel='noreferrer'>Документация API</a>
                        </li>
                    </ul>
                </div>
                <div className={s.row}>
                    <div className={s.title}>
                        Документация
                    </div>
                    <ul>
                        <li>
                            <Link to={'/ru/pages/help'}>Помощь</Link>
                        </li>
                        <li>
                            <Link to={'/ru/pages/terms'}>Правила сервиса</Link>
                        </li>
                    </ul>

                    <div className={cn(s.title, s.titleSocial)}>
                        Мы в соц сетях
                    </div>
                    <ul className={s.social}>
                        <li>
                            <a href="https://t.me/avanchange_bot" rel="noreferrer" target="_blank" className={s.eas}>
                                <FaTelegramPlane color='#0facf3' size={15}/>
                                <b> Telegram (Бот)</b>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/avanchange" rel="noreferrer" target="_blank" className={s.eas}>
                                <FaTelegramPlane color='#0facf3' size={15}/>
                                <b> Telegram (Канал)</b>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/avanchange/" rel='noreferrer' target="_blank" className={s.eas}>
                                <FaInstagram size={15} color='#bc2a8d'/>
                                <b> Instagram</b>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.agregators}>
                <div className={s.inner}>
                    <a href="https://www.bestchange.ru/avanchange-exchanger.html" target="_blank" rel="noreferrer" title="Сервис поиска выгодного курса обмена">
                        <img src={Best} alt="BestChange"/>
                    </a>
                    <a href="https://exchangesumo.com/exchanger/955/Avanchange/" target="_blank" rel="noreferrer" title="Сервис поиска выгодного курса обмена">
                        <img src={Summo} alt="BestChange"/>
                    </a>
                    <a href="https://kurs.expert/ru/obmennik/avanchange-com/feedbacks.html" target="_blank" rel="noreferrer" title="Сервис поиска выгодного курса обмена">
                        <img src={Kurs} alt="BestChange"/>
                    </a>
                    <Link to={'/ru/reviews'} target={"_blank"} rel={"noreferrer"}>
                        <img src={All} alt="BestChange"/>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;