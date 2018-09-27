import React, { Component }
from "react";
import { BrowserRouter as Router, Route, Link, withRouter}
from "react-router-dom";
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
        if (subscriber !== null ) {
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
                deviceid: window.localStorage.getItem('deviceToken'),
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

                if (json.data.length > 0) {
                    window.localStorage.setItem('subscriber', json.data[0].id);
                    window.localStorage.setItem('mno', this.refs.mobileno.value);
                    window.localStorage.setItem('referralcode', refcode);
                    this.setState({...this.state, navigation: "db", showform: "dn", name: this.refs.name.value});
                } else {
                    alert("Please use Valid Referral code!!")
                }


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
                                    <h1>Register for Inter-Galactic VISA</h1>
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
                                                <p style={{"fontSize": "10px"}}><i>By registering, you are providing consent for sending Quiz/prize notifications to your mobile. </i></p>
                                                <button type="button"  onClick={ () => {
                                                        this.registerUser();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }} className="btn pull-right">Register</button>
                                                <div className="clearfix"></div>
                                            </div>
                                        </form>
                                    </div>
                
                                    <div className={`row ${this.state.navigation}`}>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="service-wrapper" style={{"padding": "0 18px 20px 18px"}}>
                                                <img src="/img/tick1.png" style={{"height": "93px"}} alt="Service 1"/>
                                                <h3> Thank you for registration</h3>
                                                <div className="progress xs green" style={{"height": "5px", "backgroundColor": "rgb(0, 150, 136)"}}></div>
                                                <h3>  Hi {this.state.name}!</h3>
                                                <p>Congratulations!! Your Inter-Galactic VISA has been approved and we are waiting to host you on Agartha. </p> 
                                                <Link className="btn" to={`/mainpage`}>   Go to Dashboard </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="service-wrapper" style={{"padding": "20px 18px 24px"}}>
                                                <img src="/img/share.png" style={{"height": "70px"}} alt="Service 1"/>
                                                <h3>Share your Refferal Code</h3>
                                                <div className="progress xs green" style={{"height": "5px", "backgroundColor": "rgb(0, 150, 136)"}}></div>
                                                <p> Forward or share your refferal code with your friends to get chance to win Prize.
                                                </p>
                                                <div className="row">
                
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="alert code "> {window.localStorage.getItem('referralcode')} </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <WhatsappShareButton 
                                                            url={`Referral Code: ${window.localStorage.getItem('referralcode')}  url: ${location.origin}/home/${window.localStorage.getItem('referralcode')}`}
                                                            > <WhatsappIcon size={32} round={true} />
                                                        </WhatsappShareButton>
                                                        <a href={`mailto:?subject=Referral Code ${window.localStorage.getItem('referralcode')}&body= url :${location.origin}/home/${window.localStorage.getItem('referralcode')}`}> <span style={{"fontSize": "20px", "color": "green", "top": "4px"}} className='glyphicon glyphicon-envelope'></span></a>
                                                        &nbsp; <a className="hidden-md" style={{"fontSize": "20px", "color": "green", "top": "9px"}} href={`sms://?&body=${location.origin}/home/${window.localStorage.getItem('referralcode')} Code=${window.localStorage.getItem('referralcode')}`} >SMS</a>
                
                
                                                    </div>
                
                                                </div>
                
                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                                <div className="col-sm-4 col-sm-offset-1 social-login">
                                    <div className="basic-login">                
                                        <div className="text-center">
                                            <img src="/img/Icon-100.png" alt="AGARTHA"/>
                                        </div>
                
                                        <div className="in-press press-wired text-center">
                                            <h4> THE FUTURE IS HISTORY</h4>
                                        </div>
                
                                        <div className="panel-group">
                                            <div className="panel panel-default">
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <p>"Space-ship" bound to Agartha will be taking off on  <b>4-Oct-2018. </b> 
                                                        Make the most of this once in a lifetime opportunity to travel the cosmos.
                                                    </p> 
                                                </div>
                
                                            </div>
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

                                                export default withRouter(Registration);
