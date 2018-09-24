
import React, { Component } from 'react';
import '../style/css/landing.scss';

import Header from './header/user';
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
                </div>);
    }
}

export default Landing;
