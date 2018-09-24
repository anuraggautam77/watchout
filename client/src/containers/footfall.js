
import React, { Component } from 'react';
import '../style/css/landing.scss';
import Header from './header/user';
import SpotReg from '../components/user/spotreg';
 

class FootFall extends Component {
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
                    <SpotReg/>
                    </div>
                
                );
                }
    }

    export default FootFall;
