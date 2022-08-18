import React from 'react'
import s from './cancel.module.css'

const CancelPage = () => {
    return (
        <div className={s.cancel}>
            <div className={s.inner}>
                <h1>
                    <span className={s.icon}>
                        <span className={s.close}>X</span>
                    </span>
                    Заявка отменена
                </h1>
                <div className={s.info}>
                    Заявка отменена, так как истекло время ожидания оплаты
                </div>
            </div>
        </div>
    );
};

export default CancelPage;