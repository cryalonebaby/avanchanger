import React from 'react'
import s from './style.module.css'

const Statistic = () => {
  return (
    <div className={s.statistic}>
        <div className={s.inner}>
            <div className={s.row}>
                <span className={s.number}>37 783</span>+
                <div className={s.sub}>обменов</div>
            </div>
            <div className={s.row}>
                <span className={s.number}>4 751</span>
                <div className={s.sub}>направлений</div>
            </div>
            <div className={s.row}>
                <span className={s.number}>31 838</span>
                <div className={s.sub}>пользователей</div>
            </div>
            <div className={s.row}>
                <span className={s.number}>3 600</span>
                <div className={s.sub}>отзывов</div>
            </div>
        </div>
    </div>
  )
}

export default Statistic