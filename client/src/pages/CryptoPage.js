import React from 'react'
import s from './crypto.module.css'
import cn from 'classnames'
import Helper from '../img/helper.png'

const CryptoPage = () => {
    return (
        <>
        <div className={s.static}>
            <div className={s.inner}>
                <h1>Крипто-помощник</h1>
                <div className={s.cryptoImage}>
                    <div className={cn(s.coin, s.c1)}>
                        <img src={require("../img/coin-3.png")} alt="Bitcoin"/>
                    </div>
                    <div className={cn(s.coin, s.c2)}>
                        <img src={require("../img/coin-3.png")} alt="Bitcoin"/>
                    </div>
                    <div className={cn(s.coin, s.c3)}>
                        <img src={require("../img/coin-3.png")} alt="Bitcoin"/>
                    </div>
                    <img src={Helper} alt='Helper'/>
                </div>
                <div className={s.cryptoDesc}>
                    Уважаемые, Чубаки!
                    <br/>
                    Предлагаем помощь для разных ситуаций связанных с криптовалютой. Перечень услуг указан в списке ниже. Стоимость за услуги оценивается индивидуально исходя из сложности и трудоемкости заказа.
                    <ul>
                        <li className={s.title}>Услуги</li>
                        <li>Ускорение застрявшей транзакции <strong>(бесплатно)</strong></li>
                        <li>Генерация красивых биткоин адресов. Например: первые 1-8 символов с вашими буквами <strong>(индивидуально)</strong></li>
                        <li>Автоматическая проверка&nbsp;seed phrase на наличие баланса&nbsp;по более чем 40 монетам в различных путях деривации <strong>(индивидуально)</strong></li>
                        <li>Точный расчет необходимой комиссии для прихода средств в заданное Вами время <strong>(бесплатно)</strong></li>
                        <li>Индивидуальные консультации по криптовалютной тематике, помощь при регистрации и идентификации, помощь по трейдингу на биржах и иных площадках.<br/><strong>Участникам бонусной программы лояльности - бесплатно!</strong></li>
                    </ul>
                    <p>Подробнее в Telegram - <a href="https://t.me/avangardpro" target="_blank" rel='noreferrer'>@avangardpro</a></p>
                </div>  
            </div>
        </div>
        </>
    );
};

export default CryptoPage;