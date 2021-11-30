import React from 'react';
import styles from './AboutNCCTab.module.css';

const Index = ({ type }) => {
    switch (type) {
        case 1:
            return (
                <div className={styles['tab-container']}>
                    <p className={styles['desc']}>
                        The NCC in India was formed with the National Cadet Corps Act of 1948. It was raised on 15 July 1948 The National Cadet Corps
                        can be considered as a successor of the University Officers Training Corps (UOTC) which was established by the British in 1942.
                        During World War II, the UOTC never came up to the expectations set by the British. This led to the idea that some better
                        schemes should be formed, which could train more young men in a better way, even during peace times. A committee headed by
                        Pandit H.N. Kunzru recommended a cadet organization to be established in schools and colleges at a national level.
                        The National Cadet Corps Act was accepted by the Governor General and on 15 July 1948 the National Cadet Corps came into
                        existence. <br />
                        <br />
                        During the 1965 and 1971 wars with Pakistan, NCC cadets were the second line of defence.
                        They organised camps to assist the ordinance factories, supplying arms and ammunition to the front, and also were
                        used as patrol parties to capture the enemy paratroopers. The NCC cadets also worked hand in hand with the Civil
                        Defence authorities and actively took part in rescue work and traffic control. After the 1965 and 1971 Indo-Pak wars
                        the NCC syllabus was revised. Rather than just being the second line of defence, NCC syllabus laid a greater stress on
                        developing qualities of leadership and Officer-like qualities. The military training which the NCC cadets received was
                        reduced and greater importance was given to other areas like social service and youth-management.
                    </p>
                </div>
            );
        case 2:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>"Unity and Discipline (Ekta aur Anushasan)"</span>
                        <span className={styles['title']}>DG's four Cardinal Principals of Discipline</span>
                        <p>
                            1. Obey with a smile <br />
                            2. Be Punctual<br />
                            3. Work hard and without fuss<br />
                            4. Make no excuses and tell no lies<br />
                        </p>
                        <span className={styles['title']}>Aims of NCC</span>
                        <p>
                            1.To develop qualities of character, courage, commandership, discipline, leadership,
                            secular outlook, spirit of adventure and sportsmanship and the ideals of selfless
                            service among the youth to make them useful citizen. <br />
                            2.To create a human resource of organised trained and motivated youth to provide leadership
                            in all walks of life including the Armed Forces and be always available for the service of the nation.
                        </p>
                        <span className={styles['title']}> Oath</span>
                        <p>
                            "I do hereby solemnly promise that I will serve my motherland most truly and loyally and that, I will
                            abide by the rules and regulations of the National Cadet Crops. Further under the command and control
                            of my commanding officer I will participate in every camp most sincerely and wholeheartedly".
                        </p>
                    </div>
                </div>
            );
    }
}

export default Index
