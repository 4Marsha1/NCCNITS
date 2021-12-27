import React from 'react';
import styles from './Tabs.module.css';

const index = ({ type, data }) => {

    const createMarkup = (content) => {
        return { __html: content };
    }

    switch (type) {
        case 1: return (
            <div className={styles['tab']}>
                <div className={styles['img']}>
                    <img src={data[0].image} />
                </div>
                <div className={styles['content']}>
                    <p dangerouslySetInnerHTML={createMarkup(data[0].content)}></p>
                </div>
            </div>
        )
        case 2: return (
            <div className={styles['tab']}>
                <div className={styles['img']}>
                    <img src={data[1].image} />
                </div>
                <div className={styles['content']}>
                    <p dangerouslySetInnerHTML={createMarkup(data[1].content)}></p>
                </div>
            </div>
        )
        case 3: return (
            <div className={styles['tab']}>
                <div className={styles['content']}>
                    <p dangerouslySetInnerHTML={createMarkup(data[2].content)}></p>
                </div>
            </div>
        )
    }
}

export default index;
