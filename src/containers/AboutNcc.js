import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import AboutNccComponent from '../components/AboutNcc';
import Footer from '../components/Footer';

class AboutNCC extends Component {
    render() {
        return (
            <>
                <Navbar />
                <AboutNccComponent />
                <Footer />
            </>
        );
    }
}

export default AboutNCC;
