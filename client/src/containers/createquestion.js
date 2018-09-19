import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../components/admin/question/index';
 import  AdminHeader from './header/admin'

class CreateQuestion extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    render() {
        return (
                <div className="wrapper">
                    <div className="main-panel">
                          <AdminHeader/>
                         
                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="content">
                                                <Index/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <footer className="footer">
                            <div className="container-fluid">
                                <div className="copyright pull-right">
                                </div>
                            </div>
                        </footer>
                
                
                    </div>
                </div>
                )
    }
}

export default CreateQuestion;
