import React, { Component } from 'react';

class  Quiz extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            ...this.props,
            notificationPanel: "dn",
            userid: null,
            notifymessage: 'dn'
        };
    }
    sendNotification() {
        var obj = {userid: this.state.userid}
        if (this.state.userid !== null) {
            obj.title = this.refs.title.value;
            obj.message = this.refs.message.value;

            fetch('/api/notifyquiz', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            }).then(res => res.json()).then(json => {

                if (json.data === 'sent') {
                    this.setState({...this.state, "notifymessage": "db"}, () => {
                        setTimeout(() => {
                            this.setState({...this.state, "notifymessage": "dn"});
                        }, 4000)
                    }
                    );
                }

            });


        } else {
            alert('Please select User')
        }

    }
    componentWillMount() {
        this.collectData();
    }
    collectData() {
        var k = 1;
        var arrData = [];
        this.state.que[0].options.map((option, i) => {
            var obj = {};
            obj['text'] = option;
            obj['option'] = `op${k}`;
            obj['count'] = 0;
            obj['correctoption'] = false;
            this.state.count.arrCount.map((countob) => {
                if (Object.keys(countob)[0] === `op${k}`) {
                    obj['count'] = countob[`op${k}`];
                    if (`op${k}` === this.state.que[0].ca[0]) {
                        obj['correctoption'] = true;
                    }
                }
            });
            k++;
            arrData.push(obj);
        });

        this.setState({finalData: arrData}, () => {
            console.log(this.state);
        })

    }
    renderList() {
        var template = this.state.finalData.map((option, i) => {
            return (<li 
                className={`list-group-item  ${option.correctoption ? 'list-group-item-success' : ''} `}
                key={i}> 
                <span className="badge"
                      >{option.count}</span>{option.text}</li>);
        });

        return template;
    }
    userList() {

        var template = this.state.users.map((option, i) => {
            return (<li  
            className={`list-group-item`}
            key={i}>  
            <span className="pull-right" ></span>
            Name: <b> {option.name}</b>
            <br/>
            Phone Number: <b> {option.mobile}</b>  
        </li>);
        });

        return template;
    }
    optionlist() {

        var template = this.state.users.map((option, i) => {
            return (<option value={option.userid} key={i}> {option.name}  </option>);
        });

        return template;
    }
    render() {
        return (
                <div>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <hr className="colorgraph" /> 
                            <div className="panel panel-default">
                                <div className="panel-heading">Result</div>
                                <div className="panel-body">
                                    <ul className="list-group">
                                        {  (() => this.renderList())() }
                                    </ul>
                                </div>
                                <div className="panel-footer"></div>
                            </div> 
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <hr className="colorgraph" />
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Send Notification to  User
                                </div>
                                <div className="panel-body">
                                    <div className={`alert alert-success ${this.state.notifymessage}`} role="alert">Notification Sent successfully</div>
                                    <select className="form-control selectpicker" 
                                            onChange={(eve) => {
                        this.setState({
                            ...this.state,
                            userid: eve.target.value  })
                                            }}
                                            >
                                        <option> Select User</option>
                                        {
                                                    (() => this.optionlist())() }
                
                                    </select>
                                    <br/>
                                    <input type="text" ref='title' id="title" className="form-control" placeholder="Title"/><br/>
                                    <div>
                                        <textarea defaultValue='' ref='message'  className="form-control" placeholder="Notification Body"></textarea>
                                    </div>
                                </div>
                                <div className="panel-footer">
                                    <input type="button" onClick={() => {
                                this.sendNotification()
                                                                                                                                                                                                                                                                                                                                }} className="btn btn-success" value="Send Notification"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <hr className="colorgraph" />
                            <div className="panel panel-default">
                                <div className="panel-heading">User who Attempt correct answer</div>
                                <div className="panel-body">
                                    <ul className="list-group">
                                        {  (() => this.userList())() }
                                    </ul>
                                </div>
                                <div className="panel-footer"></div>
                            </div> 
                        </div>
                    </div>
                </div>
                            );
        }
    }

    export default  Quiz;
