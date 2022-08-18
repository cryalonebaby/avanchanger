import React from 'react'
import s from './about.module.css'
import cn from 'classnames'
import {Link} from 'react-router-dom'

const AboutPage = () => {
    return (
        <div className={s.about}>
            <h1>О сервисе</h1>
            <div className={s.inner}>
                <div className={s.b1}>
                    <div className={s.l}>
                        Уже <b>более 4 лет</b> мы растём и развиваемся, помогая сотням клиентам совершать выгодные обмены в 4751 направлениях.
                    </div>
                    <div className={s.r}>
                        <div className={s.line}>
                            <div className={s.digit}>543</div>           
                            сделок за 7 дней
                        </div>
                        <div className={s.line}>
                            <div className={s.digit}>128<i>+</i></div>
                            отзывов за 7 дней
                        </div>
                    </div>
                </div>
                <div className={s.b2}>
                    <div className={cn(s.lines, s.slickSlider)}>
                        <div className={cn(s.line, s.slickSlide)}>
                            <div className={s.digit}>37 972</div>
                            <span>Количество обменов за все время</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.head}>
                <div className={s.l1}></div>
                <div className={s.l2}>
                    <p>Онлайн обменник криптовалют&nbsp;<Link to={'/ru/'}> AvanChange</Link>&nbsp;предлагает выгодные курсы по обмену электронных валют и не только. Осуществляем обмен Яндекс денег, QIWI, Альфа-Банк, Приват24, Тинькофф банк, Сбербанк VISA/MasterCard, Ethereum, Bitcoin. Однако, этими направлениями обменов не ограничивается. Мы постоянно добавляем новые направления исходя из спроса наших постоянных клиентов. Онлайн обменник электронных валют Exchange предлагает выгодную скидочную систему для постоянных клиентов. Более подробно можете ознакомиться в разделе Партнерам. Обязательно воспользуйтесь этими возможностями для более выгодного обмена.</p>
                    <p>Сервис не хранит ваши платежные данные, так как все платежи проходят на сайтах интернет-банкинга или же платежных систем. В добавок к этому, мы используем 256 битный SSL сертификат, что предотвращает хищение персональных данных при передаче с нашего сайта на сторону эквайринга банка.</p>
                    <p>Основная функция&nbsp;<Link to={'/ru/'}> AvanChange</Link>&nbsp;– это обмен, ввод и вывод электронных валют различных платежных систем России и СНГ. Миссия AvanChange – облегчить пользователям проведение любых операций с электронными деньгами платежных систем QIWI, Яндекс.Деньги (YooMoney), ADVCash, Payeer и др., помочь интернет-ресурсам создать эффективные инструменты для взаиморасчетов с клиентами, предоставить представителям традиционного бизнеса возможность оплаты их товаров и услуг с помощью электронных денег.</p>
                </div>
                <div className={s.l3}></div>
            </div>
            <div className={s.b3}>
                <h3>AvanChange — это выгодные курсы на все обменные направления</h3>
                <span>За последний месяц AvanChange успешно провел более <b>2 807</b> обменов</span>
                <div className={s.image}>
                    <img src={require('../img/about-coins.png')} alt='coins'/>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;