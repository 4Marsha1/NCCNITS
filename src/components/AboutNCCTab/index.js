import React from 'react';
import styles from './AboutNCCTab.module.css';
import logo from '../../uploads/logo.png';

const Index = ({ type }) => {
    switch (type) {
        case 1:
            return (
                <div className={styles['tab-container']}>
                    <p className={styles['desc']}>
                        <span className={styles['header']}>"History"</span>
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
        case 3:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>"Pledge"</span>
                        <p>
                            We the cadet of the national cadet corps, do solemnly pledge that we shall always uphold the unity of india.We resolve to be disciplined and responsible citizen of our nation.We shall undertake positive community service in the spirit of selflessness and concern for our fellow beings.
                        </p>
                    </div>
                </div>
            );
        case 4:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>"The NCC Flag"</span>
                        <div className={styles['img-container']}>
                            <img src={logo} className={styles['logo']} />
                        </div>
                        <p>
                            NCC Flag Contains NCC Crest in gold in the middle, with the letters "NCC" encircled by a wreath of seventeen lotus with a background in Red, Blue and Light blue.Red depicts the Army, Deep Blue depicts the Navy and Light Blue depicts the Air Force. The seventeen lotuses represent the 17 State Directorates. "Unity of Discipline" (Ekta aur Anushasan) is written at the bottom of the NCC Flag.
                        </p>
                    </div>
                </div>
            );
        case 5:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>"The NCC Song"</span>
                        <div className={styles['img-container']}>
                            <img src={logo} className={styles['logo']} />
                        </div>
                        <div className={styles['song']}>
                            <p>
                                HUM SAB BHARTIYA HAI, HUM SAB BHARATIYA HAI<br />
                                APNI MANZIL EK HAI,<br />
                                HA HA HA EK HAI, HO HO HO EK HAI,<br />
                                HUM SAB BHARTIYA HAI<br />

                                KASHMIR KI DHARTI RANI HAI, SARTAJ HIMALAY HAI<br />
                                SADIYON SE HAMNE ISKO APNE KHOON SE PALA HAI<br />
                                DESH KI RAKSHA KI KHATIR, HUM SHAMSHEER UTHA LENGE<br />
                                HUM SHAMSHEER UTHA LENGE<br />

                                BHIKRE BHIKRE TARE HAI HUM LEKIN JILMIL EK HAI<br />
                                HA HA HA HA EK HAI, HUM SAB BHARTIYA HAI<br />
                                MANDIR GURDWARE BHI HAI YAHAN, AUR MASZID BHI HAI YAHAN<br />
                                GIRJA KA GHADIYAL KAHIN MULLA KI KANKHI HAI AJHA<br />
                                EK HI APNA RAM HAI, EK HI ALLAH THALA HAI<br />
                                EK HI ALLAH THALA HAI<br />

                                RANG BIRANGE DEEPAK HAI HUM, LEKIN MAHAFIL EK HAI<br />
                                HA HA HA EK HAI, HO HO HO EK HA<br />

                                HUM SAB BHARTIYA HAI, HUM SAB BHARTIYA HAI<br />
                            </p>
                        </div>
                    </div>
                </div>
            );
        case 6:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>"Centrally Organised Camps"</span>
                        <div className={styles['img-container']}>
                            <img src={logo} className={styles['logo']} />
                        </div>
                        <p>
                            <ol>
                                <li>Leadership Camp</li>
                                <li>Vayu Sainik Camp</li>
                                <li>Nau Sainik Camp</li>
                                <li>Rock Climbing Camp</li>
                                <li>Trekking camp</li>
                                <li>National Integration Camp (NIC)</li>
                                <li>Thal Sainik Camp (TSC)</li>
                                <li>Army Attachment Camp (AAC)</li>
                                <li>Airforce Attachment Camp (AAC)</li>
                                <li>Republic Day Camp (RDC)</li>
                                <li>Annual training Camp(ATC</li>
                            </ol>
                        </p>
                    </div>
                </div>
            );
        case 7:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>"Training"</span>
                        <p>
                            Drill, shooting, Physical fitness, map reading, First aid, Gliding/Flying, boat pulling, sailing and camp training covering basic of military training in Army, Navy and Air Force.<br />

                            This training is mostly carried out in schools and colleges by the cadets. In addition, depending upon the type of service, basic knowledge of that service is imparted to the cadets e.g gliding , powered flying for Air Wing cadets and boat pulling, sailing for Naval Wing cadets form part of institutional training. These activities comprise approximately 50% of the entire syllabus.<br />

                            This is the most imp aspect of NCC Trg and hence great emphasis on institutional trg to be given. State DDG's to issue comprehensive instrs on organising the Institutional Trg at Gp / Unit level.<br />

                            Following actions will be taken to improve the standard of trg.
                            <ol>
                                <li>Optimum utilization of PI Staff for Trg.</li>
                                <li>Greater involvement of Offrs, WTLO's and ANO's.</li>
                                <li>Deficiencies in trg aids will be made up expeditiously.</li>
                            </ol>
                        </p>

                        <span className={styles['title']}>Basic Training</span>
                        <p>
                            <b>1. Drill</b><br />

                            Cadets must be made to understand the aim and purpose of teaching drill, so that they are suitably motivated and do not take it as "fatigue". Emphasis will be laid on correct bearing, marching, saluting and arms drill. Inter-squad competitions may be organized to create interest.<br />
                            <br />
                            <b>2. Weapon Training</b><br />

                            Cadets generally take keen interest in wpn trg and firing. Units must liaise with nearby Service and Para-Military Units to ensure that all cdts get an opportunity to fire their authorized amn. Use of firing simulators may be made to optimize trg efforts where possible.<br />
                            <br />
                            <b>3. Adventure Training</b><br />

                            Adventure activities have been incorporated in NCC training with the aim of inculcating and strengthening leadership traits amongst the cadets. These activities in NCC can be broadly divided into the following.<br />

                            <ol>
                                <li>Land based   - Mountaineering,Rock Climbing,Trekking.</li>
                                <li>Water based - Sailing Expedition,White Water Rafting,Scuba Diving,River Crossing.</li>
                                <li>Air based     - Parasailing.</li>
                            </ol>
                            <br />
                            <b>Youth exchange programme</b>

                            This is a very important activity. It is done to increase international understanding and bolster awareness. These exchanges are done with NCC community of 10 countries namely Australia, Bangladesh, Bhutan, Canada, Maldives, Nepal, Singapore, UK, Russia and Vietnam at international level.<br />

                            Checks

                            All OC Units are keeping a check of Institutional trg regularly to ensure proper attendance. Attendance registers are marked before the commencement of the parade and NOT repeat NOT after the parade.<br />

                            All DDG's are putting an effective monitoring mechanism which is in place to check attendance and conduct of this trg.<br />
                        </p>
                    </div>
                </div>
            );
        case 8:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>"Certification Programmes"</span>
                        <p>
                            The eligibility conditions and the general procedure for the conduct of the Certificate Examination for Cadets of Senior and Junior Division/Wings NCC(All wings) have been issued by this HQ from time to time. The aim of this Directive is to consolidate all such instruction and revise these, where necessary.
                        </p>
                        <span className={styles['title']}>Type of Examination</span>
                        <p>
                            The type of Certificate Examination and the unit in which these are held are given below
                            Type of Certificate                                      NCC Unit

                            Certificate 'A'                                          Junior Division/Wing NCC
                            Certificate 'B'& 'C'                                     Senior Division/Wing NCC
                        </p>
                        <span className={styles['title']}> Eligibilities for Certificate Examination</span>
                        <p>
                            <b>For "A" Certificate Examination (Junior Division)</b> <br />

                            1. Must be in Second year of NCC<br />

                            2. Must have attended an Annual Training Camp<br />

                            3. The candidate must have attended a minimum of 75% of total Training periods laid down in the syllabus for the first and second years of Junior Division/Wing NCC(All wings)<br />

                            4. Break in the NCC Service of the cadet prior to his appearing. In the examination 'should not exceed more than 12 month at one time, to count his previous service. In case the break exceeds 12 months, the following procedure will be adopted<br />

                            "If he has been on the unit rolls for a minimum of two years before his discharge and had attended 75% of the total period during his NCC Service he will need another 45 periods of training to become eligible for certificate 'A' examination. In all other cases where above conditions are not fulfilled, the cadet must attend a minimum of 75% periods of the first and second year of training".

                            <br />
                            <br />
                            <b>For "B" Certificate Examination (Senior Division)</b>
                            <br />
                            1. The Cadet must be in second year of SD/SW NCC Training<br />

                            2. Must have attended one Annual Training Camp/NIC/Attachment training with regular Army, Navy, Air Force Units.<br />

                            3. Cadets possessing 'A' Certificate will be awarded 10 bonus marks.<br />

                            4. The cadet must have attended a minimum of 75% of total training period laid down in the syllabus for the first and second years for Senior Division Wing NCC (All Wings). Break in the NCC service of the cadet SD/SE prior to appearing in the exam should not exceed more than 18 months at one time, after his discharge to count his service for Certificate 'B' Examination. In case the break exceed 18 months the following procedure will be adopted.<br />

                            "If he had been on the unit rolls for a minimum of two years before his discharge and had attended 75% of the total periods during his NCC service he will need another 45 periods of training to become eligible for certificate 'B' Examination. In all other cases where above conditions are not fulfilled, the cadet must attend a minimum 75% periods of the first and second years of training."

                            An Air Wing Cadet must do a minimum of 10 Glide launches.

                            <br />
                            <br />
                            <b>For "C" Certificate Examination (Senior Division)</b>
                            <br />
                            1. Cadet must have passsed 'B' certificate.<br />

                            2. The Cadet must be in second/third year of SD/SW NCC Training<br />

                            3. The Cadet must have attended a minimum of 75% of the periods of 3rd year syllabus during the academic session.<br />

                            4. Break in the NCC Service of the SD/SW Cadet prior to appearing in the exam should not exceed more than 18 months at one time, after his discharge to count his previous service for Certificate 'C' examination. In case the break exceeds 18 months, the following procedure will be adopted<br />

                            "If he had been on the Unit rolls for a minimum of two years before his discharge and had attended 75% of the total period during his NCC service, he will need another 45 periods of training to become eligible for Certificate 'C' examination. In all other cases where above conditions are not fulfilled, the Cadet must attend a minimum of 75% periods of the first and second year of training."

                            5. Must have attended two Camp.
                            <br />
                            <br />
                            <span className={styles['title']}>Permission to Appear in Certificate Examination after Discharge</span>
                            <p>
                                Cadets who ceased to be on rolls of NCC may be permitted to appear for certificate 'A' Examination for Junior Division/Wing and 'B' & "C" for Senior Division/Wing NCC at their own expenses within a period of 12 months of their discharge from the NCC, provided they were otherwise eligible at the time of their discharge.<br />

                                The ex-cadet so eligible can appear for the examination at any place in India by applying for the same, alongside with discharge certificate, to Local Unit Commander. The Group Commander is empowered to accept such requests from the ex-cadets.
                            </p>
                            <br />
                            <span className={styles['title']}>Re-Test for Improvement of Grading : 'C' Certificate</span>
                            <p>
                                With a view to give Cadets a chance to apply for the NCC Special Entry Scheme, in case their grading improves, itkl has been ruled that

                                1. Cadets who have obtained a 'C' grading in NCC 'C' Certificate Exam and who wish to improve their grading will be allowed to appear for a retest. Only one retest will be allowed.<br />

                                2. Cadets will have to re-appear in complete examination.<br />

                                3. Retest will be held alongwith fresh cases nexe year. During the period, these Cadets may attend at least two weeks' Special Parade/Coaching classes to be organised by units after he academic session. Those Cadets who do not attend the Special Parade/Classes will also be eligible to appear in the re-test. No refreshment or other allowance will be admissible for these classes/parade/retest.<br />
                            </p>
                        </p>
                    </div>
                </div>

            );

    }
}

export default Index
