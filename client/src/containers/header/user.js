
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter}
from "react-router-dom";


class  Header extends Component {
    constructor(props) {
        super(props);

    }
    logoutHandler() {

    }
    render() {
        return (
                <div className="mainmenu-wrapper">
                    <div className="container">
                        <nav id="mainmenu" className="mainmenu">
                            <ul>
                                <li className="logo-wrapper"><h1>Play & Win</h1></li>
                                <li>
                                   
                                </li>
                
                            </ul>
                        </nav>
                    </div>
                </div>
                );
    }
}

export default withRouter(Header);
