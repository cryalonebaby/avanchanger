import React from 'react'
import { useLocation } from 'react-router-dom'
import s from './style.module.css'
import {VscClose} from 'react-icons/vsc'
import {Link} from 'react-router-dom'

const MobileNavigation = ({open, toggleNav}) => {
    const location = useLocation()

    const closeIcon = <VscClose 
                            className={s.Hamburger} 
                            size='18px' 
                            color='white'
                        />                     
    return (
        open && <nav className={s.mobNav}>
                    <div className={s.navButtonClose} onClick={toggleNav}>
                        <span>{closeIcon}</span>
                        ЗАКРЫТЬ
                    </div>
                    <ul onClick={toggleNav}>
                        <li>
                            <Link to={'/ru/'} className={location.pathname === '/ru/' || location.pathname === '/' ? s.active : null}>Обмен</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/booster'} className={location.pathname === '/ru/booster' || location.pathname === '/booster' ? s.active : null}>Скидки</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/blog'} className={location.pathname === '/ru/blog' || location.pathname === '/blog' ? s.active : null}>Блог</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/about'} className={location.pathname === '/ru/about' || location.pathname === '/about' ? s.active : null}>О сервисе</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/pages/help'} className={location.pathname === '/ru/pages/help' || location.pathname === '/pages/help' ? s.active : null}>Помощь</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/reviews'} className={location.pathname === '/ru/reviews' || location.pathname === '/reviews' ? s.active : null}>Отзывы</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/partners'} className={location.pathname === '/ru/partners' || location.pathname === '/partners' ? s.active : null}>Партнерам</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/pages/crypto-helper'} className={location.pathname === '/ru/pages/crypto-helper' || location.pathname === '/pages/crypto-helper' ? s.active : null}>Крипто-помощник</Link>
                        </li> 
                        <li className={s.last}>
                            <Link  to={'/ru/support'} className={location.pathname === '/ru/support' || location.pathname === '/support' ? s.active : null}>Тех.поддержка</Link>
                        </li> 
                    </ul>
                </nav>
    )
}

export default MobileNavigation