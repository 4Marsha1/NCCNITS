import React, { Component } from 'react';
import AlumniComponent from '../components/Alumni/AlumniComponent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Alumni extends Component {
    render() {
        return (
            <>
                <Navbar />
                <AlumniComponent />
                <Footer />
            </>
        );
    }
}

export default Alumni;