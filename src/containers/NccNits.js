import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NCCNITSComponent from '../components/NccNits';
import Footer from '../components/Footer';

class NCCNITS extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <NCCNITSComponent />
                <Footer />
            </>
        );
    }
}

export default NCCNITS;