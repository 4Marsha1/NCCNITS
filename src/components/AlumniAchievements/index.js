import React from 'react';
import styles from './AlumniAchievements.module.css';

const Index = ({ achievements }) => {
    const createMarkup = (content) => {
        return { __html: content };
    }

    const personList = achievements.map(person => {
        return (
            <div className={styles['card']} key={person.id}>
                {person.img === '' ? <></> :
                    <img src={person.img} className={styles['img']} />}
                <div className={styles['content']}>
                    <span className={styles['name']}>{person.name}</span>
                    <div className={styles['hr']}></div>
                    <p className={styles['desc']} dangerouslySetInnerHTML={createMarkup(person.content)}></p>
                </div>
            </div>
        )
    })
    return (
        <div className={styles['cards']}>
            {personList}
        </div>
    )
}

export default Index