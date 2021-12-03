import React from 'react';
import styles from './Faq.Module.css';
import FAQS from './data';

const Index = () => {

    const faqs = FAQS.map(faq => {
        return (
            <div className={styles['card']} key={faq.id}>
                <span className={styles['qns']}>{faq.qns}</span>
                <span className={styles['ans']}>{faq.ans}</span>
            </div>
        )
    });

    return (
        <div className={styles['container']}>
            <span className={styles['title']}>FREQENTLY ASKED QUESTIONS</span>
            <div className={styles['cards']}>
                {faqs}
            </div>
        </div>
    );
}

export default Index;
