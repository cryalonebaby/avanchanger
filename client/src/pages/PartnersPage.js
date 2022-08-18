import React from 'react'
import s from './partners.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom';

const PartnersPage = () => {
    return (
        <div className={s.static}>
            <div className={s.inner}>
                <h1>Партнерам</h1>
                <div className={s.partners}>
                    <div className={s.partnersHeader}>
                        <div className={s.l}>
                            <div className={s.step}>1</div>
                            <h3>Программа лояльности</h3>
                            <div className={s.desc}>для постоянных клиентов</div>
                        </div>
                        <div className={s.r}>
                            <Link to={'/ru/account'} className={cn(s.btn, s.white)}>Посмотреть историю</Link>
                            <div className={s.count}>Ваши баллы: 0</div>
                        </div>
                    </div>
                    <div className={s.partnersContent}>
                        <p>
                            Зарегистрируйтесь и делайте обмены со своего аккаунта. После каждого обмена вам будут начислены баллы. Чем больше баллов вы заработаете - тем выше ваша скидка при обмене. На данный момент мы имеем 6 уровней в программе лояльности: 
                            <b> 3%, 5%, 7%, 10%, 12%, 15% </b>
                            соответственно. Первый уровень вовсе не требует обмена, для него достаточно просто зарегистрироваться в сервисе.
                        </p>
                        <div className={s.infobox}>
                            За каждую операцию вам начисляются баллы в количестве 
                            <b>
                                <span className={s.textBlue}> 5% </span>
                                от суммы обмена в эквиваленте у.е.  USD
                            </b>
                            .
                            <br/>
                            Например: 
                            <b>
                                вы осуществили обмен 
                                <span className={s.textBlue}> 1000 USD </span>
                                вам будет начислено 
                                <span className={s.textBlue}> 50 баллов </span>
                            </b>
                        </div>
                        <div className={s.progress}>
                            <div className={cn(s.item, s.i1)}>
                                <div className={s.percent}>3%</div>
                                <div className={s.name}>Начальный</div>
                                <div className={s.points}>0 баллов</div>
                                <div className={s.here}>Вы тут</div>
                            </div>
                            <div className={cn(s.item, s.i2)}>
                                <div className={s.percent}>3%</div>
                                <div className={s.name}>Начальный</div>
                                <div className={s.points}>0 баллов</div>
                            </div>
                            <div className={cn(s.item, s.i3)}>
                                <div className={s.percent}>3%</div>
                                <div className={s.name}>Начальный</div>
                                <div className={s.points}>0 баллов</div>
                            </div>
                            <div className={cn(s.item, s.i4)}>
                                <div className={s.percent}>3%</div>
                                <div className={s.name}>Начальный</div>
                                <div className={s.points}>0 баллов</div>
                            </div>
                            <div className={cn(s.item, s.i5)}>
                                <div className={s.percent}>3%</div>
                                <div className={s.name}>Начальный</div>
                                <div className={s.points}>0 баллов</div>
                            </div>
                            <div className={cn(s.item, s.i6)}>
                                <div className={s.percent}>3%</div>
                                <div className={s.name}>Начальный</div>
                                <div className={s.points}>0 баллов</div>
                            </div>
                            <div className={s.line}></div>
                        </div>
                        <div className={s.partnersInfo}>
                            <div className={s.title}>
                                Рассмотрим пример на уровне
                                <span className={s.textBlue}> «Дозорный» </span> 
                                со скидкой 10%
                            </div>
                            Предположим комиссия за текущую операцию составляет 
                            <b> 2.5%. </b>
                            <br/>
                            Итого, при обмене для вас комиссия будет составлена по формуле: 
                            <b> 2.5% - 2.5*10/100 = 2,25%</b>
                        </div>
                    </div>
                </div>
                <div className={cn(s.partners, s.partners2)}>
                    <div className={s.partnersHeader}>
                        <div className={s.l}>
                            <div className={s.step}>2</div>
                            <h3>Партнерская программа</h3>
                            <div className={s.desc}>приведи друзей - заработай больше</div>
                        </div>
                        <div className={s.r}>
                            <Link to={'/ru/account'} className={cn(s.btn, s.white)}>Моя партнерка</Link>
                        </div>
                    </div>
                    <div className={s.partnersContent}>
                        <p>
                            После регистрации в своем кабинете Вы найдете Вашу 
                            <Link to={'/ru/account'}> партнерскую ссылку</Link>
                            . Любой пользователь может принести Вам прибыль за каждый свой обмен, совершенный после перехода на наш сайт по Вашей ссылке.
                        </p>
                        <p>
                            Размер вознаграждения составляет 
                            <b> 25% от прибыли нашего обменного сервиса. </b>
                            Как видите, мы готовы щедро вознаграждать наших партнеров. Расчет и вывод заработанных средств можно осуществить в
                            <Link to={'/ru/account'}> личном кабинете</Link> 
                        </p>
                        <div className={s.stats}>
                            <div className={s.partnersStats}>
                                <div className={cn(s.number, s.n1)}>23,792</div>
                                Всего привели друзей
                            </div>
                            <div className={s.partnersStats}>
                                <div className={cn(s.number, s.n2)}>458 USD</div>
                                Выдано за неделю
                            </div>
                            <div className={s.partnersStats}>
                                <div className={cn(s.number, s.n3)}>35,923 USD</div>
                                Выдано за все время
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersPage;