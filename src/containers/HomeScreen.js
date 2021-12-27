import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import HomeScreenComponent from '../components/HomeScreenComponent';
import Footer from '../components/Footer';

import recentUpdates from '../data/HomeScreen/data';
import strengthDetails from '../data/HomeScreen/strength';

class HomeScreen extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomeScreenComponent
                    recentUpdates={recentUpdates}
                    strengthDetails={strengthDetails}
                />
                <Footer />
            </div>
        );
    }
}

export default HomeScreen;