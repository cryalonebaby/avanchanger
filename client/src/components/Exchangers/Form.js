import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import {useMessage} from '../../hooks/message.hook'

const reserves = {
    'btc': 21.35,
    'eth': 615.81,
    'ltc': 4001.29,
    'xlm': 10221.35,
    'xtz': 11050.18,
    'zec': 5665.62,
    'trx': 242515.16,
    'xmr': 803.24,
    'doge': 187308.55,
    'dash': 897.58,
    'erc20': 491746.6,
    'trc20': 554035.4,
}

const examples = {
    'btc': '1CNixWkhP1Q5SE4sEEp6ymgPk',
    'eth': '0x16E60a51AAeFFEbEB7b69E2',
    'ltc': 'Lbp98gPwE2LiCMhemnnuiZuMY',
    'xlm': 'GAI3GJ2Q3B35AOZJ36C4ANE3H',
    'xtz': 'tz1PEnZxSoAnEWJLUwASEZKnG',
    'zec': 't1YN48pMwyG4aszU411jKdY7M',
    'trx': 'TEaC4TeFYLWYTsVaeMBG4GEz2',
    'xmr': '46BeWrHpwXmHDpDEUmZBWZfoQ',
    'doge': 'DES1oHaDD15kt9qcMu42gXLHp',
    'dash': 'Xwf5i6RTSBGh1zEEMhWEB9KMK',
    'erc20': '0x16E60a51AAeFFEbEB7b69E2',
    'trc20': 'TFR9fP1VDmGGf7pT3f2Ag6YMW',
}

const Form = ({giveItem, takeItem, form, messages, changeHandler, handleSubmit, handleInputChange, handleOutputChange}) => {
    const emailValidation = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/
    const reserve = Object.keys(reserves).find(item => takeItem?.symbol.toLowerCase() === item)
    const example = Object.keys(examples).find(item => takeItem?.symbol.toLowerCase() === item)
    const message = useMessage()

    const errorsHandler = () => {
        const amountInputEmpty = form.give.length === 0 || form.take.length === 0
        const emailInputWrong = form.email.length === 0 || !emailValidation.test(String(form.email).toLowerCase())
        const userAddressWrong = form.address.length < 25
        const reserveOut = form.take >= reserves[reserve]
        
        if(amountInputEmpty) {
            return 'inputs'
        }
        if(emailInputWrong) {
            return 'email'
        }
        if(userAddressWrong) {
            return 'address'
        }
        if(reserveOut) {
            return 'reserve'
        }
        return null
    }

    const toContin = e => {
        e.preventDefault()
        const handlerResult = errorsHandler()
        if(handlerResult === null) {
            handleSubmit(true)
            // ConfE()
        } else {
            message(messages[handlerResult]);
        }
    }

    const invalidChars = [
        '-',
        '+',
        'e'
    ]

    const handleSymb = (event) => {
        if(invalidChars.includes(event.key)) {
            event.preventDefault()
        }
    }

    const handleSymbInput = (e) => {
        e.target.value = e.target.value.replace(/[e\+\-]/gi, "")
    }

    return (
        <form className={s.formExchange}>
            <div className={s.lines}>
                <div className={s.line}>
                    <div className={s.lineInput}>
                        <input type='number' id='giveCoins' name='give' onChange={handleInputChange} onKeyDown={(e) => handleSymb(e)} onInput={(e) => handleSymbInput(e)}/>
                        <label htmlFor='giveCoins'>Отдаете <span>{giveItem?.symbol.toUpperCase()}</span></label>
                    </div>
                    <div className={s.i}>
                        {/* Min: <span>0.3</span> Max: <span>6.5</span>
                        <br/> */}
                        С учетом скидки партнера: 
                        <span> 3</span>%
                    </div>
                </div>
                <div className={s.line}>
                    <div className={s.lineInput}>
                        <input type='number' id='takeCoins' name='take' onChange={handleOutputChange} onKeyDown={(e) => handleSymb(e)} onInput={(e) => handleSymbInput(e)}/>
                        <label htmlFor='takeCoins'>Получаете <span>{takeItem?.symbol.toUpperCase()}</span></label>
                    </div>
                    <div className={s.i}>
                        Резерв: <span>{reserves[reserve]}</span>
                    </div>
                </div>
                <div className={cn(s.line, s.lineFull)}>
                    <div className={s.lineInput}>
                        <input type='text' id='addressCoins' name='address' onChange={changeHandler}/>
                        <label htmlFor='addressCoins'>
                            <i>Адрес </i>
                            <b>{takeItem?.name}</b>
                        </label>
                    </div>
                    <div className={s.i}>
                        Например
                        <span> {examples[example]}...</span>
                    </div>
                </div>
                <div className={cn(s.line, s.lineEmail)}>
                    <div className={s.lineInput}>
                        <input type='text' id='emailCoins' name='email' onChange={changeHandler}/>
                        <label htmlFor='emailCoins'>Электронная почта</label>
                    </div>
                    <div className={s.i}>Например john.doe@gmail.com</div>
                </div>
                <div className={cn(s.line, s.lineContacts)}>
                    <div className={s.lineInput}>
                        <input type='text' id='telegramCoins' name='telegram' onChange={changeHandler}/>
                        <label htmlFor='telegramCoins'>Ваш Telegram</label>
                    </div>
                    <div className={s.i}>Например @selld2 (необязательно)</div>
                </div>
            </div>
            <div className={s.lineBreak}></div>
            <div className={s.exchangeRightF}>
                <div className={s.terms}>
                    Нажимая кнопку <b> "Обменять" </b> вы подтверждаете свое согласие с 
                    <Link to={'/ru/pages/terms'} target={'_blank'} rel={'noreferrer'}> Правилами предоставления услуг</Link>
                </div>
                <div className={s.button}>
                    <button className={cn(s.btn, s.green)} onClick={toContin} type='button'>
                        Обменять
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form