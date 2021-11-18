import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../uploads/logo.png';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div className={styles['navbar']}>
            <div className={styles['logo-container']}>
                <img className={styles['logo']} src={logo} />
                <span className={styles['title']}>NCC NITS</span>
            </div>
            <div className={styles['links']}>
                <Link
                    to='/' style={{ textDecoration: 'none' }}
                >
                    <span className={styles['link-tab']}>Home</span>
                </Link>
                <span className={styles['link-tab']}>About NCC</span>
                <Link
                    to='/nccnits' style={{ textDecoration: 'none' }}
                >
                    <span className={styles['link-tab']}>NCC NITS</span>
                </Link>
                <Link
                    to='/alumniscreen' style={{ textDecoration: 'none' }}>
                    <span className={styles['link-tab']}>Alumni</span>
                </Link>
                <span className={styles['link-tab']}>FAQs</span>
                <span className={styles['link-tab']}>Dev Team</span>
            </div>
            <div className={styles['hamburger']}>
                <span></span><span></span><span></span>
            </div>
        </div>
    )
}

export default index
