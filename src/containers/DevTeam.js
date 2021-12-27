import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DevTeamComponent from '../components/DevTeam';

import data from '../data/DevTeam/data'

class DevTeam extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <DevTeamComponent data={data} />
                <Footer />
            </>
        );
    }
}

export default DevTeam;
