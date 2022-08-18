import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import cn from 'classnames'
import emailjs from 'emailjs-com'
const axios = require('axios')

const PaymentInfo = ({ giveName, email, giveSymbol, giveImg, takeName, takeSymbol, takeImg, userAddress, giveAmount, takeAmount, number, ownerAddress, timeH, timeM, timeS, green, qr,  day, month, year, hour, minutes}) => {

    let templateParams = {
        number: `${number}`,
        amountGive: `${giveAmount} ${giveSymbol}`,
        amountTake: `${takeAmount} ${takeSymbol}`,
        wallet: `${userAddress}`,
        date: `${day} ${month} ${year}, ${hour}:${minutes}`,
        email_to: `${email}`,
    }

    const [paymentStatus, setPaymentStatus] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const Status = !paymentStatus ? false : true

    const sendEmail = () => {
        setPaymentStatus(true)
        setDisabled(true)
        console.log('CLICK');
        emailjs.send("service_fo7i8yb","template_aoqa05o", templateParams, "T6dl6-4HD1RHqpWsi")
            .then((result) => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            })
    }

    const sendInfo = async () => {
        await axios.post('/api/payment/sendInfo', {
            nomerZayavki: `${number}`,
            zayavkaNa: `${takeSymbol}`,
            otdaet: `${giveAmount}${giveSymbol}`,
            naKoschelek: `${ownerAddress}`,
            koschelekKlienta: `${userAddress}`,
            date: `${day} ${month} ${year}, ${hour}:${minutes}`
        })
    }

    useEffect(() => {
        let isSend = false
        setDisabled(JSON.parse(window.sessionStorage.getItem(`disabled${number}${hour}${minutes}${day}`)))
        setPaymentStatus(JSON.parse(window.sessionStorage.getItem(`status${number}${hour}${minutes}${day}`)))
        
        if(!isSend) {
            sendInfo()
        }

        return () => {
            isSend = true
        }
        
    }, [])

    useEffect(() => {
        window.sessionStorage.setItem(`disabled${number}${hour}${minutes}${day}`, disabled);
        window.sessionStorage.setItem(`status${number}${hour}${minutes}${day}`, paymentStatus);
    }, [disabled, paymentStatus])

    const time = [timeH, timeM, timeS]
    let newTime = time.map(item => item = Math.abs(item))

    const H = newTime[0] < 10 ? `0${newTime[0]}` : newTime[0]
    const M = newTime[1] < 10 ? `0${newTime[1]}` : newTime[1]
    const S = newTime[2] < 10 ? `0${newTime[2]}` : newTime[2]

    const fullDay = day < 10 ? `0${day}` : day

    const fullHours = hour < 10 ? `0${hour}` : hour
    const fullMinutes = minutes < 10 ? `0${minutes}` : minutes

    return (
        <div className={s.inner}>
            <h1 className={s.h1}>Обмен №{number} от {fullDay} {month} {year}, {fullHours}:{fullMinutes}</h1>
            <div className={s.paymentGive}>
                <h3>
                    <img src={giveImg} alt='giveImg'/>
                    Отдаете {giveName}
                </h3>
                <div className={s.line}>
                    <span>Сумма</span>
                    <b>{giveAmount} {giveSymbol}</b>
                </div>
                <div className={s.line}>
                    <span>С кошелька</span>
                    <b> - </b>
                </div>
            </div>
            <div className={s.paymentTake}>
                <h3>
                    <img src={takeImg} alt='takeImg'/>
                    Получаете {takeName}
                </h3>
                <div className={s.line}>
                    <span>Сумма</span>
                    <b>{takeAmount} {takeSymbol}</b>
                </div>
                <div className={s.line}>
                    <span>На кошелек</span>
                    <b>{userAddress}</b>
                </div>
            </div>
            <div className={s.paymentTimer}>
                <div className={s.status}>
                    Статус оплаты: 
                    {!Status ? <b className={s.textBlue}>ожидает оплаты</b> : <b className={s.textGreen}>оплачено</b>}   
                </div>
                <div className={s.desc}>
                    Отправьте ровно <b>{giveAmount} {giveSymbol.toUpperCase()} </b>
                    на адрес
                    <br/>
                    <b> {ownerAddress}</b>
                </div>
                {
                    qr !== '' && qr !== undefined ?
                    <div className={s.qrcode}>
                        <img src={qr} alt="QR"/>
                    </div>
                    : <br/>
                }           
                <div className={s.timer}>{H}:{M}:{S}</div>
                <div className={s.timerInfo}>Осталось времени</div>

                <div className={s.button}>
                    <button className={cn(s.btn, s.green)} onClick={sendEmail} disabled={disabled ? disabled : false}>Я оплатил</button>
                </div>

                <div className={s.paymentType}>
                    <h5>Тип обмена: {green.best ? <b>Лучший курс</b> : <b>Фиксированный курс</b>}</h5>
                    <div className={s.desc}>
                        Курс может корректироваться при высоких колебаниях 
                        <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer"> рынка</a>
                    </div>
                </div>
                <div className={s.mempoolFees}>
                    <div className={s.feesTitle}>
                        Информация о комиссии сети на 
                        <b> 04 Апр 2022, 21:01</b>
                    </div>
                    <div className={s.clr}></div>
                    <div className={s.feeWrapper}>
                        <div className={s.fee}>
                            <h5>High priority</h5>
                            <span>39 gwei</span>
                        </div>
                        <div className={s.fee}>
                            <h5>Medium priority</h5>
                            <span>36 gwei</span>
                        </div>
                        <div className={s.fee}>
                            <h5>Low priority</h5>
                            <span>27 gwei</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.info2}>
                <h3>Важно</h3>
                <ul>
                    <li>Не оплачивайте заявку после истечения таймера, так как кошелек будет удален!</li>
                    <li>Отправьте точную сумму <u><strong>без учета комиссии</strong></u>, иначе платеж может зависнуть на длительный срок;</li>
                    <li>Указывайте комиссию с  <u><strong>быстрым приоритетом</strong></u>, иначе платеж будет идти 2-4 часа и <b>сервис отклонит его</b></li>
                    <li>Страница автоматически обновляется после изменения статуса заявки. Статус заявки изменится на <b className={s.textBlue}>«Оплачено»</b></li>
                </ul>
            </div>
        </div>
    )
}

export default PaymentInfo