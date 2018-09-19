import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    render() {
        return (
                <div>
                    <div className="user-panel">
                        <div className="container">
                            <div className="header">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h3 className="text-muted">Admin</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1>Notification Panel </h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            Baisc Notification (All Registered User)
                                        </div>
                                        <div className="panel-body">
                                            <input type="text" id="title" className="form-control" placeholder="Title"/><br/>
                                            <div>
                                                <textarea className="form-control" placeholder="Notification Body">   </textarea>
                                            </div>
                                        </div>
                                        <div className="panel-footer">
                                            <input type="button" className="btn btn-success" value="Send Notification"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            Send Notification to winner
                                        </div>
                                        <div className="panel-body">
                                            <input type="button" className="btn btn-success" value="Send Notification"/>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            Send Notification to Team
                                        </div>
                                        <div className="panel-body">
                                            <input type="button" className="btn btn-success" value="Send Notification"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                
                        </div>
                    </div>
                
                
                
                </div>
                );
    }
}

export default Index;
