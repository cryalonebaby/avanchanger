import React from 'react'
import s from './style.module.css'

const BlogNews = ({ img, title, link, date, text, minus = 0 }) => {
    let parsed = new Date().getTime()
    let dateObj = new Date(parsed - minus)

    console.log(minus);

    let day = dateObj.getDate()
    let month = dateObj.toLocaleString('ru', { month: 'short' })
    let year = dateObj.getFullYear()

    const bigMonth = month[0].toUpperCase() + month.slice(1, 3)

    return (
        <div className={s.news}>
            <div className={s.image}>
                <a href={link} target={'_blank'} rel={'noreferrer'}>
                    <img src={img} alt='Цена выросла' />
                </a>
            </div>
            <div className={s.c}>
                <h3>
                    <a href={link}>{title}</a>
                </h3>
                <div className={s.date}>
                    {day} {bigMonth} {year}
                </div>
                <div className={s.short}>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default BlogNews