import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import FAQComponent from '../components/FAQs';
import Footer from '../components/Footer';

import data from '../data/FAQs/data';

class FAQs extends Component {
    render() {
        return (
            <>
                <Navbar />
                <FAQComponent data={data} />
                <Footer />
            </>
        );
    }
}

export default FAQs;
