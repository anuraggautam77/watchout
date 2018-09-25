
import React, { Component } from 'react';
import '../style/css/landing.scss';

import Header from './header/user';
import Footer from './header/footer';
import Registration from '../components/user/registration';


class Landing extends Component {
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
                    <Registration/>
                    <Footer/>
                </div>);
    }
}

export default Landing;
