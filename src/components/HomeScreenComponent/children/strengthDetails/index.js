import React from 'react';
import styles from './styles.module.css';

const Index = ({ title, title1, title2, SD4, SD3, SD2, SD1, SW4, SW3, SW2, SW1 }) => {
    return (
        <>
            <span className={styles["title"]}>{title}</span>
            <span className={styles['title-underline']}></span>
            <div className={styles['parent']}>
                <div className={styles['section']}>
                    <span className={styles['btn-title']}>{title1}</span>
                    <span className={styles['number']}>Number of Cadets</span>
                    <span className={styles['year']}>Fourth Year : {SD4}</span>
                    <span className={styles['year']}>Third Year : {SD3}</span>
                    <span className={styles['year']}>Second Year : {SD2}</span>
                    <span className={styles['year']}>First Year : {SD1}</span>
                </div>
                <div className={styles['section']}>
                    <span className={styles['btn-title']}>{title2}</span>
                    <span className={styles['number']}>Number of Cadets</span>
                    <span className={styles['year']}>Fourth Year : {SW4}</span>
                    <span className={styles['year']}>Third Year : {SW3}</span>
                    <span className={styles['year']}>Second Year : {SW2}</span>
                    <span className={styles['year']}>First Year : {SW1}</span>
                </div>
            </div>
        </>
    )
}

export default Index
