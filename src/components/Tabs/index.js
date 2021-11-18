import React from 'react';
import styles from './Tabs.module.css';

const index = ({ type }) => {
    switch (type) {
        case 1: return (
            <div className={styles['tab']}>
                <div className={styles['img']}>
                    <img src='https://picsum.photos/200' />
                </div>
                <div className={styles['content']}>
                    <p>
                        NCC Parade can be mainly observed on the occasion of Independence Day and Republic Day i.e, twice in a year. On 15th August, respected Director sir hoists the Indian flag in front of the new gallery followed by the national anthem. In his speech, the Director Sir, highlights the past year's achievements, raises important issues and calls for further development of the institute. His speech is followed by the voice of Central Commander, NCC who asks for the permission to start the Parade. The Director Sir observes the Platoons of NCC and different hostels. And with the command of Central commander NCC Parade begins followed by different hostels.

                        The celebrations, Parades and Jhankis depicting the culture of India can be observed in the ground in front of the Sports Complex. NCC Parade starts with the command of Central Commander, NCC and is followed by different hostels and security guards platoons.

                        The enthusiam and the courage to serve for the welfare of the nation can be easily observed on the face of each and every individual standing there. The centre of attraction of Republic Day is the "Jhankis". The "Jhankis" is followed by the Parade. It depicts the vast and diverse culture of India including the achievements, developments and the fields that need to be worked upon. Guests from 62 Assam Girls' Bn and 3rd Assam Bn, NCC are invited to judge the performance of NCC and different hostels. NCC has been continuing to secure the "Best Performance" Award. And the whole team of NCC wishes to continue the legacy.
                    </p>
                </div>
            </div>
        )
        case 2: return (
            <div className={styles['tab']}>
                <div className={styles['img']}>
                    <img src='https://picsum.photos/200' />
                </div>
                <div className={styles['content']}>
                    <p>
                        NCC at NITS is an organisation cum family engaged in conducting constructive activities for all the cadets under its fold and one of them is CLOTH DONATION . NCC,NITS proudly holds the responsibility of being future harbingers of the country by actively participating in social activities. Cloth donation camps are organised twice in a year. Under it, every hostel is provided with a Container in which the boarders are requested to donate clothes and stationery items for the nearby poor villagers. After few days, the donated stuffs are being collected by NCC Cadets. And it is being provided to the poor and needy persons of nearby villages
                    </p>
                </div>
            </div>
        )
        case 3: return (
            <div className={styles['tab']}>
                <div className={styles['content-2']}>
                    <p>1.PHYSICAL FITNESS TEST

                        The first round in the enrollment procedure of NCC, NITS is Physical Fitness Test. Under it, an applicant is supposed to submit his/her medical fitness report to ensure that the person is not suffering from any kind of disease. Applicants need to pass the running and drill tests in order to get enrolled as the Cadet of NCC family</p>
                </div>
                <div className={styles['content-3']}>
                    <p>
                        2.PERSONAL INTERVIEW

                        The next and final round of getting enrolled as NCC Cadet includes the Personal Interview of the applicant. It is conducted by the Senior Rank Holders of NCC. Under it, an applicant needs to answer some common questions related to their interest in NCC and "What motivates them to be a part of NCC NITS?".
                    </p>
                </div>
            </div>
        )
    }
}

export default index
