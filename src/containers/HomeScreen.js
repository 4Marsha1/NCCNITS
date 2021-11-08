import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import HomeScreenComponent from '../components/HomeScreenComponent';
import Footer from '../components/Footer';

class HomeScreen extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomeScreenComponent />
                <Footer />
            </div>
        );
    }
}

export default HomeScreen;