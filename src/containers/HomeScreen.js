import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import HomeScreenComponent from '../components/HomeScreenComponent';
import Footer from '../components/Footer';

import recentUpdates from '../data/HomeScreen/data'

class HomeScreen extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomeScreenComponent recentUpdates={recentUpdates} />
                <Footer />
            </div>
        );
    }
}

export default HomeScreen;