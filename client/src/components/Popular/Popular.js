import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop'

const Popular = () => {
    return (
        <div className={s.popular}>
            <div className={s.inner}>
                <h3>Популярные направления</h3>
                <ul>
                    <li>
                        <span>› </span>
                        <Link to={'/ru/'} state={{popularGive: 'btc', popularTake: 'eth'}} onClick={() => window.scrollTo(0, 0)}>
                            Bitcoin › Ethereum 
                        </Link>
                    </li>
                    <li>
                        <span>› </span>
                        <Link to={'/ru/'} state={{popularGive: 'btc', popularTake: 'trc20'}} onClick={() => window.scrollTo(0, 0)}>
                            Bitcoin › USDT ТRC20 USDT 
                        </Link>
                    </li>
                    <li>
                        <span>› </span>
                        <Link to={'/ru/'} state={{popularGive: 'btc', popularTake: 'erc20'}} onClick={() => window.scrollTo(0, 0)}>
                            Bitcoin › USDT ERC20 USDT 
                        </Link>
                    </li>
                    <li>
                        <span>› </span>
                        <Link to={'/ru/'} state={{popularGive: 'btc', popularTake: 'xmr'}} onClick={() => window.scrollTo(0, 0)}>
                            Bitcoin › Monero XMR 
                        </Link>
                    </li>
                    <li>
                        <span>› </span>
                        <Link to={'/ru/'} state={{popularGive: 'eth', popularTake: 'xmr'}} onClick={() => window.scrollTo(0, 0)}> 
                            Ethereum › Monero XMR 
                        </Link>
                    </li>
                    <li>
                        <span>› </span>
                        <Link to={'/ru/'} state={{popularGive: 'eth', popularTake: 'btc'}} onClick={() => window.scrollTo(0, 0)}> 
                            Ethereum › Bitcoin 
                        </Link>
                    </li>
                    <li>
                        <span>› </span>
                        <Link to={'/ru/'} state={{popularGive: 'eth', popularTake: 'erc20'}} onClick={() => window.scrollTo(0, 0)}> 
                            Ethereum › USDT ERC20 USDT 
                        </Link>
                    </li>
                    <li>
                        <span>› </span>
                        <Link to={'/ru/'} state={{popularGive: 'xmr', popularTake: 'erc20'}} onClick={() => window.scrollTo(0, 0)}>
                            Monero XMR › USDT ERC20 USDT 
                        </Link>
                    </li>
                    <li>
                        <span>› </span>
                        <Link to={'/ru/'} state={{popularGive: 'xmr', popularTake: 'btc'}} onClick={() => window.scrollTo(0, 0)}> 
                            Monero XMR › Bitcoin 
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Popular