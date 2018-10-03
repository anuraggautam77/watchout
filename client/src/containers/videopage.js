/* global google, fetch */

import React, { Component } from 'react';
import '../style/css/list.scss';
import Header from './header/user';
import Footer from './header/footer';
 


 

class VideoPage extends Component {
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
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2 style={{"color":"#fff"}}> Please visit, like, rate and comment the video </h2>
                                    <br/>
                                    <a href="https://vox.publicis.sapient.com/videos/14748" target="_blank" ><img style={{"width":"300px"}} src="/img/videolink.png"/></a>
                      
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                     <Footer/>
                </div>
                );
    }
}

export default VideoPage;
