import React from 'react';
import styles from './Faq.Module.css';
import ToTheTopBtn from '../ToTheTop';

const Index = ({ data }) => {

    const createMarkup = (content) => {
        return { __html: content };
    }

    const faqs = data.map(faq => {
        return (
            <div className={styles['card']} key={faq.id}>
                <span className={styles['qns']}>{faq.qns}</span>
                <span className={styles['ans']} dangerouslySetInnerHTML={createMarkup(faq.ans)}></span>
            </div>
        )
    });

    return (
        <div className={styles['container']}>
            <ToTheTopBtn />
            <span className={styles['title']}>FREQENTLY ASKED QUESTIONS</span>
            <div className={styles['cards']}>
                {faqs}
            </div>
        </div>
    );
}

export default Index;
