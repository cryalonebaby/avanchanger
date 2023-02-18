import React from 'react'
import s from './style.module.css'
import { useLocation } from "react-router-dom";
import HeaderMiddle from '../components/HeaderMiddle/HeaderMiddle'
import Statistic from '../components/Statistic/Statistic';
import About from '../components/About/About'
import Popular from '../components/Popular/Popular';
import Changes from '../components/Changes/Changes';
import Carousel from '../components/Carousel/Carousel';


const MainPage = () => {
    const location = useLocation()
    const { popularGive, popularTake } = location.state || {}

    return (
        <div className={s.container}>
            <HeaderMiddle
                popularGive={popularGive}
                popularTake={popularTake}
            />
            <Carousel />
            <Statistic />
            <About />
            <Changes />
            <Popular />
        </div>
    );
};

export default MainPage;