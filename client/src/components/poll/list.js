/* global google, fetch */

import React, { Component }
from 'react';
import { BrowserRouter as Router, Route, Link, withRouter}
from "react-router-dom";
import Masonry from 'react-masonry-component';
const masonryOptions = {
    transitionDuration: 6
};
const imagesLoadedOptions = {background: '.my-bg-image-el'};
class PollList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            refferalCode: [],
            winnerlist: []
        };
        var devicetoken = window.localStorage.getItem('deviceToken');
        var subscriber = window.localStorage.getItem('subscriber');

        if (subscriber === null) {
            this.props.history.push('/');
        }

    }
    componentWillMount() {
        fetch('/api/pollquizlist', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(res => res.json()).then(json => {
            this.setState({'list': json.pollList.concat(json.quizList), refferalCode: json.refferalCode});
        });

        fetch('/api/winnerlist', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(res => res.json()).then(json => {
            this.setState({...this.state, 'winnerlist': json.winnerlist});
        });

    }
    refferalcode() {

        var template = this.state.refferalCode.map((option, i) => {
            return (
                    <li className={`list-group-item`} style={{"textAlign": "left"}}   key={i}>  
                        <strong>{option.name}</strong>  <span className="badge" >{option.userCount}</span> 
                    </li>);
                    });
            return template;
        }
        winnerlist() {

            var template = this.state.winnerlist.map((option, i) => {
                if(option.name!==''){
                       return (
                        <li className={`list-group-item`} style={{"textAlign": "left"}}   key={i}>  
                         <span>Q{i+1}. {option.question}</span><br/>  
                         <span>  <strong>{option.name}</strong></span> 
                   </li>);  
                }
               
                        });
                return template;
            }
            render() {


                const childElements = this.state.list.map((obj, index) => {
                    return (<div className="image-element-class col-md-12 col-sm-12" key={obj.id}>
                    
                        <div className="service-wrapper">
                            <div className="ribbon-wrapper">
                                <div className="price-ribbon ribbon-green"> {obj.type} </div>
                            </div>
                            <h2 className="pricing-plan-title">{index + 1}) Question</h2>
                            <div className="content">
                                <h3 className="title">{obj.detail.qus}</h3> 
                                <Link className="btn" to={`/question/${obj.id}/${obj.type.toLocaleLowerCase()}`}> 
                                See {obj.type}  </Link>
                            </div>
                    
                        </div>
                    </div>
                            );
                });
                return (
                        <div>
                        
                            <div className="section section-breadcrumbs">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h1>Dashboard</h1>
                                            <br/>
                                            <div style={{"color": "#efeff1"}}>
                                                <p>
                                                    We have exciting <b>goodies for top two referrers</b>, please share the message with fellow earthlings to help them board space-ship on this exciting journey.
                                                </p>
                                            </div> 
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-3">
                                            <div className="panel panel-default" >
                                                <div className="panel-heading"><b> Leading Referrals!!  </b></div>
                                                <div className="panel-body text-center" style={{"padding": "0"}} >
                                                    {  (() => this.refferalcode())() }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="listing">
                                <div className="section">
                                    <div className="container">
                                        <div className="row">
                        
                        
                                            <div className="col-md-5 col-sm-12" >
                                                <div className="portfolio-item-description"  style={{"backgroundColor": "#efeff1", "borderRadius": "5px", "padding": "14px", "margin": "17px"}}>
                                                    <h3> <img src="/img/balloon.jpg" style ={{"borderRadius": "50%"}} /> .... And the winners are !!</h3>
                                                    <img src="/img/winner.png" style={{"width": "100%"}} />
                                                    <div className="panel-body text-center" style={{"padding": "0"}} >
                                                        {  (() => this.winnerlist())() }
                                                    </div>
                                                </div>
                        
                        
                                            </div>
                                            <div className="col-md-1 col-sm-12"></div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="portfolio-item-description"  style={{"backgroundColor": "#efeff1", "borderRadius": "5px", "padding": "14px", "margin": "15px"}}>
                        
                                                    <p><b>Quiz questions</b> will be posted at 11.00 AM, 1.00 PM and 3.00 PM every day. The winners for each quiz will be decided based on who correctly answers them the quickest and will be awarded a gift.</p> 
                        
                                                </div>
                                                {childElements}  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                            );
                                                }
                                            }

                                            export default withRouter(PollList);
