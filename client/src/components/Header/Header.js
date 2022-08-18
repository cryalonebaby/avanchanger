import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import ModalLogin from '../../Modals/ModalLogin'
import { AuthContext } from '../../context/AuthContext';
import ModalRegister from '../../Modals/ModalRegister';
import {FaTelegramPlane} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import {ImSwitch} from 'react-icons/im'
import Navbar from '../Navbar/Navbar';

const Header = ({isAuth}) => {
    const auth = useContext(AuthContext)
    const logOut = () => {
        auth.logout()
    }
    const [loginModalActive, setLoginModalActive] = useState(false)
    const [registerModalActive, setRegisterModalActive] = useState(false)

    const switchModals = () => {
        setRegisterModalActive(prev => !prev)
        setLoginModalActive(prev => !prev)
    }
    return (
        <div className={s.wrapperHeader}>
            <div className={s.headerTop}>
                <div className={s.inner}>
                    <div className={s.left}>
                        <Link to={'/ru/'} target={'_blank'} rel={'noreferrer'} className={cn(s.eas, s.lang)}>RU</Link>
                        <a href="https://t.me/avanchange_bot" rel="noreferrer" target="_blank" className={cn(s.eas, s.headerTelegram)}>
                            <FaTelegramPlane color='#0facf3' size={12}/>
                            <span> Telegram Бот v1.3</span>
                        </a>
                        <Link to={'/support'} target={'_blank'} rel={'noreferrer'} className={cn(s.eas, s.headerEmail)}>
                            <FiMail size={12} color='#3dd94b'/>
                            <span> info@avanchange.com</span>
                        </Link>
                        <span className={s.worktime}>
                            <span>
                                Сервис работает <b>круглосуточно</b>
                            </span>
                        </span>
                    </div>
                    <div className={s.right}>
                        <span className={cn(s.flaticonUser, s.ico4)}></span>
                        {
                            isAuth ?
                            <div className={s.signWrapper}>
                                <FiUser size={14} color='#ff7d00' fill='#ff7d00'/>
                                <Link to={'/account'} className={cn(s.eas, s.url)}> Мой аккаунт </Link>
                                <Link to={'/'} className={s.logout} onClick={logOut}>
                                    <ImSwitch size={12} color='#ff7d00'/>
                                </Link>
                            </div> :
                            <div className={s.signWrapper}>
                                <FiUser size={14} color='#ff7d00' fill='#ff7d00'/>
                                <span className={s.eas} onClick={() => setLoginModalActive(true)}> Вход </span>
                                /
                                <span className={s.eas} onClick={() => setRegisterModalActive(true)}> Регистрация</span>
                            </div>

                        }
                    </div>
                </div>
            </div>
            <Navbar/>
            <ModalLogin 
                loginActive={loginModalActive}
                setLoginActive={setLoginModalActive}
                switchModals={switchModals}
            />
            <ModalRegister
                registerActive={registerModalActive}
                setRegisterActive={setRegisterModalActive}
                switchModals={switchModals}
            />
        </div>
    );
};

export default Header;