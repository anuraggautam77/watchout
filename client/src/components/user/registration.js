import React, { Component }
from "react";

import ImageMapper from "../../common/ImageMapper";
import { withRouter } from "react-router-dom";
import Hashids from "hashids";
import { WhatsappShareButton, WhatsappIcon } from 'react-share';

//


var floordata = require("../../common/floorplan");

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectname: '',
            map: [],
            showform: 'db',
            navigation: "db",
            floorno: 10,
            name: '',
            lid: '',
            url: '../img/floorplan/desktop/10-floor.PNG',
            deviceid: window.localStorage.getItem('deviceToken')
        };

    }
    componentWillMount() {
        var devicetoken = window.localStorage.getItem('deviceToken');
        var subscriber = window.localStorage.getItem('subscriber');
        if (subscriber !== null && devicetoken !== null) {

            this.setState({"map": []});
            //  this.props.history.push('/mainpage');


        } else {
            this.setState({"map": floordata[10]});
        }


    }
    clicked(area) {
        this.setState({...this.state, projectname: area.title, lid: area.id});
    }
    registerUser() {
        if (this.refs.mobileno.value !== '' && this.refs.name.value !== '' && this.state.lid !== '' && this.state.projectname !== '') {
            var hashids = new Hashids(this.refs.name.value);
            var refcode = hashids.encode(1, 2, 3); // Z4UrtW

            var userInfo = {
                lid: this.state.lid,
                projectname: this.state.projectname,
                deviceid: this.state.deviceid,
                floorno: this.state.floorno,
                mobileno: this.refs.mobileno.value,
                name: this.refs.name.value,
                generatecode: refcode
            };



            fetch('/api/userregistration', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            }).then(res => res.json()).then(json => {
                window.localStorage.setItem('subscriber', json.data[0].id);
                window.localStorage.setItem('mno', this.refs.mobileno.value);
                window.localStorage.setItem('refercode', refcode);

                this.setState({...this.state, navigation: "db", showform: "dn", name: this.refs.name.value});
            });
        } else {
            alert("Fill all the form !!!")
        }
    }
    render() {

        return (
                <div className="row">
                    <div className={ `col-xs-12 col-sm-8 col-md-12 ${this.state.showform}`}>
                        <h2>
                            Please Sign Up <small />
                        </h2>
                        <hr className="colorgraph" />
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        className="form-control input-lg"
                                        placeholder="Name"
                                        required="required"
                                        ref="name"
                                        />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <input
                                        id="mobileno"
                                        name="Mobile No."
                                        ref="mobileno"
                                        placeholder="Mobile No."
                                        className="form-control"
                                        required="required"
                                        type="number"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <select 
                                    onChange={(event) => {

                        if (event.target.value !== '') {
                            this.setState({...this.state, floorno: event.target.value, "map": floordata[event.target.value],
                                url: `../img/floorplan/desktop/${event.target.value}-floor.PNG` })
                                    }
                                    }} 
                                    id="inputState" className="form-control">
                                    <option value="">Floor No ...</option>
                                    <option value="5">Floor-5</option>
                                    <option value="6">Floor-6</option>
                                    <option value="7">Floor-7</option>
                                    <option value="8">Floor-8</option>
                                    <option value="9">Floor-9</option>
                                    <option value="10">Floor-10</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                
                                {
                                                this.state.projectname }
                            </div>
                        </div>
                
                        <div className="row">
                            <div className="form-group canvas-container col-md-12">
                                {
                                                (() => {

                                                    if (this.state.map.length == 0) {

                                }else{
                                                                    return(<ImageMapper  src={ this.state.url} map={ this.state.map}  onClick={ area => this.clicked(area)} />)

                                }
                
                
                                })()
                
                                }
                            </div>
                        </div>
                        <hr className="colorgraph" />
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <input
                                    type="button"
                                    value="Register"
                                    className="btn btn-primary btn-login btn-lg"
                                    onClick={
                                            () => {
                                                this.registerUser()
                                                                                                                                                                                                                                                                                                                                  }}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className={ `col-xs-12 col-sm-8 col-md-12 ${this.state.navigation}`}>
                        <div className="row">
                
                            <h3> Hi {this.state.name},
                                Thanks for registration, Don't miss the notifications to increase your chances of winning prizes.  <small />
                            </h3>   
                
                            <p> Your referral code is:  <b>{window.localStorage.getItem('refercode')}  
                                    <WhatsappShareButton 
                                        url={`Referral Code: ${window.localStorage.getItem('refercode')}  url: ${location.origin}/${window.localStorage.getItem('refercode')}`}
                                        >
                                        <WhatsappIcon size={32} round={true} />       
                                    </WhatsappShareButton></b>
                                <a href={`sms://${window.localStorage.getItem('refercode')}`} >Send referral code by Message</a> 
                                <br/>
                                Share the referral code with friends and Earn Gift every Times!.<br/>
                                More friends. More Earning!
                            </p>      
                
                
                        </div>        
                
                
                
                    </div>
                
                </div>
                                            );
        }
    }

    export default withRouter(Registration);
