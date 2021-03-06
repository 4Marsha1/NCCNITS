import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../uploads/logo.png';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar';

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const path = window.location.pathname;

    return (
        <>
            <div className={styles['navbar']}>
                <div className={styles['logo-container']}>
                    <img className={styles['logo']} src={logo} />
                    <span className={styles['title']}>NCC NITS</span>
                </div>
                <div className={styles['links']}>
                    <Link
                        to='/' style={{ textDecoration: 'none' }}
                    >
                        {path === '/' ? <span className={styles['active-link-tab']}>Home</span> :
                            <span className={styles['link-tab']}>Home</span>}
                    </Link>
                    <Link
                        to='/aboutncc' style={{ textDecoration: 'none' }}
                    >
                        {path === '/aboutncc' ? <span className={styles['active-link-tab']}>About NCC</span> :
                            <span className={styles['link-tab']}>About NCC</span>}
                    </Link>
                    <Link
                        to='/nccnits' style={{ textDecoration: 'none' }}
                    >
                        {path === '/nccnits' ? <span className={styles['active-link-tab']}>NCC NITS</span> :
                            <span className={styles['link-tab']}>NCC NITS</span>}
                    </Link>
                    <Link
                        to='/alumniscreen' style={{ textDecoration: 'none' }}>
                        {path === '/alumniscreen' ? <span className={styles['active-link-tab']}>Alumni</span> :
                            <span className={styles['link-tab']}>Alumni</span>}
                    </Link>
                    <Link
                        to='/faqs' style={{ textDecoration: 'none' }}>
                        {path === '/faqs' ? <span className={styles['active-link-tab']}>FAQs</span> :
                            <span className={styles['link-tab']}>FAQs</span>}
                    </Link>
                    <a href='http://www.nits.ac.in/' target='_blank'>
                        <span className={styles['link-tab']}>NITS</span>
                    </a>
                </div>
                {isOpen ? <></>
                    :
                    <div className={styles['hamburger']} onClick={handleClick}>
                        <span></span><span></span><span></span>
                    </div>}
            </div>
            {isOpen ? <Sidebar isOpen={isOpen} handleClick={handleClick} />
                :
                <></>}
        </>
    )
}

export default Index
