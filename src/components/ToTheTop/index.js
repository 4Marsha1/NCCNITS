import React, { useState } from 'react';
import styles from './style.module.css'

const Index = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <a id='top'></a>
            {visible ? <button className={styles['to-top']} onClick={handleClick}>^</button>
                : <></>
            }

        </>
    )
}

export default Index
