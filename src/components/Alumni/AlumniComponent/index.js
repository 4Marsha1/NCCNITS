import React, { useState } from 'react';
import styles from './Alumni.Module.css';
import Popup from '../../AlumniPopup';
import quoteList from '../data';

const Index = () => {
    const [tab, setTab] = useState(1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [quotes, setQuotes] = useState([]);

    const handleClick = (num) => {
        setTab(num);
        const q = quoteList.filter((quote) => quote.cat == num);
        setQuotes(q);
        setIsPopupOpen(!isPopupOpen);
    }

    console.log(quotes);
    return (
        <div className={styles['alumni-component']}>
            <span className={styles['title']}>Alumni</span>
            <span className={styles['title-underline']}></span>
            <div className={styles['years']}>
                <div className={styles['year']} onClick={() => handleClick(2015)}>2015</div>
                <div className={styles['year']} onClick={() => handleClick(2016)}>2016</div>
                <div className={styles['year']} onClick={() => handleClick(2017)}>2017</div>
                <div className={styles['year']} onClick={() => handleClick(2018)}>2018</div>
                <div className={styles['year']} onClick={() => handleClick(2019)}>2019</div>
                <div className={styles['year']} onClick={() => handleClick(2020)}>2020</div>
            </div>
            <span className={styles['title']}>Alumni Achievements</span>
            <span className={styles['title-underline']}></span>
            {isPopupOpen ?
                <Popup
                    togglePopup={() => setIsPopupOpen(!isPopupOpen)}
                    quotes={quotes}
                />
                : <></>}
        </div>
    )
}

export default Index
