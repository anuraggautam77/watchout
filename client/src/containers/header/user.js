
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
                             <li className="logo-wrapper">
                                <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                                     <img src="/img/web-logo.png" alt="AGARTHA"/>
                                </Link>
                             </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                );
    }
}

export default withRouter(Header);
