import React from 'react'
import {useState} from 'react'
import s from './style.module.css'
import cn from 'classnames'
import {toast} from 'react-toastify'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {RiArrowDropUpLine} from 'react-icons/ri'

//TODO ADD ERC20 AND TRC20
const cryptoNames = ['btc', 'eth', 'ltc', 'xlm', 'xtz', 'zec', 'trx', 'xmr', 'doge', 'dash', 'erc20', 'trc20']

const Dropdown = ({selected, selectCurrency, give, filteredApi, giveItem, takeItem}) => {
    const List = filteredApi
    
    const Selected = give ? giveItem : takeItem

    const [isListOpen, setIsListOpen] = useState(false)

    const [filter, setFilter] = useState('')

    const checkAdditional = (item) => {
        if(!cryptoNames.includes(item.symbol)) {
            !item.name ? toast.error('Для данной валюты обмен пока не доступен') : toast.error(`Для ${item.name} обмен пока не доступен`)
            selectCurrency('btc', give)
            setIsListOpen(false)
        } else {
            selectItem(item)
        }
    }

    const selectItem = (item) => {
        selectCurrency(item.symbol, give)
        setIsListOpen(false)
    }
    return (
        <div className={s.customCurrencyDropdown}>
            {
                isListOpen
                ?   <div className={s.search}>
                        <input
                            type='text'
                            className={s.inp}
                            placeholder='Какая валюта нужна'
                            value={filter}
                            onChange={(event) => setFilter(event.target.value)}
                        />
                        <span className={cn(s.icon, s.eas)}></span>
                        <span className={cn(s.arrow, s.close, s.eas)}>
                            <span className={s.flaticonArrTop} onClick={() => setIsListOpen(false)}>
                                <RiArrowDropUpLine size={35}/>
                            </span>
                        </span>
                    </div>
                :   <div className={s.selected} id={give ? 'give' : 'take'}>
                        <span className={cn(s.icon, s.customCurrencyGiveIcon)}>
                            <img src={Selected?.image} alt={Selected?.name}></img>
                        </span>
                        <span className={s.customCurrencyDropdownTitle}>
                            <span className={cn(s.name, s.customCurrencyGiveName)}>
                                {Selected?.name}
                            </span>
                            <span className={cn(s.currency, s.customCurrencyGiveCurrency)}>
                                {Selected?.symbol}
                            </span>
                        </span>
                        <span className={cn(s.arrow, s.eas)} onClick={() => setIsListOpen(true)}>
                            <span className={s.flaticonArrDown}>
                                <RiArrowDropDownLine size={35}/>
                            </span>
                        </span>
                    </div>
            }
            {
                isListOpen && (
                    <ul className={s.list}>
                        {List.length !== 0
                        ?   List.filter(i => i.name.toLowerCase().includes(filter.toLowerCase()) || i.symbol.toLowerCase().includes(filter.toLowerCase()) ||filter === '').map(item => (
                                <li key={item.id} onClick={() => checkAdditional(item)}>
                                    <span className={s.icon}>
                                        <img src={item.image} alt={item.name}></img>
                                    </span>
                                    <span className={s.customCurrencyDropdownTitle}>
                                        <span className={s.name}>{item.name}</span>
                                        <span className={s.currency}>{item.symbol}</span>
                                        {/* {
                                            !give && (
                                                <span className={s.rate}>{item.current_price.toString().slice(0, 7)}</span>
                                            )
                                        } */}
                                    </span>
                                </li>
                            ))
                        : <li className={s.empty}>Ничего не найдено</li>
                        }
                    </ul>
                )
            }
            
            
        </div> 
    )
}

export default Dropdown