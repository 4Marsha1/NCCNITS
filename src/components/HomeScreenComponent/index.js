import React from 'react';
import styles from './HomeScreenComponent.module.css';
import Carousel from '../Carousel';
import RecentUpdatesComponent from './children/recentUpdates';
import StrengthDetailsComponent from './children/strengthDetails';

const index = () => {
    return (
        <div className={styles['home']}>
            <div className={styles['carousel']}>
                <Carousel />
            </div>
            <span className={styles['quote']}>
                "The safety, honour & welfare of your country comes first, always & every time. The honour, welfare & comfort of the men you command, comes next. Your own ease, comfort & safety comes last, always & every time. "
            </span>
            <div className={styles['hr']}></div>
            <div className={styles['message']}>
                <span className={styles['message-text']}>"The NCC Cadets of NIT Silchar are a class apart. Their professional approach to various NCC activities has fetched accolades during various national level competitions. Their performance has always been consistent and commendable. Due to their high IQ level and a technical bent of mind, they tend to stand out in the crowd and execute the task with a finesse. In addition they possess a good sense of humor, which binds the team together and keeps everyone amused. I wish them loads of good luck and success in all their endeavours."</span>
                <span className={styles['message-author']}>Message by -62Assam BN-colonel srinath Sharma</span>
            </div>
            <div className={styles['parent-section']}>
                <RecentUpdatesComponent />
            </div>
            <div className={styles['parent-section']}>
                <StrengthDetailsComponent title={'NCC-NITS in Figures'}
                    title1={'SD 3 Assam Battalion'} SD4={38} SD3={42} SD2={29} SD1={43}
                    title2={'SW 62 Assam Girls Battalion'} SW4={38} SW3={42} SW2={29} SW1={43} />
            </div>
            <div className={styles['parent-section']}>
                <StrengthDetailsComponent title={'Rankholders of NCC NITS'}
                    title1={'SD 3 Assam Battalion'} SD4={38} SD3={42} SD2={29} SD1={43}
                    title2={'SW 62 Assam Girls Battalion'} SW4={38} SW3={42} SW2={29} SW1={43} />
            </div>
        </div>
    )
}

export default index
