import React from 'react';
import styles from './style.module.css'

const index = () => {
    return (
        <>
            <a id='top'></a>
            <button className={styles['to-top']}><a href='#top'>^</a></button>
        </>
    )
}

export default index
