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
            list: []
        };
        var devicetoken = window.localStorage.getItem('deviceToken');
        var subscriber = window.localStorage.getItem('subscriber');
        if (subscriber === null && devicetoken == null) {
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
            this.setState({'list': json.pollList.concat(json.quizList)});
        });
    }
    render() {
        /*
         <div className="col-md-3 col-sm-6">
         <div className="service-wrapper">
         <img src="img/service-icon/diamond.png" alt="Service Name"/>
         <h3>Brilliant Look</h3>
         <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames. <a href="#">Read more...</a></p>
         </div>
         </div> */





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
                                <div className="col-md-6">
                                    <h1>Dashboard</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="listing">
                        <div className="section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5 col-sm-12">
                                        {childElements}  
                                    </div>
                                    <div className="col-md-2 col-sm-12"></div>
                                    <div className="col-md-5 col-sm-12" style={{"backgroundColor": "#efeff1", "borderRadius":"5px", "paddingTop": "14px"}}>
                                        <div className="portfolio-item-description" >
                                            <h3>Welcome to "Agartha" earthling!!</h3>
                                            <p>Agartha is all about creating better future with the help of history.
                                            </p>
                                            <p>
                                                We have exciting <b>goodies for top two referrers</b>, please share the message with fellow earthlings to help them board space-ship on this exciting journey.
                                            </p>
                
                                            <p><b>Quiz questions</b> will be posted at 11.00 AM, 1.00 PM and 3.00 PM every day. The winners for each quiz will be decided based on who correctly answers them the quickest and will be awarded a gift.</p>
                
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

    export default withRouter(PollList);
