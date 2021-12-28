import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import HomeScreenComponent from '../components/HomeScreenComponent';
import Footer from '../components/Footer';

import recentUpdates from '../data/HomeScreen/data';
import strengthDetails from '../data/HomeScreen/strength';
import carouselData from '../data/HomeScreen/carousel';

class HomeScreen extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomeScreenComponent
                    recentUpdates={recentUpdates}
                    strengthDetails={strengthDetails}
                    carouselData={carouselData}
                />
                <Footer />
            </div>
        );
    }
}

export default HomeScreen;