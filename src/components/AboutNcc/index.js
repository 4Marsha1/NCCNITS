import React, { useState } from 'react';
import styles from './AboutNcc.module.css';
import Tab from '../AboutNCCTab';
import logo from '../../uploads/logo.png';

import ToTheTopBtn from '../ToTheTop';

const Index = ({ data }) => {

    const heading = data.filter(section => section.tab == 0);
    const { header, content } = heading[0];

    const tabs = data.filter(section => section.tab != 0);

    const [tab, setTab] = useState(1);

    const setValue = (num) => {
        setTab(num);
        console.log(tab);
    }

    return (
        <div className={styles['container']}>
            <ToTheTopBtn />
            <img className={styles['logo']} src={logo} alt='ncc logo' />
            <span className={styles['header']}>{header}</span>
            <div className={styles['desc-container']}>
                <p className={styles['desc']}>{content}</p>
            </div>
            <div className={styles['hr']}></div>

            <div className={styles['section-navbar']}>
                {tab === 1 ?
                    <span className={styles['active-tab']} onClick={() => setValue(1)}>History</span> :
                    <span className={styles['tab']} onClick={() => setValue(1)}>History</span>}
                {tab === 2 ?
                    <span className={styles['active-tab']} onClick={() => setValue(2)}>Motto of NCC</span> :
                    <span className={styles['tab']} onClick={() => setValue(2)}>Motto of NCC</span>}
                {tab === 3 ?
                    <span className={styles['active-tab']} onClick={() => setValue(3)}>NCC Pledge</span> :
                    <span className={styles['tab']} onClick={() => setValue(3)}>NCC Pledge</span>}
                {tab === 4 ?
                    <span className={styles['active-tab']} onClick={() => setValue(4)} >NCC Flag</span> :
                    <span className={styles['tab']} onClick={() => setValue(4)}>NCC Flag</span>}
                {tab === 5 ?
                    <span className={styles['active-tab']} onClick={() => setValue(5)}>NCC Song</span> :
                    <span className={styles['tab']} onClick={() => setValue(5)}>NCC Song</span>}
                {tab === 6 ?
                    <span className={styles['active-tab']} onClick={() => setValue(6)}>Centrally Organised Camps</span> :
                    <span className={styles['tab']} onClick={() => setValue(6)}>Centrally Organised Camps</span>}
                {tab === 7 ?
                    <span className={styles['active-tab']} onClick={() => setValue(7)}>Training</span> :
                    <span className={styles['tab']} onClick={() => setValue(7)}>Training</span>}
                {tab === 8 ?
                    <span className={styles['tab']} onClick={() => setValue(8)}>Certification Programme</span> :
                    <span className={styles['tab']} onClick={() => setValue(8)}>Certification Programme</span>}
            </div>

            <Tab type={tab} tabs={tabs} />
        </div>
    )
}

export default Index
