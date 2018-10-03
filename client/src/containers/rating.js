
import React, { Component } from 'react';
import '../style/css/landing.scss';
import Header from './header/user';
import Rateme from '../components/rateme';

class Rating extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    render() {
        return ( 
                
                <div className="application landing">
                    <Header/>
                    <div className="section section-breadcrumbs">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>Rate Us</h1>
                                    <br/>
                                    <h4 style={{"color": "rgb(239, 239, 241)"}}>How was your experience on <b>AGARTHA</b> planet?</h4> 
                                    <Rateme />
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                
                );
                }
    }

    export default Rating;
