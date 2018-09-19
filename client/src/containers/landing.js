
import React, { Component } from 'react';
import '../style/css/landing.scss';
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
        return ( <div className="signup"> <div className="container"> <Registration/></div> </div> );
                }
    }

    export default Landing;
