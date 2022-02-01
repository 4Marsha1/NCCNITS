import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import GalleryComponent from '../components/Gallery';
import Footer from '../components/Footer';

import images from '../data/Gallery/data';

class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImg: images[0].url,
        }
    }

    handleSwitch = (e) => {
        this.setState({ currentImg: e.target.src });
    }

    render() {
        return (
            <>
                <Navbar />
                <GalleryComponent
                    data={images}
                    currentImg={this.state.currentImg}
                    currentId={this.state.currentId}
                    handleSwitch={this.handleSwitch}
                />
                <Footer />
            </>
        );
    }
}

export default Gallery;