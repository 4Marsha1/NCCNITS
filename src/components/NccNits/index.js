import React, { useState } from 'react';
import styles from './NccNits.module.css';
import Tab from '../NCCNITSTabs';

const Index = () => {
    const [tab, setTab] = useState(1);
    const handleClick = (num) => {
        setTab(num);
    }
    console.log(tab);
    return (
        <div className={styles['nccnits-container']}>
            <span className={styles['title']}>Meet the Council</span>
            <span className={styles['title-underline']}></span>
            <div className={styles['council']}>
                <div className={styles["box"]}>
                    <span className={styles['content-title']}>Central Commander (SD)</span>
                    <span className={styles['content']}>(SUO)Madhurjya Borgohain 2018-19</span>
                    <span className={styles['content']}>(SUO)Biki Mahato 2017-18</span>
                    <span className={styles['content']}>(SUO)Kishore Krishna 2016-17</span>
                    <span className={styles['content']}>(SUO)Birjon Boro 2015-16</span>
                    <span className={styles['content']}>(SUO)Birjon Boro 2015-16</span>
                </div>
                <div className={styles["box"]}>
                    <span className={styles['content-title']}>Senior Wing</span>
                    <span className={styles['content']}>  (SUO)Rachna Kumari Bohra 2018-19 </span>
                    <span className={styles['content']}>  (SUO)Dimpi Charleston Baruah 2017-18 </span>
                    <span className={styles['content']}>  (SUO)Shruti Datta Gupta 2016-17 </span>
                </div>
                <div className={styles["box"]}>
                    <span className={styles['content']}> (CTO)(SD)M.Suraj Singh </span>
                </div>
                <div className={styles["box"]}>
                    <span className={styles['content']}> (CTO)(SD)M.Suraj Singh </span>
                </div>
            </div>
            <div className={styles['hr']}></div>

            <div className={styles['selection-bar']}>
                {tab === 1 ?
                    <span className={styles['active-tab']} onClick={() => handleClick(1)}>Independence Day & Republic Day</span>
                    : <span className={styles['tab']} onClick={() => handleClick(1)}>Independence Day & Republic Day</span>}
                {tab === 2 ?
                    <span className={styles['active-tab']} onClick={() => handleClick(2)}>Cloth Donation</span> :
                    <span className={styles['tab']} onClick={() => handleClick(2)}>Cloth Donation</span>
                }
                {tab === 3 ?
                    <span className={styles['active-tab']} onClick={() => handleClick(3)}>New Enrollment Procedure</span> :
                    <span className={styles['tab']} onClick={() => handleClick(3)}>New Enrollment Procedure</span>}
            </div>

            <Tab type={tab} />
        </div>
    )
}

export default Index
