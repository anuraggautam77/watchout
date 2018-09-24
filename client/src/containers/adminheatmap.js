
import React, { Component }
from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../components/admin/heatmap/index';
import   '../style/css/App.scss';
import  AdminHeader from './header/admin'

        class Heatmap extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    render() {
        return (<div className="wrapper">
            <div className="main-panel">
                <AdminHeader/>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <Index/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                );
    }
}

export default Heatmap;
