import React from 'react';
import styles from './Gallery.module.css';
import data from '../../data/Gallery/data';

const Index = () => {
    return (
        <div className={styles['gallery']}>
            {data.length > 0 ?
                data.map(image => {
                    return (
                        <div className={styles['image-container']} key={image.id}>
                            <img className={styles['image']} src={image.url} />
                        </div>
                    );
                }) : <h3>Under Maintenance</h3>}
        </div>
    )
}

export default Index
