import React, { useState } from 'react';
import styles from './NccNits.module.css';
import Tab from '../NCCNITSTabs';

const Index = ({ data, council }) => {

    const [tab, setTab] = useState(1);

    const handleClick = (num) => {
        setTab(num);
    }

    const listify = (list) => list.map(item => {
        return <span className={styles['content']}>{item}</span>
    })

    return (
        <div className={styles['nccnits-container']}>
            <span className={styles['title']}>Meet the Council</span>
            <span className={styles['title-underline']}></span>
            <div className={styles['council']}>
                <div className={styles["box"]}>
                    <span className={styles['content-title']}>Central Commander (SD)</span>
                    {listify(council[0].list)}
                </div>
                <div className={styles["box"]}>
                    <span className={styles['content-title']}>Senior Wing</span>
                    {listify(council[1].list)}
                </div>
                <div className={styles["box"]}>
                    <span className={styles['content']}> {council[2].section}<br /> {council[2].name} </span>
                </div>
                <div className={styles["box"]}>
                    <span className={styles['content']}> {council[3].section}<br /> {council[3].name} </span>
                </div>
            </div>
            <div className={styles['hr']}></div>

            <div className={styles['selection-bar']}>
                {tab === 1 ?
                    <span className={styles['active-tab']} onClick={() => handleClick(1)}>Independence Day & Republic Day</span>
                    : <span className={styles['tab']} onClick={() => handleClick(1)}>Independence Day & Republic Day</span>}
                {tab === 2 ?
                    <span className={styles['active-tab']} onClick={() => handleClick(2)}>Diwali Donation</span> :
                    <span className={styles['tab']} onClick={() => handleClick(2)}>Diwali Donation</span>
                }
                {tab === 3 ?
                    <span className={styles['active-tab']} onClick={() => handleClick(3)}>New Enrollment Procedure</span> :
                    <span className={styles['tab']} onClick={() => handleClick(3)}>New Enrollment Procedure</span>}
            </div>

            <Tab type={tab} data={data} />
        </div>
    )
}

export default Index
