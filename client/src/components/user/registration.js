import React, { Component }
from "react";
import { withRouter } from "react-router-dom";
import Hashids from "hashids";
import { WhatsappShareButton, WhatsappIcon } from 'react-share';
class Registration extends Component {
    constructor(props) {
        super(props);
        var referredby = '';
        console.log(">>>>>", this.props)
        if (this.props.match.hasOwnProperty('params')) {
            if (this.props.match.params.id) {
                referredby = this.props.match.params.id;
            }
        }

        this.state = {
            projectname: '',
            showform: 'db',
            navigation: "dn",
            showgrid: "dn",
            floorno: 10,
            name: '',
            selectedBlock: '',
            lid: '',
            deviceid: window.localStorage.getItem('deviceToken'),
            matrix: [],
            referralcode: '',
            referredby: referredby
        };
    }
    generateSquareMatrix(num, init, max, diff, floorno) {
        var arr = [], row, col;
        var i = init;
        var j = i + diff;
        for (row = 0; row < num; row++) {
            arr[row] = [];
            for (col = 0; col < num; col++) {
                arr[row][col] = `${floorno}F-${i} to ${floorno}F-${j}`
                i = j + 1;
                j = i + diff;
            }
        }
        return arr;
    }
    componentWillMount() {
        var devicetoken = window.localStorage.getItem('deviceToken');
        var subscriber = window.localStorage.getItem('subscriber');
        if (subscriber !== null && devicetoken !== null) {
             this.props.history.push('/mainpage');
        }

    }
    componentDidMount() {

        this.refs.referredby.value = this.state.referredby;
    }
    gridClickHandler(e) {
        this.setState({...this.state,
            selectedBlock: e.currentTarget.getAttribute('blockid'),
            projectname: e.currentTarget.getAttribute('blockid'),
            lid: e.currentTarget.id});
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
                referralcode: refcode,
                referredby: this.refs.referredby.value
            };
            fetch('/api/userregistration', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            }).then(res => res.json()).then(json => {
                console.log(json)
                window.localStorage.setItem('subscriber', json.data[0].id);
                window.localStorage.setItem('mno', this.refs.mobileno.value);
                window.localStorage.setItem('referralcode', refcode);
                this.setState({...this.state, navigation: "db", showform: "dn", name: this.refs.name.value});
            });
        } else {
            alert("Please fill all mandatory Fields !!!");
        }
    }
    checkstatus(id) {
        if (`Block-${id}` === this.state.selectedBlock) {
            return(`recall-grid-tile is-selected`);
        } else {
            return(`recall-grid-tile`);
        }

    }
    drawgrid() {
        let blockid = 0;
        const   template = this.state.matrix.map((row, rowIdx) => {
            return (
                    <div key={rowIdx}   className="recall-grid-row">
                        {
                            row.map((col, colIdx) => {
                                blockid++;
                                return (
                                                <div key={colIdx}
                                                     id={`${this.state.floorno}F-${rowIdx + 1}B-${colIdx + 1}R`} 
                                                     blockid={`Block-${blockid}`}
                                                     className={this.checkstatus(blockid) } 
                                                     onClick={(e) => {
                                                        this.gridClickHandler(e, colIdx)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }}
                                                     > 
                                                    <div> Seat No<br/>{ col }
                                                    </div>
                                                </div>
                                            )
                        })
                        }
                    </div>
                            )
        })
        return template;
    }
    render() {


        return (
                <div>
                    <div className="section section-breadcrumbs">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>Register with Play n Win</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="section galaxy-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className={ `basic-login ${this.state.showform}`}>
                                        <form role="form">
                                            <div className="form-group">
                                                <label><i className="icon-user"></i> <b>Nick Name<sup>*</sup></b></label>
                                                <input minLength="3" maxLength="20"  type="text"  name="first_name" id="first_name" className="form-control input-sm" placeholder="Nick Name" required="required" ref="name"  />
                                            </div>
                                            <div className="form-group">
                                                <label><i className="icon-phone"></i> <b>Mobile Number<sup>*</sup></b></label>
                                                <input  id="mobileno"  name="Mobile No." ref="mobileno"  placeholder="10 Digit Mobile No." 
                                                        className="form-control input-sm" required="required"  type="text" size="20" minLength="9" maxLength="10"/>
                                            </div>
                                            <div className="form-group">
                                                <label><i className="glyphicon glyphicon-gift"></i> <b>Refferal Code</b></label>
                                                <input  name="referredby"  ref="referredby" autoComplete="" size="20" minLength="0" maxLength="6"  placeholder="Use refferal Code if any !!" className="form-control input-sm"
                                                        onChange={
                    (e) => {
                        this.setState({...this.state, referredby: e.target.value })}}
                                                        type="text"
                                                        />
                                            </div>
                                            <div className="form-group">
                                                <label><i className="icon-building"></i> <b>Select Floor <sup>*</sup></b></label>
                                                <select   onChange={
                            (event) => {
                                if (event.target.value !== '') {
                                    this.setState({...this.state, floorno: event.target.value, showgrid: 'db', matrix: this.generateSquareMatrix(4, 1, 600, 39, event.target.value)  })
                                                          }else{
                                                                                      this.setState({...this.state, showgrid: 'dn'})
                                                          }
                                                          }} 
                                                          id="inputState" className="form-control input-sm">
                                                    <option value="">Floor No ...</option>
                                                    <option value="4">Floor-4</option>
                                                    <option value="5">Floor-5</option>
                                                    <option value="6">Floor-6</option>
                                                    <option value="7">Floor-7</option>
                                                    <option value="8">Floor-8</option>
                                                    <option value="9">Floor-9</option>
                                                    <option value="10">Floor-10</option>
                                                </select>
                                            </div>
                
                                            <div className={
                                                `form-group ${this.state.showgrid}`}>
                                                <label><i className="icon-building"></i> <b>Select Your Area <sup>*</sup> </b></label>
                                                <div className={ `row`}>
                
                                                    <div className="form-group canvas-container col-md-12">
                                                        <div className="recall-grid">
                                                            {this.drawgrid()}
                                                        </div>
                
                
                                                    </div>
                                                </div>
                
                                            </div>
                                            <div className="form-group">
                                                <button type="button"  onClick={ () => {
                                                    this.registerUser();
                                                                                                                                                                                                                                                                                                                  }} className="btn pull-right">Register</button>
                                                <div className="clearfix"></div>
                                            </div>
                                        </form>
                                    </div>
                
                
                
                                    <div className={`row ${this.state.navigation}`}>
                                        <div className='col-sm-12 col-md-6'>
                                            <div className="well panel-heading service-wrapper alignheading">
                                                <div className="widget-tile">
                                                    <section>
                                                        <h3> Thank you for registration</h3>
                                                        <div className="progress xs green"></div>
                                                        <div className="thanku-template">
                                                            <h2>  Hi {this.state.name}!</h2>
                                                            <h3> Thanks for registration</h3>
                                                            <div className="thanku-details">
                                                                <p>Don't miss the notifications to increase your chances of winning prizes.</p> 
                                                            </div>
                                                        </div>
                
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-md-6'>
                                            <div className="well panel-heading service-wrapper alignheading">
                                                <div className="widget-tile">
                                                    <section>
                                                        <h3> Refferal Code</h3>
                                                        <div className="progress xs green"></div>
                                                        <div className="row">
                                                            <div className="thanku-actions text-center">
                                                                <p> Forward or share your refferal code with your friends to get chance to win Prize.
                                                                </p>
                
                                                                <div className='col-sm-12 col-md-6'>  
                                                                    <div className="alert alert-success code "> {window.localStorage.getItem('referralcode')} </div>
                                                                </div>
                                                                <div className='col-sm-12 col-md-6 top'> 
                                                                    <WhatsappShareButton 
                                                                        url={`Referral Code: ${window.localStorage.getItem('referralcode')}  url: ${location.origin}/home/${window.localStorage.getItem('referralcode')}`}
                                                                        > <WhatsappIcon size={32} round={true} />
                                                                    </WhatsappShareButton>
                                                                    <span>
                                                                        <a href={`mailto:?subject=Referral Code ${window.localStorage.getItem('referralcode')}&body= url :${location.origin}/home/${window.localStorage.getItem('referralcode')}`}> <span className='glyphicon glyphicon-envelope icon-size'></span></a>
                                                                        <a href={`sms://?&body=${window.localStorage.getItem('referralcode')}`} >SMS</a>
                                                                    </span> 
                                                                </div> 
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                
                
                                </div>
                                <div className="col-sm-4 col-sm-offset-1 social-login">
                                    <p> </p>
                                    <div className="social-login-buttons">
                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>

                                                );
                }
            }

            export default withRouter(Registration);
