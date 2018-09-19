import React, { Component }
from "react";
//import ImageMapper from "react-image-mapper";

import ImageMapper from "../../common/ImageMapper";
import { withRouter } from "react-router-dom";
var floordata = require("../../common/floorplan");

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectname: '',
            map: [],
            showform: 'db',
            navigation: "dn",
            floorno: 10,
            name: '',
            lid: '',
            url: '../img/floorplan/desktop/10-floor.PNG',
            deviceid: window.localStorage.getItem('deviceToken')
        }
    }
    componentWillMount() {
        this.setState({"map": floordata[10]});
        var devicetoken = window.localStorage.getItem('deviceToken');
        var subscriber = window.localStorage.getItem('subscriber');
        if (subscriber !== null && devicetoken !== null) {
            // this.props.history.push('/');
        }
    }
    clicked(area) {
        this.setState({...this.state, projectname: area.title, lid: area.id});
    }
    registerUser() {
        if (this.refs.mobileno.value !== '' && this.refs.name.value !== '' && this.state.lid !== '' && this.state.projectname !== '') {
            var userInfo = {
                lid: this.state.lid,
                projectname: this.state.projectname,
                deviceid: this.state.deviceid,
                floorno: this.state.floorno,
                mobileno: this.refs.mobileno.value,
                name: this.refs.name.value
            }

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
                this.setState({...this.state, navigation: "db", showform: "dn", name: this.refs.name.value});
            });
        } else {
            alert("Fill all the form !!!")
        }
    }
    render() {
        console.log(this.refs);
        return (
                <div className="row">
                    <div className={ `col-xs-12 col-sm-8 col-md-6 ${this.state.showform}`}>
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
                                <ImageMapper  src={ this.state.url} map={ this.state.map}  onClick={ area => this.clicked(area)} />
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
                    <div className={
                                    `${this.state.navigation}`}>
                        <h2>  Hi {
                                                this.state.name},
                            Thank you for subscribing.  <small />
                        </h2>       
                
                    </div>
                </div>

                                );
        }
    }

    export default withRouter(Registration);
