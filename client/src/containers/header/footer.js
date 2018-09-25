
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter}
from "react-router-dom";
import { WhatsappShareButton, WhatsappIcon } from 'react-share';

class  Footer extends Component {
    constructor(props) {
        super(props);

    }
    logoutHandler() {

    }
    render() {
        return (
                <div className="footer">
                    <div className="container">
                        <div className="row">
                        </div>
                
                    </div>
                </div>
                );
    }
}

export default withRouter(Footer);
