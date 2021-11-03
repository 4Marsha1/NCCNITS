import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class HomeScreen extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Footer />
            </div>
        );
    }
}

export default HomeScreen;