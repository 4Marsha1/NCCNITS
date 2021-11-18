import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, handleClick }) => {

    return (
        isOpen ?
            <div className={styles['sidebar']}>
                <div className={styles['btn-div']}>
                    <button className={styles['btn']} onClick={handleClick}>
                        X
                    </button>
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
            </div>
            :
            <></>
    );
};

export default Sidebar;