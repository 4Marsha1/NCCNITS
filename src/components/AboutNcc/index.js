import React, { useState } from 'react';
import styles from './AboutNcc.module.css';
import Tab from '../AboutNCCTab';
import logo from '../../uploads/logo.png';

const Index = () => {

    const [tab, setTab] = useState(1);

    const setValue = (num) => {
        setTab(num);
        console.log(tab);
    }

    return (
        <div className={styles['container']}>
            <img className={styles['logo']} src={logo} alt='ncc logo' />
            <span className={styles['header']}>National Cadet Corps</span>
            <div className={styles['desc-container']}>
                <p className={styles['desc']}>
                    The National Cadet Corps is the Indian military cadet corps with its head Quarters at New Delhi.
                    It is open to school and college students on voluntary basis.The National Cadet Corps in India
                    is a voluntary organization which recruits cadets from high schools, colleges and Universities
                    all over India. The Cadets are given basic military training in small arms and parades. The officers and cadets have no liability for active military service once they complete their course but are given preference over normal candidates during selections based on the achievements in the corps.
                </p>
            </div>
            <div className={styles['hr']}></div>

            <div className={styles['section-navbar']}>
                {tab === 1 ?
                    <span className={styles['active-tab']} onClick={() => setValue(1)}>History</span> :
                    <span className={styles['tab']} onClick={() => setValue(1)}>History</span>}
                {tab === 2 ?
                    <span className={styles['active-tab']} onClick={() => setValue(2)}>Motto of NCC</span> :
                    <span className={styles['tab']} onClick={() => setValue(2)}>Motto of NCC</span>}
                <span className={styles['tab']}>NCC Pledge</span>
                <span className={styles['tab']}>NCC Flag</span>
                <span className={styles['tab']}>NCC Song</span>
                <span className={styles['tab']}>Centrally Organised Camps</span>
                <span className={styles['tab']}>Certification Programme</span>
            </div>

            <Tab type={tab} />
        </div>
    )
}

export default Index
