import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import FAQComponent from '../components/FAQs';
import Footer from '../components/Footer';

class FAQs extends Component {
    render() {
        return (
            <>
                <Navbar />
                <FAQComponent />
                <Footer />
            </>
        );
    }
}

export default FAQs;
