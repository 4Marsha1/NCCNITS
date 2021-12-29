import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import GalleryComponent from '../components/Gallery';
import Footer from '../components/Footer';

import images from '../data/Gallery/data';

class Gallery extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <GalleryComponent data={images} />
                <Footer />
            </>
        );
    }
}

export default Gallery;