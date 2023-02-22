import React from 'react'
import { useState, useEffect } from "react";
import Bestchanger from '../Bestchanger/Bestchanger'
import Gamity from '../Gamity/Gamity'
import s from './middle.module.css'
import ExchangerIn from "../Exchangers/ExchangerIn";
import ExchangerOut from "../Exchangers/ExchangerOut";
import Telegram from "../Telegram/Telegram";
const axios = require('axios')

const coinGeckoApi = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const visaRub = {
    id: 'visarub',
    symbol: 'visarub',
    ticker: 'rub',
    bank: true,
    name: 'VISA/MasterCard',
    current_price: 0.014,
    image: 'https://avanchange.com/uploads/images/payment/cards-small.svg'
}
const visaUsd = {
    id: 'visausd',
    symbol: 'visausd',
    ticker: 'usd',
    bank: true,
    name: 'VISA/MasterCard',
    current_price: 1.01,
    image: 'https://avanchange.com/uploads/images/payment/cards-small.svg'
}
const visaEur = {
    id: 'visaeur',
    symbol: 'visaeur',
    ticker: 'eur',
    bank: true,
    name: 'VISA/MasterCard',
    current_price: 1.02,
    image: 'https://avanchange.com/uploads/images/payment/cards-small.svg'
}
const sber = {
    id: 'sber',
    symbol: 'sber',
    ticker: 'rub',
    bank: true,
    name: 'Сбербанк',
    current_price: 0.014,
    image: 'https://avanchange.com/uploads/images/payment/sberbank-small.svg'
}
const qiwi = {
    id: 'qiwi',
    symbol: 'qiwi',
    ticker: 'rub',
    bank: true,
    name: 'QIWI',
    current_price: 0.014,
    image: 'https://avanchange.com/uploads/images/payment/qiwi-small.svg'
}
const alfa = {
    id: 'alfa',
    symbol: 'alfa',
    ticker: 'rub',
    bank: true,
    name: 'Альфа-банк',
    current_price: 0.014,
    image: 'https://avanchange.com/uploads/images/payment/alfarub-small.svg'
}
const tinkoff = {
    id: 'tinkoff',
    symbol: 'tinkoff',
    ticker: 'rub',
    bank: true,
    name: 'Тинькофф',
    current_price: 0.014,
    image: 'https://avanchange.com/uploads/images/payment/tinkoff-small.svg'
}

const banks = [visaRub, visaUsd, visaEur, sber, qiwi, alfa, tinkoff]

const HeaderMiddle = ({ popularGive, popularTake }) => {
    const [api, setApi] = useState([])
    const [wallets, setWallets] = useState([])
    const [selected, setSelected] = useState({
        give: 'btc',
        take: 'eth'
    })

    const [form, setForm] = useState({
        give: '', take: '', address: '', card: '', email: '', telegram: ''
    })

    const handleForm = (newForm) => {
        setForm(newForm)
    }

    const clearForm = () => {
        setForm({ give: '', take: '', address: '', email: '', telegram: '' })
    }

    const [newCoins, setNewCoins] = useState([])

    const cryptoNames = ['btc', 'eth', 'ltc', 'xlm', 'xtz', 'zec', 'trx', 'xmr', 'doge', 'dash']
    const cryptoUsdt = ['usdt']
    const cryptoNamesAdditional = ['xrp', 'usdp', 'ada', 'dot', 'bnb', 'link', 'bch', 'uni', 'atom', 'miota', 'etc', 'busd', 'zrx', 'waves', 'xvg', 'matic', 'gala', 'mana', 'sand', 'near', 'ton']

    let filteredAdditional = api.length > 1 ? api.filter(item => cryptoNamesAdditional.includes(item.symbol)) : []

    let filteredUsdt = api.length > 1 ? api.filter(item => cryptoUsdt.includes(item.symbol)) : []
    let erc = !!filteredUsdt[0] ? JSON.parse(JSON.stringify(filteredUsdt[0])) : {}
    let trc = !!filteredUsdt[0] ? JSON.parse(JSON.stringify(filteredUsdt[0])) : {}
    erc.name = 'USDT ERC20'
    erc.key = 'erc20'
    erc.symbol = 'erc20'
    erc.id = 'erc20'
    trc.name = 'USDT TRC20'
    trc.key = 'trc20'
    trc.symbol = 'trc20'
    trc.id = 'trc20'

    const [green, setGreen] = useState({
        fix: false,
        best: true
    })
    const changeGreen = (name) => {
        setGreen({
            fix: false,
            best: false,
        })
        setGreen(prev => ({
            ...prev,
            [name]: true
        }))
    }

    let filteredApi = api.length > 1 ? api.filter(item => cryptoNames.includes(item.symbol)) : []

    !!(filteredApi.length > 1) && filteredApi.splice(2, 0, trc)
    !!(filteredApi.length > 1) && filteredApi.splice(3, 0, erc)

    !!(filteredApi.length > 1) && filteredApi.splice(4, 0, ...banks)

    filteredApi = filteredApi.concat(filteredAdditional)

    useEffect(() => {
        let isCancel = false
        const getCryptoApi = async () => {
            try {
                if (!isCancel) {
                    const response = await axios.get(coinGeckoApi)
                    const data = await response.data
                    setApi(data)

                    return data
                }
            } catch (e) {
                console.log(e)
            }
        }
        // const getPercent = async () => {
        //     try {
        //         if (!isCancel) {
        //             const response = await axios.get('/api/payment/percent')
        //             const data = await response.data

        //             const percentData = Number.isInteger(data[0].amount) ? data[0].amount : 2
        //             setPercent(percentData)

        //             return percent


        //         }
        //     } catch (e) {
        //         console.log(e)
        //     }
        // }
        const getWallets = async () => {
            try {
                if (!isCancel) {
                    const response = await axios.get('/api/payment/wallets')
                    const data = await response.data
                    setWallets(data)

                    return data
                }
            } catch (e) {
                console.log(e);
            }
        }
        getCryptoApi()
        getWallets()
        // getPercent()

        //Cleanup
        return () => { isCancel = true }

    }, [])

    useEffect(() => {

        for (let i = 0; i < wallets.length; i++) {
            const symbol = wallets[i]?.symbol.toLowerCase()
            const percent = wallets[i]?.percent ? wallets[i]?.percent : 0
            for (let j = 0; j < filteredApi.length; j++) {
                const currItem = filteredApi[j]
                if (currItem.symbol === symbol) {
                    currItem.current_price += (currItem.current_price / 100 * percent)
                }
            }

        }
        // JUST UPDATE STATE OF COMPONENT
        setNewCoins(filteredApi)
        // filteredApi.forEach(el => el.current_price += (el.current_price / 100 * percent))

    }, [wallets])

    useEffect(() => {
        if (popularGive !== undefined && popularTake !== undefined) {
            setSelected({
                give: popularGive,
                take: popularTake
            })
        }

    }, [popularGive, popularTake])

    const selectCurrency = (code, give) => {
        const item = filteredApi.find(item => item.symbol === code)
        const giveItem = filteredApi.find(item => item.symbol === selected.give)
        const takeItem = filteredApi.find(item => item.symbol === selected.take)

        setForm({ ...form, give: '', take: '' })
        const giveCoins = document.querySelector('#giveCoins')
        const takeCoins = document.querySelector('#takeCoins')
        giveCoins.value = ''
        takeCoins.value = ''

        if (give) {
            let equal = item.symbol === selected.take
                || (item.bank && takeItem.bank)
            if (equal) {
                if (item.symbol === 'btc') {
                    setSelected(prev => ({
                        give: item.symbol,
                        take: 'eth'
                    }))
                    return
                }
                setSelected(prev => ({
                    give: item.symbol,
                    take: 'btc'
                }))
                return
            }
            setSelected(prev => ({
                give: item.symbol,
                take: prev.take
            }))
            return
        }
        if (!give) {
            let equal = item.symbol === selected.give
                || (item.bank && giveItem.bank)
            if (equal) {
                if (item.symbol === 'btc') {
                    setSelected(prev => ({
                        give: 'eth',
                        take: item.symbol
                    }))
                    return
                }
                setSelected(prev => ({
                    give: 'btc',
                    take: item.symbol
                }))
                return
            }
            setSelected(prev => ({
                give: prev.give,
                take: item.symbol
            }))
        }
    }

    return (
        <div className={s.headerMiddle}>
            <div className={s.inner}>
                <Gamity />
                <Bestchanger />
                {
                    filteredApi.length !== 0 ?
                        <div className={s.exchange}>
                            <ExchangerIn
                                selected={selected}
                                selectCurrency={selectCurrency}
                                filteredApi={filteredApi}
                                setSelected={setSelected}
                                green={green}
                                changeGreen={changeGreen}
                            />
                            <ExchangerOut
                                selected={selected}
                                filteredApi={filteredApi}
                                green={green}
                                form={form}
                                setForm={handleForm}
                                clearForm={clearForm}
                            />
                            <Telegram />
                        </div>
                        : null
                }

            </div>
        </div>
    )
}

export default HeaderMiddle
