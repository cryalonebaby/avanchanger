import React from 'react'
import s from './style.module.css'
import {MdOutlineSwapHoriz} from 'react-icons/md'

const Change = ({give, take, minus}) => {
    let parsed = new Date().getTime()
    // console.log(parsed);
    let dateObj = new Date(parsed - minus)

    let day = dateObj.getDate()
    let month = dateObj.toLocaleString('ru', {month: 'short'})
    let year = dateObj.getFullYear()
    let hour = dateObj.getHours()
    let minute = dateObj.getMinutes()

    const fullDay = ('0' + day).slice(-2)
    const fullHours = ('0' + hour).slice(-2)
    const fullMinutes = ('0' + minute).slice(-2)

    const bigMonth = month[0].toUpperCase() + month.slice(1, 3)

    const smallAmountsBtc = ['0.323', '0.441', '0.287', '0.397', '0.172', '0.084']
    const smallAmountsEth = ['2.78', '3.99', '1.03', '4.59', '5.83', '2.02']
    const bigAmounts = ['9.782', '8.993', '7.034', '11.595', '9.836', '14.028']
    const bigAmountsPrice = ['1 002.781', '988.129', '492.733', '1 108.595', '729.836', '1 400.028', '1 107.021', '1 221.994', '540.933', '2 098.700', '677.136', '2 144.087', '2 001.786', '1 000.120', '504.027', '886.682', '721.002', '1 050.810']

    const randomAmount = () => {
        if(take?.symbol === 'BTC') {
            return smallAmountsBtc
        }
        if(take?.symbol === 'ETH') {
            return smallAmountsEth
        }
        if(take?.symbol === 'DOGE' || take?.symbol === 'XLM' || take?.symbol === 'TRC20' || take?.symbol === 'ERC20' || take?.symbol === 'TRX' || take?.symbol === 'XTZ') {
            return bigAmountsPrice
        }
        return bigAmounts
    }

    let amountsArray = randomAmount()

    const shuffled = amountsArray.sort(() => 0.5 - Math.random())
    return (
        <div className={s.change}>
            <div className={s.icons}>
                <div className={s.ix}>
                    <div className={s.x}>
                        <img src={give?.link} alt={'Give'}/>
                    </div>
                    <div className={s.x}>
                        <MdOutlineSwapHoriz size={25} color='gray'/>
                    </div>
                    <div className={s.x}>
                        <img src={take?.link} alt={'Take'}/>
                    </div>
                </div>
            </div>
            <div className={s.amount}>{shuffled[0]} {take?.symbol}</div>
            <div className={s.date}>{`${fullDay} ${bigMonth} ${year}, ${fullHours}:${fullMinutes}`}</div>
        </div>
    )
}

export default Change