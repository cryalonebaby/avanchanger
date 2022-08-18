import React from 'react'
import s from './style.module.css'
import Bestchange from '../../img/bestchange.png'

const Bestchanger = () => {
  return (
    <div className={s.bestchange}>
        <h5>Понравился обменник</h5>
        <div className={s.desc}>
            Оставь отзыв на&nbsp;
            <a href="https://www.bestchange.ru/avanchange-exchanger.html" target="_blank" rel="noreferrer">BestChange</a>&nbsp;
            и получи <b>5 USDT TRC20</b>
        </div>
        <div className={s.logo}>
            <a href="https://www.bestchange.ru/avanchange-exchanger.html" target="_blank" rel="noreferrer">
                <img src={Bestchange} alt="BestChange"/>
            </a>
        </div>
        <div className={s.button}>
            <a href='https://www.bestchange.ru/avanchange-exchanger.html' target="_blank" rel="noreferrer" className={s.btn}>
                Как это работает
            </a>
        </div>
    </div>
  )
}

export default Bestchanger