import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DevTeamComponent from '../components/DevTeam';

class DevTeam extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <DevTeamComponent />
                <Footer />
            </>
        );
    }
}

export default DevTeam;
