import React, { Component } from 'react';
import AlumniComponent from '../components/Alumni';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import data from '../data/Alumni/data';
import achievements from '../data/Alumni/achievements';

class Alumni extends Component {
    render() {
        return (
            <>
                <Navbar />
                <AlumniComponent
                    data={data}
                    achievements={achievements}
                />
                <Footer />
            </>
        );
    }
}

export default Alumni;