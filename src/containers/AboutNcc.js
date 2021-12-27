import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import AboutNccComponent from '../components/AboutNcc';
import Footer from '../components/Footer';

import data from '../data/AboutNcc/data';

class AboutNCC extends Component {
    render() {
        return (
            <>
                <Navbar />
                <AboutNccComponent data={data} />
                <Footer />
            </>
        );
    }
}

export default AboutNCC;
