import React from 'react'
import s from './reviews.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom';
import Review from '../components/Review/Review';
import findImg from '../utils/img';
import { useMessage } from '../hooks/message.hook';
import { AiFillStar} from 'react-icons/ai'

const ReviewsPage = () => {
    const {Best, Summo, Kurs, Pro, Glazok, Top, Ex, Mmgp, Talk, Pilot, Wot} = findImg()
    const message = useMessage()

    const names = [
        'Юпитер-У', 
        'Владлен', 
        'Кулаков А', 
        'Arina',
        'Aleksandr',
        'Дима',
        'Стрелец',
        'Виталий',
        'Escobar',
        'Андрей',
        'Михаил',
        'Ruslan',
        'Павел',
        'Леонид',
        'Иван',
        'More',
        'Алихан',
        'Алиса',
        'Азалия',
        'Valery',
        'Александра',
        'Svetlana',
        'Good.boy.228.007',
        'Alizade',
        'Принглс',
        'Алисия',
        'Vagarsh',
        'Аслан',
        'Andro',
        '6Ix9Ine',
        'Adam',
        'мастер',
        'Smerch',
        'Gorbi',
        'Dmitri',
        'Кирилл',
        'Виктор',
        'Лиза',
        'Kirill',
        'Mr',
        'Nesquik',
        'Любовь',
        'Ништяк',
        'Татарин',
        'Максим',
        'Эдвард',
        'Илья',
        'Eva',
        'Alixan',
        'Гранд',
        'Viacheslav',
        'Ayder',
        'Evgeny',
        'Белуга',
        'Ярик',
        'Данила',
        'Пётр',
    ]

    const revs = [
        'Превосходный обменник, всё сделали быстро и качественно!', 
        'Лучший сервис. Спасибо за обмен', 
        'Сегодня первый раз воспользовался этим сервисом\nПолёт нормальный, биток пришёл на бинанс в течение 10 минут ;-)', 
        'Топовый обменник',
        'На юмани за пару сек. Рекомендую однозначно',
        'Хорошая консультация, удобный сайт, быстрый обмен !!!\nМне понравились ребята) Буду с вами',
        'Спасибо большое за оперативность',
        'Обмен без лишних движений, четко и быстро.',
        'Курс зафиксировали на момент сделки, отправили деньги спустя 5 минут, после перевода',
        'Меняю только тут',
        'Классный обменник. Спасибо вам за вашу работу',
        'Меняю только тут',
        'Обменяли быстро. Без обмана',
        'Eth -> btc\nЛегко и быстро. Рекомендую',
        'Оперативненько, молодцы ребята',
        'Всё очень быстро. без проблем. рекомендую.',
        'Все прошло отлично!',
        'Быстрый обмен, хороший курс, служба поддержки ответила на вопрос очень оперативно.',
        'Avanchange это обменник с самым лучшим курсом на минимальную сумму и при этом не нужно заполнять кучу данных, только самое важное. Обмен происходит быстро, просто и информативно благодаря приятному, оригинальному дизайну. При всем при этом еще и регулярные розыгрыши призов проводят. Хочется пожелать создателям Avanchange огромного успеха и навсегда сохранить такой отличный сервис. Большое Вам спасибо!',
        'Отличный стабильный обменник, всё быстро приходит не каких задержек интуитивно понятный',
        'Хорошая консультация, удобный сайт, быстрый обмен !!!\nМне понравились ребята) Буду с вами)',
        'Быстрый вывод. Без задержек. Без лишней комиссии. Постоянно пользуюсь данной платформой. Рекомендую',
        'Cамый лучший сервис. Курс отличный',
        'Отличный обменник. Хороший курс, быстрый обмен, отличная работа тех поддержки?',
        'Как всегда быстро и качественно!',
        'Очень быстро и без обмана. Ребята спасибо. Рекомендую',
        'Отличный сайт, обменный был быстрым, рекомендую!',
        'Молниеносный обмен. Спасибо за оперативность',
        'Лучший топовый обменник, рекомендую',
        'Обмен за 5 минут\nСпасибо большое',
    ]

    const shuffled = names.sort(() => 0.5 - Math.random())
    const revShuffled = revs.sort(() => 0.5 - Math.random())

    let selected = shuffled.slice(0, 20)
    let revSelected = revShuffled.slice(0, 20)

    // const [error, setError] = useState('')
    // const [loading, setLoading] = useState(false)

    // const finalMsg = error === '' ? 'Загрузка...' : 'Не удалось загрузить отзывы, попробуйте еще раз'

    // let reviewObj = {
    //     names: [],
    //     text: [],
    //     date: [],
    //     links: [],
    //     amount: []
    // }

    // const [reviews, setReviews] = useState(reviewObj)

    // useEffect(() => {
    //     let isCancel = false
    //     const getReviews = async () => {
    //         try {
    //             if(!isCancel) {
    //                 setLoading(true)
    //                 const response = await axios.get('/api/payment/abc')
    //                 const data = await response.data
    //                 // const data = await response.data
    //                 data !== undefined && setReviews(data)
    //                 setLoading(false)

    //                 return data
    //             }
    //         } catch (e) {
    //             console.log(e)
    //             setError(e)
    //         }
    //     }
    //     getReviews()

    //     return () => {isCancel = true}
    // }, [])

    return (
        <>
        <div className={cn(s.static, s.reviews)}>
            <div className={s.inner}>
                <h1>Отзывы</h1>
            </div>
        </div>
        <div className={s.reviewsExt}>
            <div className={s.inner}>
                <h2>Что о нас пишут</h2>
                <div className={s.info}>
                    Есть какие-либо сомнения относительно нас? Прочитайте публикации крупных информационных изданий о работе 
                    <Link to={'/'}> AvanChange</Link>
                    , как мы помогаем нашим клиентам осуществлять обмен с минимально возможной комиссией и всего за несколько кликов!
                </div>
                <div className={s.box}>
                    <h3>На мониторингах</h3>
                    <ul>
                        <li>
                            <a href="https://www.bestchange.ru/avanchange-exchanger.html" target="_blank" rel="noreferrer">
                                <img src={Best} alt="AvanChange"/>
                                <span className={s.count}>2347+</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://exchangesumo.com/exchanger/955/Avanchange/" target="_blank" rel="noreferrer">
                                <img src={Summo} alt="AvanChange"/>
                                <span className={s.count}>2497+</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://kurs.expert/ru/obmennik/avanchange-com/feedbacks.html" target="_blank" rel="noreferrer">
                                <img src={Kurs} alt="AvanChange"/>
                                <span className={s.count}>85+</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://pro-obmen.ru/avanchange" target="_blank" rel="noreferrer">
                                <img src={Pro} alt="AvanChange"/>
                                <span className={s.count}>47+</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://glazok.org/exchange/?details=911" target="_blank" rel="noreferrer">
                                <img src={Glazok} alt="AvanChange"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://topmonitoring.ru/exchangers/493/" target="_blank" rel="noreferrer">
                                <img src={Top} alt="AvanChange"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://pro-ex.club/ru/exchangers/Avanchange" target="_blank" rel="noreferrer">
                                <img src={Ex} alt="AvanChange"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={s.box}>
                    <h3>На форумах</h3>
                    <ul>
                        <li>
                            <a href="https://glazok.org/exchange/?details=911" target="_blank" rel="noreferrer">
                                <img src={Mmgp} alt="AvanChange"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://glazok.org/exchange/?details=911" target="_blank" rel="noreferrer">
                                <img src={Talk} alt="AvanChange"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={s.box}>
                    <h3>А также</h3>
                    <ul>
                        <li>
                            <a href="https://glazok.org/exchange/?details=911" target="_blank" rel="noreferrer">
                                <img src={Pilot} alt="AvanChange"/>
                                <span className={s.count}>186+</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://glazok.org/exchange/?details=911" target="_blank" rel="noreferrer">
                                <img src={Wot} alt="AvanChange"/>
                                <span className={s.count}>24+</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={cn(s.static, s.reviewsBlock)}>
            <div className={s.inner}>
                <div className={s.reviewsL}>
                    <h3>Отзывы после сделок</h3>
                    {/* {
                        loading 
                        ? <b>{finalMsg}</b>
                        : reviews.names.map((name, index) => {
                            return <Review
                                    key={index}
                                    srcBest={Best}
                                    srcSumo={Summo}
                                    name={name}
                                    link={reviews.links[index]}
                                    date={reviews.date[index]}
                                    text={reviews.text[index]}
                            />
                        })
                    } */}
                    <Review
                        src={Best}
                        name={selected[0]}
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1405564'
                        date='16 Апр 2022, 08:16 '
                        ip='82.118.22.*'
                        text={revSelected[0]}
                        minus={9000000}
                    />
                    <Review
                        src={Best}
                        name={selected[1]}
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1405341'
                        date='15 Апр 2022, 22:17 '
                        ip='188.241.177.*'
                        text={revSelected[1]}
                        minus={19999999}
                    />
                    <Review
                        src={Summo}
                        name={selected[2]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 19:23 '
                        ip='188.241.177.*'
                        text={revSelected[2]}
                        minus={29999999}
                    />
                    <Review
                        src={Summo}
                        name={selected[3]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 19:22 '
                        ip='188.241.177.*'
                        text={revSelected[3]}
                        minus={49999999}
                    />
                    <Review
                        src={Summo}
                        name={selected[4]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 19:21 '
                        ip='188.241.177.*'
                        text={revSelected[4]}
                        minus={69999999}
                    />
                    <Review
                        src={Summo}
                        name={selected[5]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 19:19  '
                        ip='188.241.177.*'
                        text={revSelected[5]}
                        minus={79999999}
                    />
                    <Review
                        src={Best}
                        name={selected[6]}
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1405067'
                        date='15 Апр 2022, 18:09 '
                        ip='92.124.163.*'
                        text={revSelected[6]}
                        minus={99999999}
                    />
                    <Review
                        src={Summo}
                        name={selected[7]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 16:19 '
                        ip='31.40.25.*'
                        text={revSelected[7]}
                        minus={109999999}
                    />
                    <Review
                        src={Best}
                        name={selected[8]}
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1405564'
                        date='16 Апр 2022, 08:16 '
                        ip='188.241.177.*'
                        text={revSelected[8]}
                        minus={116666666}
                    />
                    <Review
                        src={Summo}
                        name={selected[9]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 14:56 '
                        ip='31.40.25.*'
                        text={revSelected[9]}
                        minus={159999999}
                    />
                    <Review
                        src={Summo}
                        name={selected[10]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 12:32 '
                        ip='146.70.82.*'
                        text={revSelected[10]}
                        minus={169999999}
                    />
                    <Review
                        src={Summo}
                        name={selected[11]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 11:52 '
                        ip='31.40.25.*'
                        text={revSelected[11]}
                        minus={179999999}
                    />
                    <Review
                        src={Best}
                        name={selected[12]}
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1404544'
                        date='15 Апр 2022, 10:57 '
                        ip='185.245.85.*'
                        text={revSelected[12]}
                        minus={199999999}
                    />
                    <Review
                        src={Best}
                        name={selected[13]}
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1404541'
                        date='15 Апр 2022, 10:55 '
                        ip='88.208.221.*'
                        text={revSelected[13]}
                        minus={211111111}
                    />
                    <Review
                        src={Summo}
                        name={selected[14]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 10:43 '
                        ip='146.70.16.*'
                        text={revSelected[14]}
                        minus={233333333}
                    />
                    <Review
                        src={Summo}
                        name={selected[15]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 08:38 '
                        ip='31.207.207.*'
                        text={revSelected[15]}
                        minus={255555555}
                    />
                    <Review
                        src={Summo}
                        name={selected[16]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 07:30 '
                        ip='31.40.25.*'
                        text={revSelected[16]}
                        minus={266666666}
                    />
                    <Review
                        src={Summo}
                        name={selected[17]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 03:23 '
                        ip='31.40.25.*'
                        text={revSelected[17]}
                        minus={277777777}
                    />
                    <Review
                        src={Best}
                        name={selected[18]}
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1404313'
                        date='15 Апр 2022, 02:15 '
                        ip='37.252.80.*'
                        text={revSelected[18]}
                        minus={288888888}
                    />
                    <Review
                        src={Summo}
                        name={selected[19]}
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='14 Апр 2022, 19:08 '
                        ip='51.15.107.*'
                        text={revSelected[19]}
                        minus={299999999}
                    />
                </div>
                <div className={s.reviewsR}>
                    <div className={s.reviewsTotal}>
                        <div className={s.t}>
                            Оценка сервиса
                        </div>
                        <div className={s.n}>
                            {/* {!loading ? 5 : 'Загрузка...'} */}
                            5
                        </div>
                        <div className={s.s}>
                            {/* {!loading ? 
                            <div>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                            </div>
                            : null
                            } */}
                            <div>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                            </div>
                        </div>
                        <div className={s.o}>
                            {/* {!loading ? reviews.amount[0] : null} */}
                            На основе 5077 отзывов
                        </div>
                    </div>
                    <div className={s.reviewsAdd}>
                        <form name='form-review'>
                            <div className={s.t}></div>
                            <div className={s.line}>
                                <input type={'text'} name={'name'} className={s.inp} placeholder='Ваше Имя'/>
                            </div>
                            <div className={s.line}>
                                <input type={'text'} name={'email'} className={s.inp} placeholder='E-mail'/>
                            </div>
                            <div className={s.line}>
                                <textarea name='message' className={s.textarea} placeholder='Текст отзыва'></textarea>
                            </div>
                            <div className={s.line}>
                                <div className={s.button}>
                                    <button className={s.btn} type='button' onClick={() => message('Не удалось отправить отзыв, попробуйте позже')}>Написать</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ReviewsPage;