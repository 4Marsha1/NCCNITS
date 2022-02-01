import React from 'react';
import styles from './Gallery.module.css';

const Index = ({ data, currentImg, currentId, handleSwitch }) => {
    return (
        <div className={styles['container']}>
            <div className={styles['photo-container']}>
                <span className={styles['title']}>Current Image </span>
                <span className={styles['title-underline']}></span>
                <img className={styles['display']} src={currentImg} />
            </div>
            <div className={styles['gallery']}>
                {data.length > 0 ?
                    data.map(image => {
                        return (
                            <div className={styles['image-container']} key={image.id}>
                                <img className={styles['image']} id={image.id} src={image.url} onClick={handleSwitch} />
                            </div>
                        );
                    }) : <h3>Under Maintenance</h3>}
            </div>
        </div>

    )
}

export default Index
