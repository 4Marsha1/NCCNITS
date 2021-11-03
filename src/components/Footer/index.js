import React from 'react';
import styles from './Footer.module.css';

const Index = () => {
    return (
        <div className={styles['footer']}>
            <div className={styles['links']}>
                <div >
                    Home
                </div>
                <span>|</span>
                <div >
                    Alumni
                </div>
                <span>|</span>
                <div >
                    About NCC
                </div>
                <span>|</span>
                <div >
                    NCC NITS
                </div>
                <span>|</span>
                <div >
                    FAQS
                </div>
                <span>|</span>
                <div >
                    Dev Team
                </div>
            </div>
            <div className={styles['copyright']}>
                <span>&reg; All Rights Reserverd | &copy; Copyrights 2021 | National Cadet Corps | National Institute of Technology, Silchar </span>
            </div>
        </div>
    )
}

export default Index
