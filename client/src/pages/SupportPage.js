import React from 'react'
import s from './support.module.css'
import cn from 'classnames'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const SupportPage = () => {
    return (
        <div className={s.static}>
            <div className={s.inner}>
                <h1>Техническая поддержка</h1>
                <div className={s.supportWrapper}>
                    <div className={s.supportL}>
                        <div className={s.supportTime}>
                            Оператор онлайн: <b>24/7</b>, перерыв: <b>00:00-09:00 МСК</b>
                        </div>
                        <ul className={s.supportInfo}>
                            <li>Перед обращением в поддержку, ознакомьтесь с разделом <a href="/ru/pages/help">помощь</a>.</li>
                            <li>Выплаты осуществляются в рабочее время операторов</li>
                            <li>Ответы на ваши обращения находятся в <a href="/ru/account/">личном кабинете</a></li>
                        </ul>
                        <div className={s.supportsocTitle}>Вы также можете с нами связаться через:</div>
                        <div className={s.supportSoc}>
                            <a href="https://t.me/avanchenger" target="_blank" rel="noreferrer" className={s.eas}>
                                <b><FaTelegramPlane size={25} color='#0facf3'/></b>
                                avanchange
                            </a>
                            <a href="https://www.instagram.com/avanchange/" target="_blank" rel="noreferrer" className={s.eas}>
                                <b><FaInstagram size={25} color='#bc2a8d'/></b>
                                avanchange
                            </a>
                        </div>
                    </div>
                    <div className={s.supportR}>
                        <form
                            name='support-form'
                            className={s.supportForm}
                        >
                            <div className={s.line}>
                                <input type='text' className={s.inp} name='name' placeholder='Как вас зовут?'/>
                            </div>
                            <div className={s.line}>
                                <input type='text' className={s.inp} name='email' placeholder='Ваш E-mail'/>
                            </div>
                            <div className={s.line}>
                                <textarea className={s.textarea} name="message" placeholder="Чем можем помочь?"></textarea>
                            </div>
                            <div className={cn(s.line, s.lineButton)}>
                                
                                <button className={cn(s.btn, s.black)}>
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default SupportPage;