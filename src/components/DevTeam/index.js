import React from 'react';
import styles from './Devteam.module.css';
import images from './data';

const Index = () => {

    const cards = images.map(image => {
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
            {cards}
        </div>
    )
}

export default Index
