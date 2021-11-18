import React, { Component } from 'react';
import QuoteComponent from '../components/Alumni/QuoteScreen';

class Quotes extends React.Component {
    constructor(props) {
        super(props)
        // this.quote = this.props.location.state;
    }

    render() {
        // console.log(this.quote);
        return (<><QuoteComponent />hello</>);
    }
}

export default Quotes;