import React from 'react';
import styles from './AlumniPopup.module.css';

const Index = ({ togglePopup, quotes }) => {
    const card = quotes.map(quote => {
        return (
            <div className={styles["card"]}>
                <span className={styles['desc']}>
                    <i>"{quote.description}"</i>
                </span>
                <span className={styles['title']}>
                    - {quote.title}
                </span>
            </div>
        )
    })
    return (
        <div className={styles['popup']}>
            <button className={styles['btn']} onClick={togglePopup}>X</button>
            <div className={styles['card-container']}>
                {card}
            </div>
            <button className={styles['btn-bottom']} onClick={togglePopup}>Close</button>
        </div>
    )
}

export default Index;
