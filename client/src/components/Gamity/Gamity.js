import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
import Prize1 from '../../img/prize1.png'
import Prize2 from '../../img/prize2.png'

const Gamity = () => {
  return (
    <div className={s.gamityMain}>
        <div className={cn(s.fifty, s.iphone)}>
            <div className={s.in}>
                <h3>
                    Розыгрыш <span>Tether USDT!</span> 🤑 <span className={s.new}>new</span>
                </h3>
                <div className={s.image}>
                    <a href='https://avanchange.com/ru/contest/4/' target={'_blank'} rel='noreferrer' className={s.eas}>
                        <img src={Prize1} alt ='Party'></img>
                    </a>
                </div>
                <div className={s.desc}>
                    Призовой фонд <span>580 USDT</span> TRC20 на блюдечке!
                </div>
                <div className={s.button}>
                    <a href='https://avanchange.com/ru/contest/4/' target={'_blank'} rel='noreferrer'>Хочу выиграть!</a>
                </div>
            </div>   
        </div>
        <div className={s.fifty}>
            <div className={s.in}>
                <div className={s.image}>
                    <a href='https://avanchange.com/ru/weekly/' target={'_blank'} rel='noreferrer' className={s.eas}>
                        <img src={Prize2} alt ='Party'></img>
                    </a>
                </div>
                <h3>
                    Розыгрыш <span>6 500 руб</span>
                </h3>
                <div className={s.desc}>
                    Регулярный розыгрыш, с автоматическим ростом фонда, каждый час!
                </div>
                <div className={s.button}>
                    <a href='https://avanchange.com/ru/weekly/' target={'_blank'} rel='noreferrer'>Хочу выиграть!</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gamity