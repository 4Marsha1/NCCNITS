import React from 'react';
import styles from './Devteam.module.css';
import ToTheTopBtn from '../ToTheTop';

const Index = ({ data }) => {

    const cards = data.map(image => {
        return (
            <div className={styles['card']} key={image.id}>
                <img className={styles['img']} src={image.src} />
                <span className={styles['name']}>{image.name}</span>
                <span className={styles['year']}>{image.year}</span>
            </div>
        )
    })

    return (
        <div className={styles['container']}>
            <ToTheTopBtn />
            {cards}
        </div>
    )
}

export default Index
