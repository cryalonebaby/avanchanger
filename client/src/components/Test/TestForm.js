import s from './style.module.css'

const emailValidation = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const TestForm = ({
    form,
    messages,
    give, 
    take, 
    giveName,
    takeName, 
    changeHandler, 
    handleInputChange,
    handleOutputChange,
    handleSubmit,
}) => {

    const errorsHandler = () => {
        const amountInputEmpty = form.give.length === 0 || form.take.length === 0
        const emailInputWrong = form.email.length === 0 || !emailValidation.test(String(form.email).toLowerCase())
        const userAddressWrong = form.address.length < 26 || form.address.length > 35
        
        if(amountInputEmpty) {
            return 'inputs'
        }
        if(emailInputWrong) {
            return 'email'
        }
        if(userAddressWrong) {
            return 'address'
        }
        return null
    }

    const toContin = e => {
        e.preventDefault()
        const handlerResult = errorsHandler()
        if(handlerResult === null) {
            handleSubmit()
        } else {
            const errorName = handlerResult
            console.log(messages[errorName]);
        }
    }
    return (
        <>
            <div className={s.header}>
                <p>Обмен {giveName} на {takeName}</p>
            </div>
            <div className={s.body}>
                <form>
                    <label>
                        Отдаете {give.code}
                        <input 
                            id='giveCoins' 
                            type='number' 
                            name='give'
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Получаете {take.code}
                        <input 
                            id='takeCoins' 
                            type='number'
                            name='take'
                            onChange={handleOutputChange}
                        />
                    </label>
                    <label>
                        Адрес {takeName}
                        <input 
                            id='addressCoins'
                            type='text'
                            name='address'
                            onChange={changeHandler}
                        />
                    </label>
                    <label>
                        Электронная почта
                        <input 
                            id='emailCoins'
                            type='text'
                            name='email'
                            onChange={changeHandler}
                        />
                    </label>
                    <label>
                        Ваш телеграм
                        <input 
                            id='telegramCoins'
                            type='text'
                            name='telegram'
                            onChange={changeHandler}
                        />
                    </label>
                    <button onClick={toContin}>
                        обменять
                    </button>

                </form>
            </div>
        </>
    )
}

export default TestForm