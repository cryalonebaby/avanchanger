import React from 'react'
import s from '../../pages/account.module.css'
import cn from 'classnames'
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom'

const Partners = () => {
    const inp = 'https://avanchanger.com/?w=2551'

    const copyText = (inp) => {
        navigator.clipboard.writeText(inp)
        toast.success('Скопировано!')
    }
  return (
    <div className={s.accountPartners}>
        <div className={s.accountL}>
            <div className={s.c}>
                <div className={s.title}>Программа лояльности</div>
                <div className={s.desc}>С каждого обмена ты получаешь баллы, которые превращаются в скидку</div>
                <div className={s.buttons}>
                    <Link to={'/ru/partners/'} className={cn(s.btn, s.whiteGhost)}>подробнее</Link>
                    <button className={cn(s.btn, s.white)}>История</button>
                </div>
            </div>
            <div className={s.foo}>
                Баллов: <b>0</b>/ Ваша скидка: <b>3%</b>
            </div>
        </div> 
        <div className={s.accountR} >
            <div className={s.c}>
                <div className={s.title}>Программа лояльности</div>
                <div className={s.desc}>Получи 25% с нашей прибыли от каждого приведенного человека. </div>
                <div className={s.field} onClick={() => copyText(inp)}>
                    <input type={'text'} className={s.inp} value={inp} readOnly/>
                    <span className={s.copy}>Copy</span>
                </div>
            </div>
            <div className={s.foo}>                        
                Процент рефералки: <b>25%</b>/ Баланс: <b>0 USD</b>
            </div>
        </div> 
    </div>
  )
}

export default Partners