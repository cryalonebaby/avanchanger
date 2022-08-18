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

const walletsTemplate = [
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        address: '1111',
        image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    },
    {
        name: 'Ethereum',
        symbol: 'ETH',
        address: '2222',
        image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
    },
    {
        name: 'XRP',
        symbol: 'XRP',
        address: '3333',
        image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
    }, 
    {
        name: 'DOGE',
        symbol: 'DOGE',
        address: '4444',
        image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
    }
]

const HeaderMiddle = ({popularGive, popularTake}) => {
    const coins = walletsTemplate
    const [api, setApi] = useState([]) 
    const cryptoNames = ['btc', 'eth', 'ltc', 'xlm', 'xtz', 'zec', 'trx', 'xmr', 'doge', 'dash']
    const cryptoUsdt = ['usdt']
    const cryptoNamesAdditional = ['xrp', 'usdp', 'ada', 'dot', 'bnb', 'link', 'bch', 'uni', 'atom', 'miota', 'etc', 'busd', 'zrx', 'waves', 'xvg', 'matic', 'gala', 'mana', 'sand', 'near', 'ton']

    let filteredAdditional = api.length > 1 ? api.filter(item => cryptoNamesAdditional.includes(item.symbol)): []

    let filteredUsdt = api.length > 1 ? api.filter(item => cryptoUsdt.includes(item.symbol)): []
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

    useEffect(() => {
        let isCancel = false
        const getCryptoApi = async () => {
            try {
                if(!isCancel) {
                    const response = await axios.get(coinGeckoApi)
                    const data = await response.data
                    setApi(data)
        
                    return data
                }   
            } catch (e) {
                console.log(e)
            }
        }
        getCryptoApi()
        // getCoins()


        //Cleanup
        return () => {isCancel = true}
        
    }, [])


    // coins.forEach(item => cryptoNames.push(item.symbol.toLowerCase()))

    let filteredApi = api.length > 1  ? api.filter(item => cryptoNames.includes(item.symbol)): []
    !!(filteredApi.length > 1) && filteredApi.splice(2, 0, trc)
    !!(filteredApi.length > 1) && filteredApi.splice(3, 0, erc)
    filteredApi = filteredApi.concat(filteredAdditional)

    {/*Up price to 2% */}
    filteredApi.forEach(el => el.current_price += el.current_price/100 * 1)

    const [selected, setSelected] = useState({
        give: 'btc',
        take: 'eth'
    })

    useEffect(() => {
        if(popularGive !== undefined && popularTake !== undefined) {
            setSelected({
                give: popularGive,
                take: popularTake
            })
        }
        
    }, [popularGive, popularTake])

    const selectCurrency = (code, give) => {
        const item = filteredApi.find(item => item.symbol === code)
        if(give) {
            let equal = item.symbol === selected.take
            if(equal) {
                if(item.symbol === 'btc') {
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
        if(!give) {
            let equal = item.symbol === selected.give
            if(equal) {
                if(item.symbol === 'btc') {
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
        

        // give ? setSelected(prev => ({
        //     take: prev.take,
        //     give: item.symbol
        // }))
        // : setSelected(prev => ({
        //     give: prev.give,
        //     take: item.symbol
        // }))
    }

    // const sameChange = () => {
    //     setSelected(prev => ({
    //         take: prev.take,
    //         give: coins[0]
    //     }))
    // }

    // useEffect(() => {
    //     console.log('newItem from header middle', selected.give)
    //     sameChange()       
    // })

    return (
        <div className={s.headerMiddle}>
            <div className={s.inner}>
                <Gamity/>
                <Bestchanger/>
                {
                    filteredApi.length !== 0 ?
                    <div className={s.exchange}>
                        <ExchangerIn
                            selected={selected}
                            selectCurrency={selectCurrency}
                            filteredApi={filteredApi}
                            walletsTemplate={walletsTemplate}
                            setSelected={setSelected}
                            green={green}
                            changeGreen={changeGreen}
                        />
                        <ExchangerOut
                            selected={selected}
                            coins={coins}
                            filteredApi={filteredApi}
                            green={green}
                        />
                        <Telegram/>
                    </div>
                    :null
                }
                
            </div>
        </div>
    )
}

export default HeaderMiddle
