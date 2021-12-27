import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NCCNITSComponent from '../components/NccNits';
import Footer from '../components/Footer';

import data from '../data/NccNits/data';
import council from '../data/NccNits/council';

class NCCNITS extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <NCCNITSComponent
                    data={data}
                    council={council}
                />
                <Footer />
            </>
        );
    }
}

export default NCCNITS;