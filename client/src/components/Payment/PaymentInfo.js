import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import cn from 'classnames'
import emailjs from 'emailjs-com'
const axios = require('axios')

const PaymentInfo = ({ isGiveBank, isTakeBank, giveName, email, giveSymbol, giveTicker, giveImg, takeName, takeSymbol, takeTicker, takeImg, userAddress, userCard, giveAmount, takeAmount, number, ownerAddress, timeH, timeM, timeS, green, qr, day, month, year, hour, minutes }) => {

    // TODO CHANGE TEMPLATE FOR BANK CARDS
    let templateParams = {
        number: `${number}`,
        amountGive: `${giveAmount} ${giveSymbol.toUpperCase()}`,
        amountTake: `${takeAmount} ${takeSymbol.toUpperCase()}`,
        wallet: `${isTakeBank ? userCard : userAddress}`,
        date: `${day} ${month} ${year}, ${hour}:${minutes}`,
        email_to: `${email}`,
    }

    const [paymentStatus, setPaymentStatus] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const Status = !paymentStatus ? false : true

    const sendEmail = () => {
        setPaymentStatus(true)

        setDisabled(true)
        emailjs.send("service_2ekp3u9", "template_mxoc08y", templateParams, "TzvSO7jBl1xFw3x1I")
            .then((result) => {
                // window.location.reload()
            }, (error) => {
                console.log(error.text);
            })
    }

    const sendInfo = async () => {
        await axios.post('/api/payment/sendInfo', {
            nomerZayavki: `${number}`,
            zayavkaNa: `${takeTicker}`,
            otdaet: `${giveAmount}${giveTicker}`,
            poluchaet: `${takeAmount}${takeTicker}`,
            naKoschelek: `${ownerAddress}`,
            koschelekKlienta: `${userAddress}`,
            nomerKartiKlienta: `${userCard}`,
            date: `${day} ${month} ${year}, ${hour}:${minutes}`
        })
    }

    useEffect(() => {
        let isSend = false
        setDisabled(JSON.parse(window.sessionStorage.getItem(`disabled${number}${hour}${minutes}${day}`)))
        setPaymentStatus(JSON.parse(window.sessionStorage.getItem(`status${number}${hour}${minutes}${day}`)))

        if (!isSend) {
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
                    <img src={giveImg} alt='giveImg' />
                    Отдаете {giveName}
                </h3>
                <div className={s.line}>
                    <span>Сумма</span>
                    <b>{giveAmount} {giveSymbol.toUpperCase()}</b>
                </div>
                <div className={s.line}>
                    {isGiveBank ? (<span>С карты</span>) : <span>С кошелька</span>}
                    <b>{isGiveBank ? userCard : '-'}</b>
                </div>
            </div>
            <div className={s.paymentTake}>
                <h3>
                    <img src={takeImg} alt='takeImg' />
                    Получаете {takeName}
                </h3>
                <div className={s.line}>
                    <span>Сумма</span>
                    <b>{takeAmount} {takeSymbol.toUpperCase()}</b>
                </div>
                <div className={s.line}>
                    {isTakeBank ? (<span>На карту</span>) : <span>На кошелек</span>}
                    <b>{isTakeBank ? userCard : userAddress}</b>
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
                    <br />
                    <b> {ownerAddress}</b>
                </div>
                {
                    qr !== '' && qr !== undefined ?
                        <div className={s.qrcode}>
                            <img src={qr} alt="QR" />
                        </div>
                        : <br />
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
                        <b> 04 Апр 2023, 21:01</b>
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