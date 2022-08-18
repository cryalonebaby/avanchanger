import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import {useState} from 'react'
import {ReactComponent as LogoWhite} from '../../img/logo.svg'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleNav = () => {
        setOpen(prev => !prev)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.mainNav}>
                <div className={s.logo}>
                    <Link to={'/ru/'}>
                        {/* <img src={Logo} alt='Logo'/> */}
                        <LogoWhite id='logoWhite'/>
                    </Link>
                </div>
                <Navigation toggleNav={toggleNav}/>
                <MobileNavigation open={open} toggleNav={toggleNav}/>
            </div>
        </div>

        
    )
}

export default Navbar
