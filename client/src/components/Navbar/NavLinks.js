import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
import { ReactComponent as Customer } from '../../icons/customer-service-headphones-svgrepo-com.svg'

const NavLinks = () => {
    const location = useLocation()

    const CustomerIcon = <Customer
        width='16px'
        height='16px'
        fill={'#FFF'}
        style={{ marginRight: '5px' }}
    />

    return (
        <>
            <ul className={s.ul}>
                <div className={s.common}>
                    <li className={s.li}>
                        <Link to={'/ru/'} className={location.pathname === '/ru/' || location.pathname === '/' ? s.active : null}>Обмен</Link>
                    </li>
                    <li className={cn(s.li, s.toNone)}>
                        <Link to={'/ru/booster'} className={location.pathname === '/ru/booster' || location.pathname === '/booster' ? s.active : null}>Скидки</Link>
                    </li>
                    <li className={cn(s.li, s.toNone)}>
                        <Link to={'/ru/blog'} className={location.pathname === '/ru/blog' || location.pathname === '/blog' ? s.active : null}>Блог</Link>
                    </li>
                    <li className={s.li}>
                        <Link to={'/ru/about'} className={location.pathname === '/ru/about' || location.pathname === '/about' ? s.active : null}>О сервисе</Link>
                    </li>
                    <li className={s.li}>
                        <Link to={'/ru/pages/help'} className={location.pathname === '/ru/pages/help' || location.pathname === '/pages/help' ? s.active : null}>Помощь</Link>
                    </li>
                    <li className={cn(s.li, s.toNone)}>
                        <Link to={'/ru/reviews'} className={location.pathname === '/ru/reviews' || location.pathname === '/reviews' ? s.active : null}>Отзывы</Link>
                    </li>
                    <li className={s.li}>
                        <Link to={'/ru/partners'} className={location.pathname === '/ru/partners' || location.pathname === '/partners' ? s.active : null}>Партнерам</Link>
                    </li>
                    <li className={s.li}>
                        <Link to={'/ru/pages/crypto-helper'} className={location.pathname === '/ru/pages/crypto-helper' || location.pathname === '/pages/crypto-helper' ? s.active : null}>Крипто-помощник</Link>
                    </li>
                </div>

                <li className={cn(s.li, s.last)}>
                    <Link to={'/ru/support'} className={location.pathname === '/ru/support' || location.pathname === '/support' ? cn(s.active, s.customer) : s.customer}>
                        <div>{CustomerIcon}</div>
                        <div>Тех.поддержка</div>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavLinks