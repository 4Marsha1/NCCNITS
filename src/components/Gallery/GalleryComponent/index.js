import React from 'react';
import styles from './Gallery.module.css';
import data from '../data';

const Index = () => {
    return (
        <div className={styles['gallery']}>
            {data.map(image => {
                return (
                    <div className={styles['image-container']} key={image.id}>
                        <img className={styles['image']} src={image.url} />
                    </div>
                );
            })}
        </div>
    )
}

export default Index
