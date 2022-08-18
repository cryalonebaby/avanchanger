import React from 'react'
import s from './style.module.css'
import cn from 'classnames'

const Message = ({text, errorsActive, setErrorsActive}) => {
    return (
        <div className={errorsActive ? cn(s.popup, s.active) : s.popup}>
            <div className={s.in}>
                {text}
                <button onClick={() => setErrorsActive(false)}>CLOSE</button>
            </div>
        </div>
    )
}

export default Message