import React from 'react';
import styles from './Navbar.module.css';

import logo from '../../uploads/logo.png'

const Index = () => {
    return (
        <div className={styles['navbar']}>
            <div className={styles['logo-container']}>
                <img className={styles['logo']} src={logo} />
            </div>
            <div className={styles['links']}>
                <div >
                    Home
                </div>
                <div >
                    Alumni
                </div>
                <div >
                    About NCC
                </div>
                <div >
                    NCC NITS
                </div>
                <div >
                    FAQS
                </div>
                <div >
                    Dev Team
                </div>
            </div>
        </div>
    )
}

export default Index
