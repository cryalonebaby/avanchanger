import React from 'react'
import s from './error.module.css'
import cn from 'classnames'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className={cn(s.static, s.errorPage)}>
            <div className={s.inner}>
                <h1>404</h1>
                <div>
                    <span>К сожалению, вы столкнулись с ошибкой</span>
                </div>
                <div>Похоже, страница, которую вы ищете не существует.</div>
                <div className={s.buttons}>
                    <Link to={'/ru/'} className={s.btn}>Обмен криптовалют</Link>
                    <Link to={'/ru/support'} className={cn(s.btn, s.ghost)}>Тех.поддержка</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;