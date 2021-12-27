import React from 'react';
import styles from './styles.module.css';

const Index = ({ strengthDetails }) => {

    const section = strengthDetails.map(tab => {
        return (
            <div className={styles['section']}>
                <span className={styles['btn-title']}>{tab.section}</span>
                <span className={styles['number']}>Number of Cadets</span>
                <span className={styles['year']}>Fourth Year : {tab.fourth}</span>
                <span className={styles['year']}>Third Year : {tab.third}</span>
                <span className={styles['year']}>Second Year : {tab.second}</span>
                <span className={styles['year']}>First Year : {tab.first}</span>
            </div>
        )
    })

    return (
        <>
            <div className={styles['parent']}>
                {section}
            </div>
        </>
    )
}

export default Index
