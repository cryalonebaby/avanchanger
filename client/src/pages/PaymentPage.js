import React from 'react'
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useCountdown } from "../hooks/countdown.hook";
import PaymentInfo from "../components/Payment/PaymentInfo";
import CancelPage from "./CancelPage";
import s from './payment.module.css'


const PaymentPage = () => {
    const location = useLocation()
    const { isGiveBank, isTakeBank, giveName, giveSymbol, giveTicker, email, giveImg, takeName, takeSymbol, takeTicker, takeImg, userAddress, userCard, giveAmount, takeAmount, number, ownerAddress, currDate, green, qr, day, month, year, hour, minutes } = location.state || {}

    const auth = useContext(AuthContext)

    const newDate = Date.parse(new Date())

    const [timeH, timeM, timeS] = useCountdown(currDate, newDate)

    useEffect(() => {
        auth.pay()
    }, [timeH, timeM, timeS, auth])

    if (timeH + timeM + timeS <= 0) {
        auth.isPayment = false
    }

    return (
        <div className={s.payment}>
            {
                auth.isPayment
                    ? <PaymentInfo
                        isGiveBank={isGiveBank}
                        isTakeBank={isTakeBank}
                        giveName={giveName}
                        takeName={takeName}
                        giveSymbol={giveSymbol}
                        takeSymbol={takeSymbol}
                        giveTicker={giveTicker}
                        takeTicker={takeTicker}
                        giveImg={giveImg}
                        takeImg={takeImg}
                        userAddress={userAddress}
                        userCard={userCard}
                        giveAmount={giveAmount}
                        takeAmount={takeAmount}
                        number={number}
                        day={day}
                        month={month}
                        year={year}
                        hour={hour}
                        minutes={minutes}
                        ownerAddress={ownerAddress}
                        timeH={timeH}
                        timeM={timeM}
                        timeS={timeS}
                        green={green}
                        qr={qr}
                        email={email}
                    />
                    : <CancelPage />
            }
        </div>
    );
};

export default PaymentPage;