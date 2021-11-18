import React, { useState } from 'react';
import styles from './Alumni.Module.css';
import quotes from '../data';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className={styles['alumni-component']}>
            <span className={styles['title']}>Alumni</span>
            <span className={styles['title-underline']}></span>
            <div className={styles['years']}>
                <Link
                    to={{
                        pathname: '/quotescreen',
                        state: {
                            quote: quotes
                        }
                    }}
                    style={{ textDecoration: 'none' }}
                    className={styles['year']}>
                    2015
                </Link><Link
                    to={{
                        pathname: '/quotescreen',
                        state: {
                            quote: quotes.filter(quote => quote.cat === '2016')
                        }
                    }}
                    style={{ textDecoration: 'none' }}
                    className={styles['year']}>
                    2016
                </Link>
                <Link
                    to={{
                        pathname: '/quotescreen',
                        state: quotes.filter(quote => quote.cat === '2017')
                    }}
                    style={{ textDecoration: 'none' }}
                    className={styles['year']}>
                    2017
                </Link>
                <Link
                    to={{
                        pathname: '/quotescreen',
                        state: quotes.filter(quote => quote.cat === '2018')
                    }}
                    style={{ textDecoration: 'none' }}
                    className={styles['year']}>
                    2018
                </Link>
                <Link
                    to={{
                        pathname: '/quotescreen',
                        state: quotes.filter(quote => quote.cat === '2019')
                    }}
                    style={{ textDecoration: 'none' }}
                    className={styles['year']}>
                    2019
                </Link>
                <Link
                    to={{
                        pathname: '/quotescreen',
                        state: quotes.filter(quote => quote.cat === '2020')
                    }}
                    style={{ textDecoration: 'none' }}
                    className={styles['year']}>
                    2020
                </Link>
            </div>
            <span className={styles['title']}>Alumni Achievements</span>
            <span className={styles['title-underline']}></span>
        </div>
    )
}

export default Index
