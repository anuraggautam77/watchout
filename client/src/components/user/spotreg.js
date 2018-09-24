import React, { Component }
from "react";

import { withRouter } from "react-router-dom";

class SpotReg extends Component {
    constructor(props) {
        super(props);
         
 

        this.state = {
            projectname: '',
            showform: 'db',
            navigation: "dn",
            showgrid: "dn",
            floorno: 10,
            name: '',
            selectedBlock: '',
            lid: '',
            deviceid: "",
            matrix: []
           
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

    }
    componentDidMount() {

      
    }
    gridClickHandler(e) {
        this.setState({...this.state,
            selectedBlock: e.currentTarget.getAttribute('blockid'),
            projectname: e.currentTarget.getAttribute('blockid'),
            lid: e.currentTarget.id});
    }
    registerUser() {
        if (this.refs.mobileno.value !== '' && this.refs.name.value !== '' && this.state.lid !== '' && this.state.projectname !== '') {

            var userInfo = {
                lid: this.state.lid,
                projectname: this.state.projectname,
                deviceid: "-",
                floorno: this.state.floorno,
                mobileno: this.refs.mobileno.value,
                name: this.refs.name.value
            };

            fetch('/api/spotreg', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            }).then(res => res.json()).then(json => {
                this.setState({...this.state, navigation: "db", showform: "dn", name: this.refs.name.value});
            });
        } else {
            alert("Fill all the form !!!");
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
                                    <h1>Footfall Registration</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className={ `basic-login ${this.state.showform}`}>
                                        <form role="form">
                                            <div className="form-group">
                                                <label><i className="icon-user"></i> <b>Nick Name</b></label>
                                                <input  type="text"  name="first_name" id="first_name" className="form-control input-sm" placeholder="Nick Name" required="required" ref="name"  />
                                            </div>
                                            <div className="form-group">
                                                <label><i className="icon-phone"></i> <b>Mobile Number</b></label>
                                                <input  id="mobileno"  name="Mobile No." ref="mobileno"  placeholder="Mobile No." className="form-control input-sm" required="required"  type="number"  />
                                            </div>
                                             
                                            <div className="form-group">
                                                <label><i className="icon-building"></i> <b>Select Floor</b></label>
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
                
                                            <div className="form-group">
                                                <div className={
                                                `row ${this.state.showgrid}`}>
                                                    <p> {this.state.projectname} </p>
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
                                        <div className='col-sm-12 col-md-12'>
                                            <div className="well panel-heading service-wrapper alignheading">
                                                <div className="widget-tile">
                                                    <section>
                                                        <h3> Thank you for registration</h3>
                                                        <div className="progress xs green"></div>
                                                        <div className="thanku-template">
                                                            <h3> Thanks for registration</h3>
                                                        </div>
                
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                         
                                    </div>
                
                
                                </div>
                                <div className="col-sm-4 col-sm-offset-1 social-login">
                                    <p>dummy text</p>
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

            export default withRouter(SpotReg);
