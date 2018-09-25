/* global google, fetch */

import React, { Component } from 'react';
import '../style/css/list.scss';
import Header from './header/user';
import Footer from './header/footer';
import  PollList from "../components/poll/list";


const imagesLoadedOptions = {background: '.my-bg-image-el'}

class MainPage extends Component {
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
                    <PollList/>
                      <Footer/>
                </div>
                );
    }
}

export default MainPage;
