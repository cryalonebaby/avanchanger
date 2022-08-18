import React from 'react'
import s from './style.module.css'
import Change from './Change'

const Changes = () => {
    const images = [
        {
            link: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
            symbol: 'BTC'
        },
        {
            link: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            symbol: 'ETH'
        },
        {
            link: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
            symbol: 'ERC20'
        },
        {
            link: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
            symbol: 'TRC20'
        },
        {
            link: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
            symbol: 'DOGE'
        },
        {
            link: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066',
            symbol: 'TRX'
        },
        {
            link: 'https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580',
            symbol: 'LTC'
        },
        {
            link: 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157',
            symbol: 'XLM'
        },
        {
            link: 'https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729',
            symbol: 'XMR'
        },
        {
            link: 'https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png?1547034862',
            symbol: 'XTZ'
        },
        {
            link: 'https://assets.coingecko.com/coins/images/486/large/circle-zcash-color.png?1547034197',
            symbol: 'ZEC'
        },
        {
            link: 'https://assets.coingecko.com/coins/images/19/large/dash-logo.png?1548385930',
            symbol: 'DASH'
        }
    ]

    const shuffled = images.sort(() => 0.5 - Math.random())

    let selected = shuffled.slice(0, 12)

    return (
        <div className={s.live}>
            <div className={s.inner}>
                <h3>Недавние обмены</h3>
                <div className={s.changeWrapper}>
                    <Change
                        give={selected[0]}
                        take={selected[1]}
                        minus={420000}
                    />
                    <Change
                        give={selected[2]}
                        take={selected[3]}
                        minus={900000}
                    />
                    <Change
                        give={selected[4]}
                        take={selected[0]}
                        minus={1380000}
                    />
                    <Change
                        give={selected[5]}
                        take={selected[6]}
                        minus={1560000}
                    />
                    <Change
                        give={selected[7]}
                        take={selected[1]}
                        minus={1860000}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Changes