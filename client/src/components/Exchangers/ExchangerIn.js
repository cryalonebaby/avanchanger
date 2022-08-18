import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
import Dropdown from '../Dropdown/Dropdown'
import {ReactComponent as Switch} from '../../img/switch.svg'
import ratioPrice from '../../utils/ratio'
import {Link} from 'react-router-dom'

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


const ExchangerIn = ({ filteredApi, walletsTemplate, selected, selectCurrency, setSelected, green, changeGreen}) => {
    const reserve = Object.keys(reserves).find(item => selected.take && selected.take.toLowerCase() === item)

    let giveItem = filteredApi.length > 1 ? filteredApi.find(item => item.symbol.toLowerCase() === selected.give) : {}

    let takeItem = filteredApi.length > 1 ? filteredApi.find(item => item.symbol.toLowerCase() === selected.take) : {}


    const swapItems = () => {
        giveItem = [takeItem, takeItem = giveItem][0]
        setSelected({
            give: giveItem.symbol.toLowerCase(),
            take: takeItem.symbol.toLowerCase()
        })
    }

    const ratio = ratioPrice(giveItem.current_price, takeItem.current_price)
    const reverseRatio = ratioPrice(takeItem.current_price, giveItem.current_price)

    const priceZero = ratio <= 0.001

    return (
        <div className={s.exchangeLeftBorder}>
            <div className={cn(s.exchangeLeft, s.exchangeEquels)}>
                <div className={s.bigArrow}>
                    <span className={s.flaticonArrRight}>&#8594;</span>
                </div>
                <div className={s.title}>
                    <span className={cn(s.flaticonMoney1, s.icon, s.i1)}>
                        <b>Направление</b> обмена
                    </span>
                </div>
                <div className={s.in}>
                    <div className={s.exchangeRateChoice}>
                        <div 
                            className={s.t}
                        >
                            Выберите тип курса
                        </div>
                        <div className={s.r}>
                            <div className={green.fix ? cn(s.option, s.active) : s.option} onClick={() => changeGreen('fix')}>Фикс</div>
                            <div className={green.best ? cn(s.option, s.active) : s.option} onClick={() => changeGreen('best')}>Лучший</div>
                        </div>
                    </div>
                    <div className={s.exchangeDir}>Отдаете</div>
                    <Dropdown
                        selected={selected}
                        selectCurrency={selectCurrency}
                        giveItem={giveItem}
                        takeItem={takeItem}
                        give={true}
                        filteredApi={filteredApi}
                        walletsTemplate={walletsTemplate}
                    />
                    <div className={s.exchangeDir}>
                        Получаете
                        <div 
                            className={cn(s.exchangeReverseSwitch, s.eas)}
                            data-tooltip='Обратное направление'
                            onClick={swapItems}
                        >
                            <Switch className={s.reverseSvg}/>
                        </div>
                    </div>
                    <Dropdown
                        selected={selected}
                        selectCurrency={selectCurrency}
                        giveItem={giveItem}
                        takeItem={takeItem}
                        give={false}
                        filteredApi={filteredApi}
                        walletsTemplate={walletsTemplate}
                    />
                    <div className={s.exchangeRate}>
                        <div className={s.rate}>
                            <div className={s.row}>
                                Курс
                                {
                                    priceZero ?
                                    <b className={s.customCurrencyRate}>
                                        {reverseRatio}
                                        <span>{` ${giveItem?.symbol.toUpperCase()} `}</span>
                                        ~ 1
                                        <span>{` ${takeItem?.symbol.toUpperCase()}`}</span>
                                    </b>
                                    : <b className={s.customCurrencyRate}>
                                            1
                                            <span>{` ${giveItem?.symbol.toUpperCase()} `}</span>
                                            ~ {ratio}
                                            <span>{` ${takeItem?.symbol.toUpperCase()}`}</span>
                                        </b>
                                }
                                
                            </div>
                            <div className={s.row}>
                                Резерв
                                <b className={s.customCurrencyReserve}>
                                    {reserves[reserve]}
                                    <span>{` ${selected.take?.toUpperCase()}`}</span>
                                </b>
                            </div>
                            <div className={s.row}>
                                Последний обмен
                                <b className={s.customCurrencyLastexchange}>
                                    18 мин
                                    <span> назад</span>
                                </b>
                            </div>
                        </div>
                        <div className={s.exchangeTerms}>
                            <h5>Условия для направления</h5>
                            <ul>
                                <li className={s.termsRateType}>
                                    Обмен будет инициирован после получения 
                                    <b> 2 подтверждений </b>
                                    транзакции
                                </li>
                                <li className={s.termsRateType}>
                                    Комиссия сервиса 
                                    <b> 0.4</b>
                                    %. Обновление биржевого курса на основе&nbsp;
                                    <a href='https://coinmarketcap.com/' target='_blank' rel='noreferrer'>CoinMarketCap</a>
                                </li>
                                <li className={s.termsRateType}>
                                    Курс корректируется каждые  
                                    <b> 5 минут</b>
                                    , подробнее в разделе&nbsp;
                                    <Link to={'/ru/pages/help'} target={'_blank'} rel={'noreferrer'}>помощь</Link>
                                </li>
                                <li className={s.termsRateType}>
                                    Курс в заявке может быть изменен на актуальный, согласно пункту 5.5&nbsp;
                                    <Link to={'/ru/pages/help'} target={'_blank'} rel={'noreferrer'}>текущих правил</Link>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div> 
                </div>
            </div>
    )
}

export default ExchangerIn