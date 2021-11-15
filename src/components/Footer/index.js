import React from 'react';
import styles from './Footer.module.css';
import logo from '../../uploads/logo.png';
import { ReactComponent as Instagram } from '../../uploads/instagram.svg';
import { ReactComponent as Facebook } from '../../uploads/facebook.svg';
import { ReactComponent as Twitter } from '../../uploads/twitter.svg';

const index = () => {
    return (
        <div className={styles['footer']}>
            <div className={styles['content']}>
                <div className={styles['logo-address']}>
                    <img className={styles['logo']} src={logo} />
                    <div className={styles['address']}>
                        <span>National Cadet Corps</span>
                        <span>National Institute Of Technology, Silchar</span>
                        <span>NIT Road, Fakiratilla,Silchar, Assam</span>
                        <span>788010</span>
                        <span>nccnits@gmail.com</span>
                    </div>
                </div>
                <div className={styles['social-media']}>
                    <span className={styles['social-media-title']}>Follow Us:</span>
                    <div className={styles['links']}>
                        <Instagram className={styles['icon']} />
                        <Facebook className={styles['icon']} />
                        <Twitter className={styles['icon']} />
                    </div>
                </div>
            </div>

            <div className={styles['copyright']}>
                <span>&reg; All Rights Reserved</span>
                <span>&copy; Copyrights 2021</span>
            </div>
        </div>
    )
}

export default index
