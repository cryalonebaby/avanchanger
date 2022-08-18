import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'

const AskUs = () => {
  return (
    <div className={s.faqQuestion}>
        <div className={s.title}>Нужна помощь</div>
        <Link to={'/ru/support'} className={s.btn}>
            Напишите нам
        </Link>
    </div>
  )
}

export default AskUs