import React from 'react';
import styles from './styles.module.css';

const index = () => {
    return (
        <>
            <span className={styles['title']}>Recent Updates</span>
            <span className={styles['title-underline']}></span>
            <div className={styles['updates-content']}>
                <span className={styles['heading']}>NCC (CATC) Camp for Boys-2018</span>
                <div className={styles['content']}>
                    <img className={styles['updates-img']} src='https://picsum.photos/200' />
                    <div className={styles['updates-text']}>
                        <strong>NCC (CATC) Camp for Boys-2018</strong> Combined Annual Training Camp-2018 for boys was held at location karumganj from 4th February to 13th February 2018, in which approx. 32 boys from NITS participated in the camp. The cadets were exposed to the following activities during the camp:- <br />
                        <strong>1.</strong> Fall in along with P.T. in the morning daily for an hour followed by Yoga and Games like Football, Volleyball in the Evening session.<br />
                        <strong>2.</strong> Marching Drill. (For practice and competition).<br />
                        <strong>3.</strong> Lectures on First Aid, Disaster management (with demonstration) Heat stroke, self defense etc.<br />
                        <strong>4.</strong> Cultural activities like solo & group dance, singing (practice & competition).<br />
                        <strong>5.</strong> Essay writing, poem recitation and poster competition.<br />
                        <strong>6.</strong> In sports- Tug of war and volley ball tournament.<br />
                        <strong>7.</strong> Firing competition with 0.2mm rifle.<br />
                        <strong>8.</strong> On the final day “BadaKhana” was organized followed by giving prizes to the Best Cadets in different field. During the stay at camp the accommodation and meals were satisfactory good and our students enjoyed the camp very much. It was a learning experience for all the participants.
                    </div>
                </div>
            </div>
            <div className={styles['updates-content']}>
                <span className={styles['heading']}>NCC(NIC) Camp for SD & SW(09th Dec to 20th Dec-17)</span>
                <div className={`${styles['content']} ${styles['mobile-view']}`}>
                    <div className={styles['updates-text']}>
                        <strong>NCC (CATC) Camp for Boys-2018</strong> Combined Annual Training Camp-2018 for boys was held at location karumganj from 4th February to 13th February 2018, in which approx. 32 boys from NITS participated in the camp. The cadets were exposed to the following activities during the camp:- <br />
                        <strong>1.</strong> Fall in along with P.T. in the morning daily for an hour followed by Yoga and Games like Football, Volleyball in the Evening session.<br />
                        <strong>2.</strong> Marching Drill. (For practice and competition).<br />
                        <strong>3.</strong> Lectures on First Aid, Disaster management (with demonstration) Heat stroke, self defense etc.<br />
                        <strong>4.</strong> Cultural activities like solo & group dance, singing (practice & competition).<br />
                        <strong>5.</strong> Essay writing, poem recitation and poster competition.<br />
                        <strong>6.</strong> In sports- Tug of war and volley ball tournament.<br />
                        <strong>7.</strong> Firing competition with 0.2mm rifle.<br />
                        <strong>8.</strong> On the final day “BadaKhana” was organized followed by giving prizes to the Best Cadets in different field. During the stay at camp the accommodation and meals were satisfactory good and our students enjoyed the camp very much. It was a learning experience for all the participants.
                    </div>
                    <img className={styles['updates-img']} src='https://picsum.photos/200' />
                </div>
            </div>
        </>
    )
}

export default index
