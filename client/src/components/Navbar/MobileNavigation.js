import React from 'react'
import { useLocation } from 'react-router-dom'
import s from './style.module.css'
import { VscClose } from 'react-icons/vsc'
import { GoShield } from 'react-icons/go'
import { MdPeople } from 'react-icons/md'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { ReactComponent as Cards } from '../../icons/credit-cards-svgrepo-com.svg'
import { ReactComponent as Documents } from '../../icons/writing-letter-svgrepo-com.svg'
// import { ReactComponent as Info } from '../../icons/info-svgrepo-com.svg'
// import { ReactComponent as Question } from '../../icons/question-filled-svgrepo-com.svg'
// import { ReactComponent as Heart } from '../../icons/heart-svgrepo-com.svg'
import { ReactComponent as Rocket } from '../../icons/rocket-svgrepo-com.svg'
import { ReactComponent as Customer } from '../../icons/customer-service-headphones-svgrepo-com.svg'

import { Link } from 'react-router-dom'

const MobileNavigation = ({ open, toggleNav }) => {
    const location = useLocation()

    const closeIcon = <VscClose
        className={s.Hamburger}
        size='18px'
        color='white'
    />

    const ShieldIcon = ({ isActive }) => {
        const color = isActive ? '#FEFFFE' : '#6A6E85'
        return <GoShield
            width='16px'
            height='16px'
            fill={color}
            style={{ marginRight: '10px' }}
        />
    }

    const CardsIcon = ({ isActive }) => {
        const color = isActive ? '#FEFFFE' : '#6A6E85'
        return <Cards
            width='16px'
            height='16px'
            fill={color}
            style={{ marginRight: '10px' }}
        />
    }

    const RocketIcon = ({ isActive }) => {
        const color = isActive ? '#FEFFFE' : '#6A6E85'
        return <Rocket
            width='16px'
            height='16px'
            fill={color}
            style={{ marginRight: '10px' }}
        />
    }

    const DocumentIcon = ({ isActive }) => {
        const color = isActive ? '#FEFFFE' : '#6A6E85'
        return <Documents
            width='16px'
            height='16px'
            fill={color}
            style={{ marginRight: '10px' }}
        />
    }

    const InfoIcon = ({ isActive }) => {
        const color = isActive ? '#FEFFFE' : '#6A6E85'
        return <AiOutlineInfoCircle
            width='20px'
            height='20px'
            fill={color}
            style={{ marginRight: '10px' }}
        />
    }

    const QuestionIcon = ({ isActive }) => {
        const color = isActive ? '#FEFFFE' : '#6A6E85'
        return <BsFillQuestionCircleFill
            width='16px'
            height='16px'
            fill={color}
            style={{ marginRight: '10px' }}
        />
    }

    const HeartIcon = ({ isActive }) => {
        const color = isActive ? '#FEFFFE' : '#6A6E85'
        return <AiFillHeart
            width='16px'
            height='16px'
            fill={color}
            style={{ marginRight: '10px' }}
        />
    }

    const PeopleIcon = ({ isActive }) => {
        const color = isActive ? '#FEFFFE' : '#6A6E85'
        return <MdPeople
            width='16px'
            height='16px'
            fill={color}
            style={{ marginRight: '10px' }}
        />
    }

    const CustomerIcon = ({ isActive }) => {
        const color = isActive ? '#FEFFFE' : '#6A6E85'
        return <Customer
            width='16px'
            height='16px'
            fill={color}
            style={{ marginRight: '10px' }}
        />
    }
    return (
        open && <nav className={s.mobNav}>
            <div className={s.navButtonClose} onClick={toggleNav}>
                <span>{closeIcon}</span>
                ЗАКРЫТЬ
            </div>
            <ul onClick={toggleNav}>
                <li>
                    <Link to={'/ru/'} className={location.pathname === '/ru/' || location.pathname === '/' ? s.active : null}>
                        <CardsIcon
                            isActive={location.pathname === '/ru/' || location.pathname === '/'}
                        />
                        Обмен
                    </Link>
                </li>
                <li>
                    <Link to={'/ru/booster'} className={location.pathname === '/ru/booster' || location.pathname === '/booster' ? s.active : null}>
                        <RocketIcon
                            isActive={location.pathname === '/ru/booster' || location.pathname === '/booster'}
                        />
                        Скидки
                    </Link>
                </li>
                <li>
                    <Link to={'/ru/blog'} className={location.pathname === '/ru/blog' || location.pathname === '/blog' ? s.active : null}>
                        <DocumentIcon
                            isActive={location.pathname === '/ru/blog' || location.pathname === '/blog'}
                        />
                        Блог
                    </Link>
                </li>
                <li>
                    <Link to={'/ru/about'} className={location.pathname === '/ru/about' || location.pathname === '/about' ? s.active : null}>
                        <InfoIcon
                            isActive={location.pathname === '/ru/about' || location.pathname === '/about'}
                        />
                        О сервисе
                    </Link>
                </li>
                <li>
                    <Link to={'/ru/pages/help'} className={location.pathname === '/ru/pages/help' || location.pathname === '/pages/help' ? s.active : null}>
                        <QuestionIcon
                            isActive={location.pathname === '/ru/pages/help' || location.pathname === '/pages/help'}
                        />
                        Помощь
                    </Link>
                </li>
                <li>
                    <Link to={'/ru/reviews'} className={location.pathname === '/ru/reviews' || location.pathname === '/reviews' ? s.active : null}>
                        <HeartIcon
                            isActive={location.pathname === '/ru/reviews' || location.pathname === '/reviews'}
                        />
                        Отзывы
                    </Link>
                </li>
                <li>
                    <Link to={'/ru/partners'} className={location.pathname === '/ru/partners' || location.pathname === '/partners' ? s.active : null}>
                        <PeopleIcon
                            isActive={location.pathname === '/ru/partners' || location.pathname === '/partners'}
                        />
                        Партнерам
                    </Link>
                </li>
                <li>
                    <Link to={'/ru/pages/crypto-helper'} className={location.pathname === '/ru/pages/crypto-helper' || location.pathname === '/pages/crypto-helper' ? s.active : null}>
                        <ShieldIcon
                            isActive={location.pathname === '/ru/pages/crypto-helper' || location.pathname === '/pages/crypto-helper'}
                        />
                        Крипто-помощник
                    </Link>
                </li>
                <li className={s.last}>
                    <Link to={'/ru/support'} className={location.pathname === '/ru/support' || location.pathname === '/support' ? s.active : null}>
                        <CustomerIcon
                            isActive={location.pathname === '/ru/support' || location.pathname === '/support'}
                        />
                        Тех.поддержка
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavigation