import React, { useState } from 'react';
import styles from './Alumni.Module.css';
import quotes from '../data';

const Index = () => {
    const [tab, setTab] = useState(1);
    const handleClick = (num) => {
        setTab(num);

    }
    console.log(tab);
    return (
        <div className={styles['alumni-component']}>
            <span className={styles['title']}>Alumni</span>
            <span className={styles['title-underline']}></span>
            <div className={styles['years']}>
                <div className={styles['year']} onClick={() => handleClick(1)} >2015</div>
                <div className={styles['year']} onClick={() => handleClick(2)}>2016</div>
                <div className={styles['year']} onClick={() => handleClick(3)}>2017</div>
                <div className={styles['year']} onClick={() => handleClick(4)}>2018</div>
                <div className={styles['year']} onClick={() => handleClick(5)}>2019</div>
                <div className={styles['year']} onClick={() => handleClick(6)}>2020</div>
            </div>
            <span className={styles['title']}>Alumni Achievements</span>
            <span className={styles['title-underline']}></span>
        </div>
    )
}

export default Index
