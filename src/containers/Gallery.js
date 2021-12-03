import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import GalleryComponent from '../components/Gallery/GalleryComponent';
import Footer from '../components/Footer';

class Gallery extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <GalleryComponent />
                <Footer />
            </>
        );
    }
}

export default Gallery;