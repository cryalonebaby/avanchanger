import { useState } from 'react'
import s from './style.module.css'
import TestC from './TestC'
import TestForm from './TestForm'

const AMOUNT = 2

document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number"){
        document.activeElement.blur();
    }
});

const TestB = ({giveName, takeName, walletsTemplate, coinsDb}) => {
    const coins = coinsDb ? coinsDb : walletsTemplate
    const [step, setStep] = useState(false)
    const messages = {
        inputs: 'Введите количество монет для отправки и получения',
        address: `Введите действительный адрес кошелька ${takeName}`,
        email: 'Введите действительный email',
        telegram: 'Телеграм должен начинаться с @',
    }
    const [form, setForm] = useState({
        give: '', take: '', address: '', email: '', telegram: ''
    })
    const give = coins.find(item => item.name === giveName)
    const take = coins.find(item => item.name === takeName)

    const calculateTakeAmount = (input, amount) => {
        return input*amount
    }

    const calculateGiveAmount = (output, amount) => {
        return output/amount
    }

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleInputChange = event => {
        const giveCoins = document.querySelector('#giveCoins')
        const takeCoins = document.querySelector('#takeCoins')

        const takeAmount = calculateTakeAmount(giveCoins.value, AMOUNT)

        takeCoins.value = takeAmount
        setForm({...form, [event.target.name]: event.target.value, take: takeAmount})
    }

    const handleOutputChange = event => {
        const giveCoins = document.querySelector('#giveCoins')
        const takeCoins = document.querySelector('#takeCoins')

        const giveAmount = calculateGiveAmount(takeCoins.value, AMOUNT)

        giveCoins.value = giveAmount
        setForm({...form, [event.target.name]: event.target.value, give: giveAmount})
    }

    const handleSubmit = () => {
        setStep(true)
    }
    return (
        <div className={s.container}>
            {
                !step?
                <TestForm
                    form={form}
                    messages={messages}
                    giveName={giveName}
                    takeName={takeName}
                    give={give}
                    take={take}
                    changeHandler={changeHandler}
                    handleInputChange={handleInputChange}
                    handleOutputChange={handleOutputChange}
                    handleSubmit={handleSubmit}
                /> :
                <TestC
                    giveName={giveName}
                    give={form.give}
                    take={form.take}
                    address={form.address}
                    email={form.email}
                    telegram={form.telegram}
                    form={form}
                    ownerAddress={give.address}
                />
            }
        </div>
    )
}

export default TestB