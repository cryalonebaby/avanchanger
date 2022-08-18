import React from 'react'
import s from '../../pages/reviews.module.css'
import {BiGhost} from 'react-icons/bi'
import { AiFillStar} from 'react-icons/ai'

// const Review = ({srcBest, srcSumo, name, date, text, link}) => {
//     const arrDate = date.split(' ')
//     const check = link.slice(8, 25) === 'www.bestchange.ru'
//     return (
//         <div className={s.item}>
//             <div className={s.img}>
//                 <span className={s.flaticonGhost}>
//                     <BiGhost size={38} className={s.iconGhost}/>    
//                 </span>    
//             </div>
//             <div className={s.name}>
//                 <a href={link} target={'_blank'} rel={'noreferrer'}>{name}</a>
//                 <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
//                 <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
//                 <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
//                 <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
//                 <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
//             </div>
//             <div className={s.date}>
//                 <p>{`${arrDate[0]} ${arrDate[1]} ${arrDate[2]} ${arrDate[3]}`}</p>
//                 <span>{arrDate[4]}</span>
//             </div>
//             <div className={s.text}>
//                 <p>
//                     {text.replace('Отзыв опубликован на', '')}
//                 </p>
//                 <div className={s.external}>  
//                     Отзыв опубликован на
//                     <a href={link} target={'_blank'} rel={'noreferrer'}>
//                         <img src={check ? srcBest : srcSumo} alt={'Review'}/>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }
const Review = ({src, name, date, ip, text, link, minus}) => {
    let parsed = new Date().getTime()
    let dateObj = new Date(parsed - minus)

    let day = dateObj.getDate()
    let month = dateObj.toLocaleString('ru', {month: 'short'})
    let year = dateObj.getFullYear()
    let hour = dateObj.getHours()
    let minute = dateObj.getMinutes()

    const fullDay = ('0' + day).slice(-2)
    const fullHours = ('0' + hour).slice(-2)
    const fullMinutes = ('0' + minute).slice(-2)

    const bigMonth = month[0].toUpperCase() + month.slice(1, 3)

    return (
        <div className={s.item}>
            <div className={s.img}>
                <span className={s.flaticonGhost}>
                    <BiGhost size={38} className={s.iconGhost}/>    
                </span>    
            </div>
            <div className={s.name}>
                <a href={link} target={'_blank'} rel={'noreferrer'}>{name}</a>
                <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
                <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
                <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
                <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
                <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
            </div>
            <div className={s.date}>
                <p>{`${fullDay} ${bigMonth} ${year}, ${fullHours} ${fullMinutes}`}</p>
                <span>{ip}</span>
            </div>
            <div className={s.text}>
                <p>
                    {text}
                </p>
                <div className={s.external}>  
                    Отзыв опубликован на
                    <a href={link} target={'_blank'} rel={'noreferrer'}>
                        <img src={src} alt={'Review'}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Review