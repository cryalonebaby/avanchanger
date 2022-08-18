import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames'
import s from './register.module.css'
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer} from 'react-toastify'

const ModalRegister = ({registerActive, setRegisterActive, switchModals}) => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [rePassword, setRePassword] = useState("")
    const formErrors = ""
    const [form, setForm] = useState({
        username: "", email: "", password: ""
    })


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
        errorsHandler()
    }

    const rePasswordHandler = event => {
        setRePassword(event.target.value)
        errorsHandler()
    }

    const registerHandler = async () => {
        try {
            await request('/api/auth/register', 'POST', {...form, formErrors: formErrors})
            const loginAfterRegister = await request('/api/auth/login', 'POST', {...form})
            auth.login(loginAfterRegister.token, loginAfterRegister.userId)
            if(error == null) {
                setRegisterActive(false)
            }
        } catch (e) {}
    }

    const errorsHandler = () => {
        const passwordWrong = form.password.length === 0
        const emailWrong = form.email.length === 0
        const usernameWrong = form.username.length === 0
        const repasswordWrong = rePassword !== form.password || rePassword.length === 0

        if (usernameWrong) {
            return 'Введите никнейм'
        } else if (emailWrong) {
            return 'Введите E-mail'
        } else if (passwordWrong) {
            return 'Введите пароль'
        } else if(repasswordWrong) { 
            return 'Повторите пароль'
        } else {
            return ''
        }
        // if(repasswordWrong) {
        //     setFormErrors("Repeat password") 
    }

    const toContin = () => {
        const e = errorsHandler()
        if(e.length !== 0) {
            message(e)
        } else {
            registerHandler()
        }
    }

    return (
        <>
        <div className={registerActive ? cn(s.popup, s.active): s.popup}>
            <div className={s.in}>
                <div className={s.popupHeader}>
                    <h3>
                        Регистрация
                    </h3>
                    <div className={cn(s.close, s.eas)} onClick={() => setRegisterActive(false)}>
                        <span className={s.flaticonClose}>X</span>
                    </div>
                </div>
                <div className={s.popupContainer}>
                    <form name='form-signup'>
                        <div className={s.line}>
                            <input 
                                type='text' 
                                className={s.inp} 
                                name='username' 
                                placeholder='Логин'
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={s.line}>
                            <input 
                                type='text' 
                                className={s.inp} 
                                name='email' 
                                placeholder='E-mail'
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={s.line}>
                            <input 
                                type='password' 
                                className={s.inp} 
                                name='password' 
                                placeholder='Пароль'
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={s.line}>
                            <input 
                                type='text' 
                                id='repassword'
                                className={s.inp} 
                                name='repassword' 
                                placeholder='Повтор пароля'
                                onChange={rePasswordHandler}
                            />
                        </div>
                        <div className={s.lineInfo}>
                            <p>
                                Создавая аккаунт вы соглашаетесь с <a href='/#'>правилами обработки персональных данных</a> и <a href='/#'>правилами сервиса</a>
                            </p>
                        </div>
                        <div className={cn(s.line, s.lineButtons)}>
                            <div className={s.fl}>
                                <button 
                                    className={cn(s.btn, s.green)}
                                    type="button"
                                    onClick={toContin}
                                    disabled={loading}
                                >
                                    Создать аккаунт
                                </button>
                            </div>
                            <div className={s.fl}>
                                <p>
                                    Есть аккаунт? <button onClick={switchModals} className={s.link} type={"button"}>Войти</button>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>   
        <ToastContainer/>    
        </>
    )
}

export default ModalRegister