import React from 'react'
import { useState } from 'react' 
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import s from './account.module.css'
import cn from 'classnames'
import Partners from '../components/AccountPartners/Partners'


const AccountPage = () => {
    const [selected, setSelected] = useState({
        history: true,
        balance: false,
        api: false,
        help: false
    })

    const handleSelected = (name) => {
        setSelected({
            history: false,
            balance: false,
            api: false,
            help: false
        })
        setSelected((prev) => ({
            ...prev,
            [name]: true
        }))
    }

    // useEffect(() => {
    //     const getUsers = async () => {
    //         try {
    //             const res = await axios.get(`/api/auth/${auth.userId}`)
    //             setUser(res.data[0])
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     getUsers()
    // }, [])
    const changeMessageApi = () => {
        toast.error('Ошибка! Попробуйте позже')
    }
    
    return (
        <div className={s.static}>
            <div className={s.inner}>
                <h1>Мой аккаунт</h1>
                <div className={s.infobox}>
                    <h3>Вы не подтвердили ваш E-mail</h3>
                    Пожалуйста, перейдите по ссылке, которую мы отправили на ваш адрес электронной почты.
                    <br/>
                    <a href="/ru/account/?email=verify&amp;action=code"><b>Запросить E-mail еще раз</b></a>
                </div>
                <Partners/>
                <div className={s.accountTabs}>
                    <button className={selected.history ? s.active : null} onClick={() => handleSelected('history')}>
                        <span></span>
                        <b>История</b>
                    </button>
                    <button className={selected.balance ? s.active : null} onClick={() => handleSelected('balance')}>
                        <span></span>
                        <b>Мой счет</b>
                    </button>
                    <button className={selected.api ? s.active : null} onClick={() => handleSelected('api')}>
                        <span></span>
                        <b>API</b>
                    </button>
                    <button className={selected.help ? s.active : null} onClick={() => handleSelected('help')}>
                        <span></span>
                        <b>Поддержка</b>
                    </button>
                </div>
                {/*Tab-1*/}
                <div className={s.accountTab} style={{display: selected.history ? 'block' : 'none'}}>
                    <div className={s.accountEmpty}>История транзакций пуста</div>
                </div>
                {/*Tab-2*/}
                <div className={cn(s.accountTab, s.accountBalance)} style={{display: selected.balance ? 'block' : 'none'}}>
                    <div className={s.row}>
                        <div className={s.t}>Баланс acBTC</div>
                        0
                        <div className={s.help}>
                            <Link to={'/ru/pages/help'} target={'_blank'} rel={'noreferrer'}>Как пополнить</Link>
                        </div>
                    </div>
                </div>
                {/*Tab-3*/}
                <div className={cn(s.accountTab, s.accountApi)} style={{display: selected.api ? 'block' : 'none'}}>
                    <h3>Telegram Bot</h3>
                    <div className={s.telegramBot}>
                        <div className={s.desc}>
                            Для авторизации в 
                            <a href="https://t.me/avanchange_bot" target="_blank" rel='noreferrer'> нашем Telegram боте </a>
                            привяжите ваш Telegram аккаунт к аккаунту AvanChange.
                        </div>
                    </div>
                    <h3>Настройки API</h3>
                    <div className={s.lines}>
                        <div className={s.line}>
                            <div className={s.l}>Merchant ID</div>
                            <div className={s.r}>AC143367</div>
                        </div>
                        <br/>
                        <div className={s.line}>
                            <div className={s.l}>API Key</div>
                            <div className={s.r}>xiOZQDzu</div>
                        </div>
                        <br/>
                        <div className={s.line}>
                            <div className={s.l}>API Secret</div>
                            <div className={s.r}>
                                <a href='/'>Установить</a>
                            </div>
                        </div>
                        <br/>
                        <div className={s.line}>
                            <div className={s.l}>Статус API</div>
                            <div className={s.r} >
                                <input type={'checkbox'} className={s.apiStatus} id={'api-status'}/>
                                <label htmlFor={'api-status'} className={s.apiStatusLabel} onClick={changeMessageApi}></label>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Tab-4*/}
                <div className={s.accountTab} style={{display: selected.help ? 'block' : 'none'}}>
                    <div className={s.accountEmpty}>У вас пока нету обращений в техническую поддержку</div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;