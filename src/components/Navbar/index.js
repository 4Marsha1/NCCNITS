import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../uploads/logo.png'

const index = () => {
    return (
        <div className={styles['navbar']}>
            <div className={styles['logo-container']}>
                <img className={styles['logo']} src={logo} />
                <span className={styles['title']}>NCC NITS</span>
            </div>
            <div className={styles['links']}>
                <span>Home</span>
                <span>About NCC</span>
                <span>NCC NITS</span>
                <span>Alumni</span>
                <span>FAQs</span>
                <span>Dev Team</span>
            </div>
            <div className={styles['hamburger']}>
                <span></span><span></span><span></span>
            </div>
        </div>
    )
}

export default index
