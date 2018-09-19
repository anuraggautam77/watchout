/* global google, fetch */

import React, { Component } from 'react';
import '../style/css/user.scss';
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
                <div className="user-panel">
                    <div className="container">
                        <div className="header">
                            <div className="row">
                                <div className="col-md-4">
                                    <a href="/">
                                        <h3 className="text-muted">Abac</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Dashboard!!! </h1>
                            <h3 className="lead">List</h3>
                            <p className="lead">Select a poll to see the results and vote,</p>
                        </div>
                
                        <PollList/>
                
                        <footer className="footer">
                
                        </footer>
                    </div>
                </div>
                );
    }
}

export default MainPage;
