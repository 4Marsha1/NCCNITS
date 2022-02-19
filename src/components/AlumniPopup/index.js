import React from 'react';
import styles from './AlumniPopup.module.css';

const Index = ({ togglePopup, quotes }) => {
    const card = quotes.map(quote => {
        return (
            <div className={styles["card"]}>
                <span className={styles['desc']}>
                    <i>{quote.description}</i>
                </span>
                <span className={styles['title']}>
                    - {quote.title}
                </span>
            </div>
        )
    })
    return (
        <div className={styles['container']}>
            <div className={styles['popup']}>
                <span className={styles['msg']}>Scroll Down &#8650;</span>
                <button className={styles['btn']} onClick={togglePopup}>X</button>
                <div className={styles['card-container']}>
                    {card}
                </div>
                <button className={styles['btn-bottom']} onClick={togglePopup}>Close</button>
            </div>
        </div>
    )
}

export default Index;
