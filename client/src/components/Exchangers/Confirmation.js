import React from 'react'
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'
import cn from 'classnames'
import ratioPrice from '../../utils/ratio'
import { AuthContext } from "../../context/AuthContext"

const Confirmation = ({form, giveItem, takeItem, handleSubmit, clearForm, ownerAddress, green, qr}) => {
    //Test
    // console.log('form', form);
    // console.log('giveItem', giveItem);
    // console.log('takeItem', takeItem);
    // console.log('ownerAddress', ownerAddress);
    // console.log('green', green);
    // console.log('qr', qr === null);

    const auth = useContext(AuthContext)

    // const date = new Date(Date.now()).toLocaleString('ru', {
    //     year: 'numeric',
    //     month: 'short',
    //     day: 'numeric',
    //     hour: 'numeric',
    //     minute: 'numeric'
    // })
    // const dateArray = date.split(' ')
    // const times = dateArray[4].split(':')
    // const day = dateArray[0]
    // const month = dateArray[1].slice(0,1).toUpperCase() + dateArray[1].slice(1, 3)
    // const year = dateArray[2]
    // const hour = times[0]
    // const minutes = times[1]

    //TEST
    let dateObj = new Date(Date.now())
    
    let fullYear = dateObj.getFullYear()
    let fullMonth = dateObj.toLocaleString('ru', {
        month: "short"
    })
    fullMonth = fullMonth.charAt(0).toUpperCase() + fullMonth.slice(1, 3)
    let fullDay = dateObj.getDate()
    let fullHours = dateObj.getHours()
    let fullMinutes = dateObj.getMinutes()

    const now = new Date()
    const number = now.getTime().toString().slice(4, 9)

    function getRandom(max) {
        return Math.floor(Math.random() * max)
    }


    const stepBack = () => {
        clearForm()
        handleSubmit(false)
    }
    const takeRatio = ratioPrice(giveItem.current_price, takeItem.current_price)

    const owner = ownerAddress
    const giveName = giveItem.name
    const giveImg = giveItem.image
    const giveSymbol = giveItem.symbol
    const takeName = takeItem.name
    const takeImg = takeItem.image
    const takeSymbol = takeItem.symbol
    
    const currDate = Date.parse(new Date()) + 1200000

    const hash = `${currDate}${number}${giveSymbol}${fullHours}${takeSymbol}${fullMinutes}`

  return (
    <div className={s.exchangeConfirmation}>
        <h3>
            Ожидаем оплаты по заявке <b>№{number} </b>
            от
            <b> {fullDay} {fullMonth} {fullYear}</b>
        </h3>
        Для завершения необходимо оплатить <b>{form.give} {giveSymbol.toUpperCase()} </b>
        в платежной системе <b>{giveName}</b>
        <div className={s.warning}>
            <b className={s.textBlue}>Внимание:</b> заявка активна <b>20 минут </b>, после чего она будет отменена
        </div>
        <div className={s.orderInfo}>
            <div className={s.ol}>
                <b>По курсу: </b>
                1 {giveSymbol} : {takeRatio} {takeSymbol}
            </div>
            <div className={s.ol}>
                <b>Отдаете: </b>
                {form.give} {giveSymbol}
            </div>
            <div className={s.ol}>
                <b>&nbsp;</b>
                <i className={s.purse}></i>
            </div>
            <div className={s.ol}>
                <b>Получаете: </b>
                {form.take} {takeSymbol}
            </div>
            <div className={s.ol}>
                <b>&nbsp;</b>
                <i className={s.purse}>{form.address}</i>
            </div>
        </div> 
        <Link 
            to={`/payment/go/${hash}`} 
            state={{
                number: number,
                ownerAddress: owner,
                email: form.email,
                giveAmount: form.give,
                takeAmount: form.take,
                giveName: giveName,
                takeName: takeName,
                giveSymbol: giveSymbol,
                takeSymbol: takeSymbol,
                giveImg: giveImg,
                takeImg: takeImg,
                day: fullDay,
                month: fullMonth,
                year: fullYear,
                hour: fullHours,
                minutes: fullMinutes,
                userAddress: form.address,
                currDate: currDate,
                green: green,
                qr: qr,
                // paymentStatus: paymentStatus,
                // setPaymentStatus: handleStatus,
                // disabled: disabled,
                // setDisabled: handleDisabled
            }}
            className={cn(s.btn, s.green)} 
            onClick={() => auth.isPayment = true}
        >
            Оплатить
        </Link>
        <Link to={'/'} className={cn(s.btn, s.ghost)} onClick={stepBack}>Отменить</Link>
    </div>
  )
}

export default Confirmation