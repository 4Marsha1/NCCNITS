import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import FAQComponent from '../components/FAQs';
import Footer from '../components/Footer';

function FAQs() {
    return (
        <div>
            <Navbar/>
            <FAQComponent />
            <Footer/>
        </div>
    )
}

export default FAQs;
