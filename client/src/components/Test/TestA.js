import s from './style.module.css'

const TestA = ({giveName, takeName, handleGiveChange, handleTakeChange, handleSwitch, filteredApi, walletsTemplate}) => {
    const coins = filteredApi ? filteredApi : walletsTemplate
    const give = coins.find(item => item.name === giveName)
    const take = coins.find(item => item.name === takeName)

    const ration = give.current_price / take.current_price


    return (
        <div className={s.container}>
                <label>
                    <select id='give' onChange={handleGiveChange} defaultValue={give.name}>
                        {
                            coins.map(coin => (
                                <option id={coin.name} key={coin.name} value={coin.name}>
                                    {coin.name} {coin.symbol}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    <select id='take' onChange={handleTakeChange} defaultValue={take.name}>
                        {
                            coins.map(coin => (
                                <option key={coin.name} value={coin.name}>
                                    {coin.name} {ration}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <button onClick={handleSwitch}>
                    Switch
                </button>
        </div>
    )
}

export default TestA