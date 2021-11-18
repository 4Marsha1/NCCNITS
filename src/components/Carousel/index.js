import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { ReactComponent as RightArrow } from '../../uploads/right-arrow.svg';
import { ReactComponent as LeftArrow } from '../../uploads/left-arrow.svg';

const Index = () => {
    const images = [
        {
            id: 1,
            image: 'https://picsum.photos/200'
        },
        {
            id: 2,
            image: 'https://picsum.photos/200'
        },
        {
            id: 3,
            image: 'https://picsum.photos/200'
        },
        {
            id: 4,
            image: 'https://picsum.photos/200'
        },
        {
            id: 5,
            image: 'https://picsum.photos/200'
        }
    ]

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }
    useEffect(() => {
        let slider = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [current]);

    return (
        <div className={styles['carousel']}>
            <LeftArrow className={styles['prev']} onClick={prevSlide} />
            {images.map((img, index) => {
                return (
                    <div className={`${index === current ? `${styles['active']} ${styles['slide']}` : styles['slide']}`} key={index}>
                        {index === current && (<img src={img.image} alt='image' className={styles['image']} />)}
                    </div>
                )
            })}
            <RightArrow className={styles['next']} onClick={nextSlide} />
        </div>
    )
}

export default Index;
