import React from 'react'
import s from './style.module.css'
import {FaTelegramPlane} from 'react-icons/fa'

const Telegram = () => {
  return (
    <div className={s.anonceTelegram}>
        <FaTelegramPlane color='white' size={32} className={s.icon}/>
        <h5>Попробуй нашего Telegram бота!</h5>
        Встречайте нашего забавного Telegram бота-менялу из лихих 90-х. Бот Валера, поможет вам еще быстрее совершать обмены. 
        <a href="https://t.me/avanchange_bot" className={s.btn} target="_blank" rel='noreferrer'>
            <FaTelegramPlane color='#0facf3' size={20} className={s.btnIcon}/>
            Попробовать
        </a>
    </div>
  )
}

export default Telegram