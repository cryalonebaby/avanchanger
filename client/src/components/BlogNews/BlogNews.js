import React from 'react'
import s from './style.module.css'

const BlogNews = ({img, title, link, date, text}) => {
  return (
    <div className={s.news}>
        <div className={s.image}>
            <a href={link} target={'_blank'} rel={'noreferrer'}>
                <img src={img} alt='Цена выросла'/>
            </a>
        </div>
        <div className={s.c}>
            <h3>
                <a href={link}>{title}</a>
            </h3>
            <div className={s.date}>
                {date}
            </div>
            <div className={s.short}>
                {text}
            </div>
        </div>
    </div>
  )
}

export default BlogNews