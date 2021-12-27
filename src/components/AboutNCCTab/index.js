import React from 'react';
import styles from './AboutNCCTab.module.css';
import logo from '../../uploads/logo.png';

const Index = ({ type, tabs }) => {

    const createMarkup = (content) => {
        return { __html: content };
    }

    const mottoSection = tabs[1].desc.map(tab => {
        return (<>
            <span key={tab.section} className={styles['title']}>{tab.title}</span>
            <p dangerouslySetInnerHTML={createMarkup(tab.content)}></p>
        </>);
    });

    const certification = tabs[7].desc.map(tab => {
        return (<>
            <span key={tab.section} className={styles['title']}>{tab.title}</span>
            <p dangerouslySetInnerHTML={createMarkup(tab.content)}></p>
        </>);
    });


    switch (type) {
        case 1:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>{tabs[0].header}</span>
                        <p dangerouslySetInnerHTML={createMarkup(tabs[0].content)}></p>
                    </div>
                </div>
            );
        case 2:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>{tabs[1].header}</span>
                        <p>{tabs[1].content}</p>
                        {mottoSection}
                    </div>
                </div>
            );
        case 3:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>{tabs[2].header}</span>
                        <p>{tabs[2].content}</p>
                    </div>
                </div>
            );
        case 4:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>{tabs[3].header}</span>
                        <div className={styles['img-container']}>
                            <img src={logo} className={styles['logo']} />
                        </div>
                        <p>{tabs[3].content}</p>
                    </div>
                </div>
            );
        case 5:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>{tabs[4].header}</span>
                        <div className={styles['img-container']}>
                            <img src={logo} className={styles['logo']} />
                        </div>
                        <div className={styles['center']}>
                            <p dangerouslySetInnerHTML={createMarkup(tabs[4].content)}></p>
                        </div>
                    </div>
                </div>
            );
        case 6:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>{tabs[5].header}</span>
                        <div className={styles['img-container']}>
                            <img src={logo} className={styles['logo']} />
                        </div>
                        <p dangerouslySetInnerHTML={createMarkup(tabs[5].content)}></p>
                    </div>
                </div>
            );
        case 7:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>{tabs[6].header}</span>
                        <p dangerouslySetInnerHTML={createMarkup(tabs[6].content)}></p>
                    </div>
                </div>
            );
        case 8:
            return (
                <div className={styles['tab-container']}>
                    <div className={styles['desc']}>
                        <span className={styles['header']}>{tabs[7].header}</span>
                        <p>{tabs[7].content}</p>
                        {certification}
                    </div>
                </div>

            );

    }
}

export default Index
