import React from 'react'
import s from './style.module.css'

const BoosterTask = () => {
  return (
    <div className={s.row}>
        <h5><b>Вход на сайт</b><span>+50 баллов</span></h5>
        <div className={s.desc}>
            Создайте аккаунт или авторизуйтесь в уже существующий. Далее нажмите на кнопку «Забрать»
        </div>
        <div className={s.buttons}>
            <div className={s.c}>
                <a className={s.btn} href='/'>
                    Забрать баллы
                </a>
                <a className={s.link} href='/'>
                    Создать аккаунт
                </a>
            </div>

        </div>
    </div>
  )
}

export default BoosterTask