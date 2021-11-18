import React, { useState } from 'react';
import styles from './NccNits.module.css';
import Tab from '../Tabs';

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
                    <span className={styles['content']}> Lorem ipsum dolor </span>
                    <span className={styles['content']}> Lorem ipsum dolor </span>
                    <span className={styles['content']}> Lorem ipsum dolor </span>
                    <span className={styles['content']}> Lorem ipsum dolor </span>
                </div>
                <div className={styles["box"]}>
                    <span className={styles['content-title']}>Senior Wing</span>
                    <span className={styles['content']}> Lorem ipsum dolor </span>
                    <span className={styles['content']}> Lorem ipsum dolor </span>
                    <span className={styles['content']}> Lorem ipsum dolor </span>
                </div>
                <div className={styles["box"]}>
                    <span className={styles['content']}> Lorem ipsum dolor </span>
                </div>
                <div className={styles["box"]}>
                    <span className={styles['content']}> Lorem ipsum dolor </span>
                </div>
            </div>
            <div className={styles['hr']}></div>

            <div className={styles['selection-bar']}>
                {tab === 1 ?
                    <span className={styles['active-tab']} onClick={() => handleClick(1)}>Independence & Republic Day</span>
                    : <span className={styles['tab']} onClick={() => handleClick(1)}>Independence & Republic Day</span>}
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
